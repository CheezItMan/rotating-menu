document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.container');
  const open = document.querySelector('#open');
  const close = document.querySelector('#close');

  open.addEventListener('click', function () {
    console.log('open');
    container.classList.add('show-nav');
  });

  close.addEventListener('click', function () {
    container.classList.remove('show-nav');
  });
});
