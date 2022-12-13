// when we click on the burger, we want the nav_links to get the class of nav_active 
var nav_slide = () => {
    const burger =  document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const nav_links = document.querySelectorAll(".nav_links li");


    burger.addEventListener('click',()=> {
        // Toggles the nav-nar when burger is clicked
        nav.classList.toggle('nav_active');

        // animate nav-bar contents
        nav_links.forEach((link, index) =>{
            // checks if the link already has animation in it
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 +1}s`;
            }

        });

        // animation for burger
        burger.classList.toggle('changeshape');
    });
};

nav_slide();
//nav bar logic ends