function myFunction(imgs) {
  var expandImg = document.querySelector(".photography__expandedImg");
  var imgText = document.querySelector(".photography__imgtext");
  expandImg.src = imgs.src;
  // imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "flex";
}
