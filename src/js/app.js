const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    //Toggle Nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
    //Animate link
    navLinks.forEach((link,index)=>{
        link.style.animiation=`navLinkFade 0.5s ease forwards ${index/7+0.3}s`;
        console.log(index/7)
    });
}
navSlide();