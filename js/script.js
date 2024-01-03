//get references to the toogle button and the menu
const toggleButton = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-collapse');

//Add an event listner to the toggle button
/*toggleButton.addEventListener('click', () => {
    //Toggle show class on the menu, which controls its visibility
    menu.classList.toggle('show');
    menu.style.right = menu.style.right === "-300px" ? "0" : "-300px";
}) */

//easy scrolling


//code to show fewer testmonials on mobile screens
$(document).ready(function() {
    $('.testimonial .row').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 740,
            settings: {
                slidesToShow: 2,
            }
        }]
    })
})

//Optional, media query
window.addEventListener('resize', () => {
    if(window.innerWidth < 741){
        menu.classList.add('show');
    }else{
        menu.classList.remove('show');
    }
})



//adding fine animation to values
/*import gsap from 'gsap';

gsap.from('.value-icon', {duration: 1.5, y: 50, opacity: 0, stagger: 0.2});
gsap.from('.value-title', {duration: 1, opacity: 0, stagger: 0.3});
gsap.from('.value-description', {duration: 1, opacity: 0, stagger: 0.4});*/

//hover effect to adapt with mobile touch screens
const panels = document.querySelectorAll('.value-panel');
panels.forEach(panel => {
    panel.addEventListener('touchstart', () => {
        panel.classList.add('active');
    });
    panel.addEventListener('touchend', () => {
        panel.classList.remove('active');
    })
})

/*const testimonialCarousal = document.querySelector('.testimonials');
const testimonialItem = document.querySelectorAll('.testimonial-item');
let currentIndex = 0;

function showTestimonial(index){
    testimonialItem.forEach((testimonial, i) => {
        testimonial.style.transform = 'translateX(-${index * 100}%)';
        testimonial.classList.remove('active');
        if(i == index){
            testimonial.classList.add('active')
        }
    })
}

function nextTestimonial(){
    currentIndex = (currentIndex + 1) % testimonialItem.length;
    showTestimonial(currentIndex);
}

function prevTestimonial(){
    currentIndex = (currentIndex - 1 + testimonialItem.length) % testimonialItem.length;
    showTestimonial(currentIndex);
}


showTestimonial(currentIndex);*/

