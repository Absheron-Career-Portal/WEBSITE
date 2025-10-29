
document.querySelectorAll('.No-Select').forEach(el => {
  el.addEventListener('dragstart', event => {
    event.preventDefault();
  });
});
