// Shows a gray box with the expected file name when an image is missing,
// so you can see where each photo goes. Safe to keep after adding real photos.
document.querySelectorAll("img").forEach(function (img) {
  function swap() {
    var box = document.createElement("div");
    box.className = img.className + " placeholder";
    box.textContent = img.getAttribute("src");
    var w = img.getBoundingClientRect().width;
    if (img.closest(".gallery")) { box.style.aspectRatio = "4 / 3"; }
    if (img.classList.contains("avatar")) { box.style.borderRadius = "50%"; }
    if (!w && !img.closest(".gallery")) { box.style.minHeight = "120px"; }
    img.replaceWith(box);
  }
  if (img.complete && img.naturalWidth === 0) { swap(); }
  else { img.addEventListener("error", swap); }
});
