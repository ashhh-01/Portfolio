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
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)