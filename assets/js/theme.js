let addmenu = document.querySelector(".menu_img");
let resp_menu =document.querySelector(".responsive_menu");
addmenu.addEventListener("click", function(){
    if (resp_menu.classList.contains("_active")) {
        resp_menu.classList.remove("_active");
      } else {
        resp_menu.classList.add("_active");
}
});

