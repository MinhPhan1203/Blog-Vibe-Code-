// 01. GIAO DIỆN SÁNG / TỐI
// Lưu lựa chọn của người dùng; lần đầu theo màu của hệ thống.
const themeButton = document.querySelector('.theme-toggle');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const dark = theme === 'dark';
  themeButton.querySelector('.theme-name').textContent = dark ? 'Mocha' : 'Latte';
  themeButton.setAttribute(
    'aria-label',
    dark ? 'Switch to light theme' : 'Switch to dark theme'
  );
  themeButton.title = dark ? 'Switch to Catppuccin Latte' : 'Switch to Catppuccin Mocha';
  document.querySelector('meta[name="theme-color"]').content = dark
    ? '#1e1e2e'
    : '#eff1f5';
}
applyTheme(
  document.documentElement.dataset.theme || (systemTheme.matches ? 'dark' : 'light')
);
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(theme);
  try {
    localStorage.setItem('minh-theme', theme);
  } catch {
    // Trình duyệt có thể chặn localStorage; giao diện vẫn hoạt động.
  }
});
systemTheme.addEventListener('change', (event) => {
  try {
    if (!localStorage.getItem('minh-theme')) applyTheme(event.matches ? 'dark' : 'light');
  } catch {
    // Trình duyệt có thể chặn localStorage; giao diện vẫn hoạt động.
  }
});
// 02. MENU ĐIỆN THOẠI
// Đóng menu khi chọn liên kết, nhấn Escape hoặc bấm ra ngoài.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.header')) closeMenu();
});
matchMedia('(min-width: 681px)').addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});
// 03. HIỆU ỨNG KHI CUỘN TRANG
// Bỏ qua animation nếu người dùng bật chế độ giảm chuyển động.
if (
  'IntersectionObserver' in window &&
  !matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  document
    .querySelectorAll('.section-heading, .card, .featured-post, .connect')
    .forEach((element) => observer.observe(element));
}

// 04. DẢI SỞ THÍCH CHẠY NGANG
// Chuyển động nằm trong CSS; JavaScript chỉ xử lý nút dừng / chạy.
// Trang blog không có dải này nên cần kiểm tra phần tử trước khi sử dụng.
const interestStrip = document.querySelector('.interest-strip');
const marqueeButton = document.querySelector('.marquee-toggle');

if (interestStrip && marqueeButton) {
  marqueeButton.addEventListener('click', () => {
    const paused = interestStrip.classList.toggle('is-paused');
    const label = paused ? 'Resume scrolling interests' : 'Pause scrolling interests';
    marqueeButton.setAttribute('aria-pressed', String(paused));
    marqueeButton.setAttribute('aria-label', label);
    marqueeButton.title = label;
    marqueeButton.textContent = paused ? 'Play' : 'Pause';
  });
}
