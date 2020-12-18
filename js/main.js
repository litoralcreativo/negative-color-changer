const black = document.querySelector('.black');
window.onmousemove = function (e) {
  const y = e.clientY;
  black.style.top = y + 'px';
}
