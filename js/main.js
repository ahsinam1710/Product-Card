$(document).ready(function () {
  $(".colors span").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    let color = $(this).css("background");

    $(".box-conatiner").css("background", color);

    let image = $(this).attr("data-image");

    $(".image img").attr("src", image);
  });
});
