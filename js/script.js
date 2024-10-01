// console.log("I am linked");

// TOGGLE MENU
const toggleMenu = document.querySelector('.toggle-menu');
const toggleMenuButton = document.querySelector('.site-meny-button');

toggleMenuButton.onclick = function() {
  
  if (theMenu.getAttribute('data-menustate') === 'closed') {
    
    // if closesd, open
    theMenu.setAttribute('data-menustate','open');
  
  } else {
    
    // else, close it
    theMenu.setAttribute('data-menustate','closed');
    
  } 
  
};
