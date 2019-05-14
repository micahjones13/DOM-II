// Your code goes here

//varaible declarations
const logoHead = document.querySelector('.logo-heading');
const topImage = document.querySelector('.intro img');

//event for mouseover of logoHead
logoHead.addEventListener('mouseover', (event) => {
    logoHead.style.color = 'purple';

    setTimeout(function(){
        event.target.style.color = "";
    }, 500);

})
//event for resizing of topImage on double click
topImage.addEventListener('dblclick', (event) => {
    topImage.style.border = '2px solid blue';

    setTimeout( function(){
        event.target.style.border = "";
    }, 1000)
} )