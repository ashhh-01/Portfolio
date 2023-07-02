const navMenu=document.getElementById("nav-menu"),
    navToggle=document.getElementById("nav-toggle"),
    navClose=document.getElementById("nav-close")
// Show Menu
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu");
        navToggle.style.display="none";
    })
}
// Close Menu
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu");
        navToggle.style.display="inline-block"
    })
}

const navLink=document.querySelectorAll(".nav_link")
function linkAction(){
    navMenu.classList.remove('show-menu')
    navToggle.style.display="inline-block"
}
navLink.forEach(n=>n.addEventListener('click',linkAction))