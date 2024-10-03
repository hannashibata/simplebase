// console.log("I am linked");

// TOGGLE MENU
const toggleMenu = document.querySelector('.toggle-menu');
const toggleMenuButton = document.querySelector('.site-menu-button');

toggleMenuButton.onclick = function() {
  
  if (toggleMenuMenu.getAttribute('data-menustate') === 'closed') {
    
    // if closesd, open
    toggleMenu.setAttribute('data-menustate','open');
  
  } else {
    
    // else, close it
    toggleMenuMenu.setAttribute('data-menustate','closed');
    
  } 
  
};
