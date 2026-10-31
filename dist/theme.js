(() => {
  const key = 'atlas-theme';
  let saved;
  try { saved = localStorage.getItem(key); } catch {}
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let explicit = saved === 'light' || saved === 'dark';
  let theme = explicit ? saved : preference.matches ? 'dark' : 'light';
  function apply() {
    document.documentElement.dataset.theme = theme;
    const button = document.getElementById('theme-toggle');
    if (button) {
      const next = theme === 'dark' ? 'ライトテーマ' : 'ダークテーマ';
      button.textContent = '';
      button.setAttribute('aria-label', window.atlasTranslate ? window.atlasTranslate(next) : next + 'に切り替え');
      button.title = window.atlasTranslate ? window.atlasTranslate(next) : next + 'に切り替え';
    }
  }
  apply();
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    document.getElementById('theme-toggle').addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      explicit = true;
      try { localStorage.setItem(key, theme); } catch {}
      apply();
    });
  });
  const followSystem = event => { if (!explicit) { theme = event.matches ? 'dark' : 'light'; apply(); } };
  if (preference.addEventListener) preference.addEventListener('change', followSystem);
  else if (preference.addListener) preference.addListener(followSystem);
})();
