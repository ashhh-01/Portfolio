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


// Qualification
const tabs=document.querySelectorAll("[data-target]"),
    tabContents=document.querySelectorAll("[data-content]")

tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        const target=document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove("qualification_active")
        })
        target.classList.add("qualification_active")
        tab.forEach(tab=>{
            tab.classList.remove("qualification_active")
        })
        tab.classList.add("qualification_active")
    })
})
