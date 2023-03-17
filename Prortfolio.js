
var body = document.querySelector(".main")
var nav = document.querySelector(".header-nav")
var about = document.querySelector(".body-about")
var skill = document.querySelector(".body-skill")
var portfolio = document.querySelector(".body-portfolio")
var Contact = document.querySelector(".body-Contact")

window.onscroll = function() {
    
    if(document.documentElement.scrollTop>100){
       
        nav.classList.add("header-nav-scroll")
    }
    else{
        nav.classList.remove("header-nav-scroll")
    }
    if(document.documentElement.scrollTop>380 && document.documentElement.scrollTop<750){
        about.classList.add("animation")
    }
    else{
        about.classList.remove("animation")
    }
    if(document.documentElement.scrollTop>700 && document.documentElement.scrollTop<1100){
        skill.classList.add("animation")
    }
    else{
        skill.classList.remove("animation")
    }
    if(document.documentElement.scrollTop>1100 && document.documentElement.scrollTop<1900){
        portfolio.classList.add("animation")
    }
    else{
        portfolio.classList.remove("animation")
    }
    if(document.documentElement.scrollTop>1900 && document.documentElement.scrollTop<2700){
        Contact.classList.add("animation")
    }
    else{
        Contact.classList.remove("animation")
    }

};
window.onchange = function(){

    if(window.screen.width < 600){
        nav.classList.remove("header-nav-scroll")
        nav.classList.add("header-nav-scroll")
    }
    else{
        nav.classList.add("header-nav-scroll")
        nav.classList.remove("header-nav-scroll")
    }
}


