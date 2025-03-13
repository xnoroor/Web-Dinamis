//navbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if(window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}


//Burger
const Burger = document.querySelector('#burger');
const navmenu = document.querySelector('#nav-menu');

Burger.addEventListener('click', function(){
    Burger.classList.toggle('burger-Active');
    navmenu.classList.toggle('hidden'); 
});
