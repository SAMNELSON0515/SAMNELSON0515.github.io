/*does it contain 2 interactive js features??*/ /*more events page-- alert : we need more volunteers.*/


const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', showMenu);

function showMenu() {
  navMenu.classList.toggle ("show");
}

  
/*onload* -- more volunteers needed for this event! */
/*window-alert -- im an alert box*/
/* include on-click event--look this up on DOM*/

function myFunction () {
    alert ("I'm an alert box!");
}


  const btn = document.getElementById('seeMoreBtn');
  const grid = document.getElementById('photoGrid');

  btn.addEventListener('click', () => {
    grid.classList.toggle('show');
    btn.textContent = grid.classList.contains('show') ? "See Less" : "See More";
  });


