(() => {
  const script = document.currentScript;
  const project = script?.dataset.project;
  const hosts = (script?.dataset.hosts || '').split(',');
  const key = 'website-clarity-consent-v1';
  let loaded = false;
  function saved() {
    try { const value = JSON.parse(localStorage.getItem(key) || 'null');
      return value?.expires > Date.now() && value.choice === 'granted';
    } catch { return false; }
  }
  function clearCookies() {
    for (const name of ['_clck', '_clsk']) {
      const expired = name + '=; Max-Age=0; Path=/; SameSite=Lax; Secure';
      document.cookie = expired;
      for (const host of [location.hostname, location.hostname.replace(/^www\./, '')]) document.cookie = expired + '; Domain=' + host;
    }
  }
  function apply(accepted) {
    if (!accepted) {
      window.clarity?.('consentv2', { analytics_Storage: 'denied', ad_Storage: 'denied' });
      clearCookies();
      if (loaded) location.reload();
      return;
    }
    if (loaded || !project || !hosts.includes(location.hostname)) return;
    loaded = true;
    window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
    window.clarity('consentv2', { analytics_Storage: 'granted', ad_Storage: 'denied' });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.clarity.ms/tag/' + project;
    if (script.nonce) tag.nonce = script.nonce;
    document.head.appendChild(tag);
  }
  document.addEventListener('click', event => {
    const button = event.target.closest?.('[data-analytics-choice], [data-consent]');
    if (!button) return;
    const choice = button.dataset.analyticsChoice || button.dataset.consent;
    if (!['granted', 'denied'].includes(choice)) return;
    try { localStorage.setItem(key, JSON.stringify({choice, expires:Date.now() + 180 * 86400000})); } catch {}
    apply(choice === 'granted');
  }, true);
  window.addEventListener('storage', event => { if (event.key === key || event.key === null) location.reload(); });
  apply(saved());
})();
