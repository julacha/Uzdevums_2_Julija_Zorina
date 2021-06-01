let addmenu = document.querySelector(".menu_img");
let resp_menu = document.querySelector(".responsive_menu");
let close_menu = document.querySelector(".menu_close");
let menu_mobile = document.querySelector(".menu_mobile");
let resp_menu_mob = document.querySelector(".resp_menu_mobile");
let menu_closemob = document.querySelector(".menu_closemobile");
addmenu.addEventListener("click", function(){
    if (resp_menu.classList.contains("_active")) {
        resp_menu.classList.remove("_active");
      } else {
        resp_menu.classList.add("_active");
}
});

close_menu.addEventListener("click", function(){
  if (resp_menu.classList.contains("_active")) {
      resp_menu.classList.remove("_active");
    } else {
      resp_menu.classList.add("_active");
}
});

menu_mobile.addEventListener("click", function(){
  if (resp_menu_mob.classList.contains("_active")) {
    resp_menu_mob.classList.remove("_active");
    } else {
      resp_menu_mob.classList.add("_active");
}
});

menu_closemob.addEventListener("click", function(){
  if (resp_menu_mob.classList.contains("_active")) {
    resp_menu_mob.classList.remove("_active");
    } else {
      resp_menu_mob.classList.add("_active");
}
});


$(".play").on("click", function(){
  $('.video_1')[0].play();
  $('.play').hide();
  });
  $(".video_1").on("click", function(){
  $('.video_1')[0].pause();
  $('.play').show();
  });

  $('.video_1').click(function(){this.paused?this.play():this.pause();});