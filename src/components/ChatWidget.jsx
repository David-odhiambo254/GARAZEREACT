import React, { useState, useRef, useEffect } from "react";
import "./ChatWidget.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const fileRef = useRef(null);

  useEffect(() => {
    return () => {
      // revoke object URLs on unmount
      messages.forEach((m) => {
        if (m.url) URL.revokeObjectURL(m.url);
      });
    };
  }, [messages]);

  function toggle() {
    setOpen((o) => !o);
  }

  // Upload endpoint: expects multipart/form-data with 'file' field, returns JSON (e.g. { url: 'https://...' })
  const UPLOAD_URL = import.meta.env.VITE_UPLOAD_URL || "/api/upload";

  function onFiles(files) {
    if (!files) return;
    const arr = Array.from(files).filter(
      (f) => f.type && f.type.startsWith("image/"),
    );
    if (arr.length === 0) return;
    const newMsgs = arr.map((f) => ({
      id: Date.now() + Math.random(),
      type: "image",
      file: f,
      url: URL.createObjectURL(f),
      status: "ready", // ready | uploading | success | error
      progress: 0,
      serverResponse: null,
    }));
    setMessages((m) => [...m, ...newMsgs]);
  }

  function openFilePicker() {
    fileRef.current && fileRef.current.click();
  }

  function removeMessage(id) {
    setMessages((m) => {
      const rem = m.find((x) => x.id === id);
      if (rem && rem.url) URL.revokeObjectURL(rem.url);
      return m.filter((x) => x.id !== id);
    });
  }

  function uploadFile(id) {
    const msg = messages.find((x) => x.id === id);
    if (!msg || !msg.file) return;

    // update status to uploading
    setMessages((m) =>
      m.map((x) =>
        x.id === id ? { ...x, status: "uploading", progress: 0 } : x,
      ),
    );

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", UPLOAD_URL);

      xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
          const pct = Math.round((e.loaded / e.total) * 100);
          setMessages((m) =>
            m.map((x) => (x.id === id ? { ...x, progress: pct } : x)),
          );
        }
      };

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          let resp = null;
          try {
            resp = JSON.parse(xhr.responseText);
          } catch (err) {
            resp = xhr.responseText;
          }
          setMessages((m) =>
            m.map((x) =>
              x.id === id
                ? {
                    ...x,
                    status: "success",
                    progress: 100,
                    serverResponse: resp,
                  }
                : x,
            ),
          );
          resolve(resp);
        } else {
          setMessages((m) =>
            m.map((x) => (x.id === id ? { ...x, status: "error" } : x)),
          );
          reject(new Error("Upload failed: " + xhr.status));
        }
      };

      xhr.onerror = function () {
        setMessages((m) =>
          m.map((x) => (x.id === id ? { ...x, status: "error" } : x)),
        );
        reject(new Error("Upload request error"));
      };

      const fd = new FormData();
      fd.append("file", msg.file);
      xhr.send(fd);
    });
  }

  const [sending, setSending] = useState(false);
  const [chatReply, setChatReply] = useState(null);

  async function sendAll() {
    const toSend = messages.filter(
      (x) => x.status === "ready" || x.status === "error",
    );
    if (toSend.length === 0) return;
    setSending(true);

    // upload all and wait for results
    const settled = await Promise.allSettled(
      toSend.map((m) => uploadFile(m.id)),
    );

    const urls = settled
      .filter((r) => r.status === "fulfilled" && r.value && r.value.url)
      .map((r) => r.value.url);

    if (urls.length === 0) {
      setSending(false);
      return;
    }

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: "What is in this image?",
          image_urls: urls,
        }),
      });
      const data = await resp.json();
      setChatReply(data);
    } catch (err) {
      setChatReply({ error: err.message });
    } finally {
      setSending(false);
    }
  }

  function retry(id) {
    uploadFile(id).catch(() => {});
  }

  return (
    <div className="chat-widget-root" aria-live="polite">
      <button
        className="chat-fab"
        aria-label="Open chat"
        onClick={toggle}
        title="Chat with us"
      >
        {/* chat bubble SVG */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"
            fill="#fff"
          />
        </svg>
      </button>

      {open && (
        <div
          className="chat-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Chat window"
        >
          <div className="chat-window">
            <header className="chat-header">
              <strong>Chat</strong>
              <button
                className="chat-close"
                onClick={toggle}
                aria-label="Close chat"
              >
                ✕
              </button>
            </header>
            <div className="chat-body">
              {chatReply && (
                <div className="chat-model-reply">
                  <pre>{JSON.stringify(chatReply, null, 2)}</pre>
                </div>
              )}
              {messages.length === 0 && (
                <div className="chat-empty">
                  No messages yet. Upload images or take photos.
                </div>
              )}
              <ul className="chat-list">
                {messages.map((m) => (
                  <li key={m.id} className="chat-item">
                    {m.type === "image" && (
                      <div className="chat-image-wrap">
                        <img src={m.url} alt="Uploaded" />

                        <div className={`status-badge ${m.status}`}>
                          {m.status === "uploading" ? (
                            `${m.progress}%`
                          ) : m.status === "success" ? (
                            "✓"
                          ) : m.status === "error" ? (
                            <button
                              className="retry-btn"
                              onClick={() => retry(m.id)}
                            >
                              Retry
                            </button>
                          ) : (
                            "Ready"
                          )}
                        </div>

                        {m.status === "uploading" && (
                          <div className="progress">
                            <div
                              className="progress-bar"
                              style={{ width: `${m.progress}%` }}
                            />
                          </div>
                        )}

                        {m.serverResponse && (
                          <div className="server-response">
                            {m.serverResponse.url ? (
                              <a
                                href={m.serverResponse.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                View
                              </a>
                            ) : (
                              <pre>{JSON.stringify(m.serverResponse)}</pre>
                            )}
                          </div>
                        )}

                        <div className="image-actions">
                          <button
                            className="remove-btn"
                            onClick={() => removeMessage(m.id)}
                            aria-label="Remove image"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <footer className="chat-footer">
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                capture="environment"
                multiple
                onChange={(e) => onFiles(e.target.files)}
                style={{ display: "none" }}
              />
              <button
                className="attach-btn"
                onClick={openFilePicker}
                title="Upload or take photos"
              >
                📷
              </button>
              <button
                className="send-btn"
                onClick={sendAll}
                disabled={
                  sending ||
                  !messages.some(
                    (m) => m.status === "ready" || m.status === "error",
                  )
                }
                title="Send images"
              >
                {sending ? "Sending..." : "Send"}
              </button>
              <button className="close-btn" onClick={toggle}>
                Close
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
