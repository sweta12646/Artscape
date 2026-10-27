// Simple scroll animation or button event example
document.querySelectorAll("button, .btn-primary, .btn-secondary").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    alert("Feature coming soon! 🙂");
  });
});
