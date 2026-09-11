(() => {
  'use strict';

  const MEASUREMENT_ID = 'G-WL24CE9YN9';
  const STORAGE_KEY = 'bartas93_analytics_consent';
  const VALID_CHOICES = new Set(['granted', 'denied']);
  let analyticsLoaded = false;

  function getConsent() {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      return VALID_CHOICES.has(value) ? value : null;
    } catch {
      return null;
    }
  }

  function saveConsent(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Analytics still follows the current choice for this page view.
    }
  }

  function loadHotjar() {
    const marker = document.querySelector('meta[name="hotjar-site-id"]');
    if (!marker || window.hj) return;

    const siteId = Number(marker.content);
    if (!Number.isInteger(siteId)) return;

    window.hj = function hj() {
      (window.hj.q = window.hj.q || []).push(arguments);
    };
    window._hjSettings = { hjid: siteId, hjsv: 6 };

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://static.hotjar.com/c/hotjar-${siteId}.js?sv=6`;
    document.head.appendChild(script);
  }

  function loadAnalytics() {
    if (analyticsLoaded) return;
    analyticsLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag('consent', 'default', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
    loadHotjar();
  }

  window.trackAnalyticsEvent = (name, parameters = {}) => {
    if (getConsent() !== 'granted') return;
    loadAnalytics();
    window.gtag('event', name, parameters);
  };

  function removeBanner() {
    document.querySelector('.analytics-consent')?.remove();
  }

  function renderSettingsButton() {
    if (document.querySelector('.analytics-settings')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'analytics-settings';
    button.textContent = 'Ustawienia analityki';
    button.addEventListener('click', renderBanner);

    document.body.appendChild(button);
  }

  function chooseConsent(value) {
    saveConsent(value);
    removeBanner();
    if (value === 'granted') {
      if (analyticsLoaded) window.gtag('consent', 'update', { analytics_storage: 'granted' });
      else loadAnalytics();
    } else if (analyticsLoaded) {
      window.gtag('consent', 'update', { analytics_storage: 'denied' });
      window.location.reload();
      return;
    }
    renderSettingsButton();
  }

  function renderBanner() {
    removeBanner();
    document.querySelector('.analytics-settings')?.remove();

    const banner = document.createElement('section');
    banner.className = 'analytics-consent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-modal', 'false');
    banner.setAttribute('aria-labelledby', 'analytics-consent-title');
    banner.innerHTML = `
      <div class="analytics-consent__copy">
        <strong id="analytics-consent-title">Analityka i prywatność</strong>
        <p>Google Analytics pomaga mierzyć ruch, typ urządzenia i użycie strony. Dane analityczne włączymy tylko za Twoją zgodą.</p>
      </div>
      <div class="analytics-consent__actions">
        <button type="button" data-analytics-choice="denied">Tylko niezbędne</button>
        <button type="button" class="analytics-consent__accept" data-analytics-choice="granted">Akceptuję</button>
      </div>`;

    banner.querySelectorAll('[data-analytics-choice]').forEach((button) => {
      button.addEventListener('click', () => chooseConsent(button.dataset.analyticsChoice));
    });

    document.body.appendChild(banner);
    banner.querySelector('.analytics-consent__accept').focus({ preventScroll: true });
  }

  function initialize() {
    const consent = getConsent();
    if (consent === 'granted') loadAnalytics();
    if (consent) renderSettingsButton();
    else renderBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
