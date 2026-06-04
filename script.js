// ===== ナビゲーション開閉（モバイル） =====
function toggleNav() {
  document.querySelector('.site-nav').classList.toggle('open');
}

// ===== アコーディオン =====
function toggleAcc(el) {
  el.closest('.acc-item').classList.toggle('open');
}

// ===== タブ切り替え =====
function switchTab(btn, panelId) {
  const tabs = btn.closest('.tabs');
  tabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  tabs.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}

// ===== スクロールフェードイン =====
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ヘッダーのスクロール影
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 20 ? '0 2px 20px rgba(43,41,37,0.06)' : 'none';
    });
  }
});
