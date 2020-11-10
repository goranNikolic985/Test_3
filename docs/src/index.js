import SmoothScroll from 'smooth-scroll';
window.onload = init;

/*starter function */
function init() {
  new SmoothScroll('a[href*="#"]');
}
