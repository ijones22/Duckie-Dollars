$(".duck").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
  $(this).removeClass("animated");
});

$("#duck_button").click(function () {
  $(".duck").addClass("animated");
});

var clicks = 0;

function onClick() {
  clicks += 0.01;
  document.getElementById("clicks").innerHTML = formatter.format(clicks);
}

$("#donate").click(function() {
    $('.transform').toggleClass('transform-active');
  });


const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});
