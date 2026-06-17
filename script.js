// ===== ナビゲーション開閉（モバイル） =====
function toggleNav() {
  document.querySelector('.site-nav').classList.toggle('open');
}

// ===== 戻るボタン（1ページ前に戻る） =====
// 直前に見ていたページがあれば戻る。直接アクセスなどで履歴がない場合は、
// リンク先（その章の目次）にフォールバックする。
function goBack(e) {
  if (window.history.length > 1 && document.referrer) {
    e.preventDefault();
    window.history.back();
  }
}

// ===== 用語ツールチップ（タップ対応） =====
// PCはCSSのhoverで表示。スマホ等タップ環境では、用語をタップで開閉する。
document.addEventListener('click', (e) => {
  const term = e.target.closest('.term');
  // 開いている他の用語を閉じる
  document.querySelectorAll('.term.open').forEach(t => {
    if (t !== term) t.classList.remove('open');
  });
  if (term) {
    term.classList.toggle('open');
    e.stopPropagation();
  }
});

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
