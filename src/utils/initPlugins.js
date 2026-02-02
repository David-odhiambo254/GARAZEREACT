export function initPlugins() {
    // Reinitialize UI plugins that require DOM to be present after SPA navigation
    try {
        if (window.AOS && typeof window.AOS.init === 'function') {
            window.AOS.init();
        }
        if (window.WOW && typeof window.WOW === 'function') {
            /* eslint-disable no-new */
            new window.WOW({ mobile: false }).init();
        }
        if (window.jQuery) {
            // trigger common events that plugins listen to
            try { window.jQuery(window).trigger('resize'); } catch (e) { }
            try { window.jQuery(window).trigger('scroll'); } catch (e) { }
        }
    } catch (e) {
        // ignore
    }
}
