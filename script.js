// スマホメニュー：リンクを押したら自動で閉じる
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
  });
});

// スクロールでふわっと表示
const fadeItems = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

fadeItems.forEach((item) => {
  observer.observe(item);
});

// フォーム入力チェック
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value.trim();
  const email = contactForm.querySelector('input[type="email"]').value.trim();
  const message = contactForm.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("お名前・メールアドレス・お問い合わせ内容を入力してください。");
    return;
  }

  alert("お問い合わせありがとうございます。内容を確認しました。");
  contactForm.reset();
});