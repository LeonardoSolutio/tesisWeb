/* Locate DOM elements */
let menuRight = document.querySelector('.nav-s2'),
    showRight = document.querySelector('.nav-trigger'),
    main = document.querySelector('.main'),
    navContainer = document.querySelectorAll('.link'),
    activeLink = 0,
    body = document.body,
    linkCliked = document.querySelectorAll('.link');

    /**/

/* Show menu */
showRight.onclick = function () {
    classie.toggle(this, 'active');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    disableOther('showRight');
    //activeMenu();

    

};

/* Hide menu when a link was clicked */ 
for (let i = 0; i < linkCliked.length; i++) {

    linkCliked[i].addEventListener('click', () => {
        classie.toggle(showRight, 'active');
        classie.remove(menuRight, 'cbp-spmenu-open');
        classie.toggle(showRight, 'disabled');
    }); 
    
}



/* Hide menu */
let disableOther = (button) => {
    if (button !== 'showRight') {
        classie.toggle(showRight, 'disabled');
    } 
}








/* Active menu link 
let activeMenu = () => {
    navContainer[activeLink].classList.toggle('active');

    for (let i = 0; i < navContainer.length; i++) {
        
        navContainer[i].onclick = function () {
            classie.toggle(this, 'active');
            activeLink= i;
        }
    }
}
*/


