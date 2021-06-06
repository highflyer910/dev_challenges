var btn = $('.btn');

btn.on('click', function() {
  $(this).toggleClass('active');
  $(this).toggleClass('not-active');
});

function showNav() {
  document.getElementsByClassName("box")[0].classList.toggle("active");
}