// Your code goes here

//varaible declarations
const logoHead = document.querySelector('.logo-heading');
const topImage = document.querySelector('.intro img');
const heightOutput = document.querySelector('#windowHeight');
const widthOutput = document.querySelector('#windowWidth');
const navBar = document.querySelector('.main-navigation');
const body = document.querySelector('body');
const para = document.querySelector('.intro p');
const noContext = document.querySelector('.no-context');
const input = document.querySelector('input[type="text"]');
const navItems = document.querySelectorAll('nav a');
const contentSection = document.querySelector('.content-section');
const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');

//event for mouseover of logoHead
logoHead.addEventListener('mouseover', (event) => {
    logoHead.style.color = 'purple';

    setTimeout(function(){
        event.target.style.color = "";
    }, 500);

})

//event for temp border of topImage on double click
topImage.addEventListener('dblclick', (event) => {
    topImage.style.border = '2px solid blue';

    setTimeout( function(){
        event.target.style.border = "";
    }, 1000)
    topImage.addEventListener('dblclick', (event) => {
        topImage.style.opacity = .5;

        setTimeout( function(){
            event.target.style.opacity = "1";
        }, 1000)
    })
} )

//function for resizing window and telling the metrics 
const windowSize = () =>{
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth
}
window.onresize = windowSize;
window.addEventListener('resize', windowSize);

//event for nav on scroll
body.addEventListener('wheel', (event) => {
    //change the opacity for a limited time
    navBar.style.opacity = '.5';

    //change it back to solid after a short time
    setTimeout( function () {
       navBar.style.opacity = '1';
    }, 1000)
   
})

//scroll
// const changeBackground = (scrollPos) => {

// }
let scrollPos = 0;
let moving = false;
window.addEventListener('scroll', (event) => {
    scrollPos = window.scrollY;
  
    if (!moving){
        body.style.backgroundColor = '#F5F5F5';
        moving = false;
    }
    setTimeout(function(){
        body.style.backgroundColor = 'white';
    }, 1000)

})



//on any key down, content disppears for a bit
body.addEventListener('keydown', (event) => {
    body.style.display = 'none';
    setTimeout(function(){
        body.style.display = '';
    }, 1000)
})

//don't show context for the intor para 
noContext.addEventListener('contextmenu', (event) => {
    event.preventDefault();
})

//notice when they are copying 
body.addEventListener('copy', (event) =>{
    alert('You are copying stuff!');
})
//focus
input.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = 'dodgerblue';
    input.addEventListener('blur', (event) => {
        event.target.style.backgroundColor = '';
        
    })
})

//load 
window.addEventListener('load', (event) =>{
    alert('The site is loaded!');
})

//prevent anchor tags
navBar.addEventListener('click', (event) => {
   navItems.forEach( function (item) {
        event.preventDefault();
   }) 
})

//stopping propagation
//want div2 that is isndie of div1 to do something without triggering a diff event for div 1
div1.addEventListener('click', (event) =>{
    alert('div1!');
    div2.addEventListener('click', (event) =>{
        alert('div2!');
        event.stopPropagation();
    })
})
