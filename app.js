const sidebarBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const windows = document.querySelector("body");
const sidebarShadow = document.querySelector(".shadow-overlay");

sidebarBtn.addEventListener("click", function (event) {
  event.stopPropagation();

  sidebar.classList.add("show-sidebar");

  windows.style.overflowY = "hidden";

  window.addEventListener("click", closeSidebar);
  sidebarShadow.classList.toggle("show-shadow");
  sidebarShadowToggle();
});

function closeSidebar() {
  sidebar.classList.remove("show-sidebar");
  sidebarShadow.classList.remove("show-shadow");
  windows.style.overflowY = "scroll";
}

closeBtn.addEventListener("click", function (event) {
  closeSidebar();
});

sidebar.addEventListener("click", function (event) {
  event.stopPropagation();
});

const navbarContainer = document.querySelector(".navbar-container");


window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbarContainer.getBoundingClientRect().height
   
    if(scrollHeight > navHeight){
       navbarContainer.classList.add("fixed-navbar")
    } else{
       navbarContainer.classList.remove("fixed-navbar")
    }
})