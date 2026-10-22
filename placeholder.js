// 1) When an image or video file is missing, show a box with the expected file name
//    so you can see where each file goes. Safe to keep after adding real files.
// 2) If the visitor prefers reduced motion, demo videos don't autoplay;
//    they show the first frame with play controls instead.
function makeBox(el) {
  var box = document.createElement("div");
  box.className = (el.className ? el.className + " " : "") + "placeholder";
  box.textContent = el.getAttribute("src");
  el.replaceWith(box);
}

document.querySelectorAll("img").forEach(function (img) {
  if (img.complete && img.naturalWidth === 0) { makeBox(img); }
  else { img.addEventListener("error", function () { makeBox(img); }); }
});

document.querySelectorAll("video").forEach(function (v) {
  if (v.error) { makeBox(v); }
  else { v.addEventListener("error", function () { makeBox(v); }); }
});

if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("video[autoplay]").forEach(function (v) {
    v.removeAttribute("autoplay");
    v.pause();
    v.controls = true;
  });
}
