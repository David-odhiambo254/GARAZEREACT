import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./pages/routes.generated";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from 'react';
import { initPlugins } from './utils/initPlugins';

export default function App() {
  useEffect(()=>{
    // initialize header/footer plugins on mount and on SPA navigation
    if(typeof initPlugins === 'function') initPlugins();
    const onPop = ()=>{ if(typeof initPlugins === 'function') initPlugins(); window.scrollTo(0,0); };
    window.addEventListener('popstate', onPop);
    return ()=> window.removeEventListener('popstate', onPop);
  },[]);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {routes.map((r) => {
            const Component = r.component;
            return <Route key={r.path} path={r.path} element={<Component />} />;
          })}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
