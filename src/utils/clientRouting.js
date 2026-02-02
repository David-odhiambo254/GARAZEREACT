export function registerInternalLinkHandler() {
    function onClick(e) {
        const a = e.target.closest && e.target.closest('a');
        if (!a) return;
        const href = a.getAttribute('href');
        if (!href) return;
        // only intercept internal links that start with '/'
        if (href.startsWith('/') && !href.startsWith('/assets') && !href.startsWith('http')) {
            e.preventDefault();
            const to = href;
            window.history.pushState({}, '', to);
            window.dispatchEvent(new PopStateEvent('popstate'));
        }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
}
