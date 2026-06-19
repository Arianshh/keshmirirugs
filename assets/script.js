const WHATSAPP_NUMBER = "989128692978";

function openWhatsApp(category) {
  const rugCategory = category || "Persian Rugs";
  const text = encodeURIComponent(`Hello Keshmiri Rugs, I want to see more or purchase from the ${rugCategory} collection.`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

document.addEventListener("click", function(e) {
  const btn = e.target.closest("[data-whatsapp]");
  if (!btn) return;
  openWhatsApp(btn.getAttribute("data-category"));
});
