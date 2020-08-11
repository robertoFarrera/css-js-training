'use strict'

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
  
    const menu_button = document.getElementById('menu-button');
    const dropdown_buttons = document.querySelectorAll('.dropdown');
    const overlay = document.querySelector('.overlay');


    function dropdownToggle(e){
      var target = e.target.dataset.target;
      var dropdown = document.getElementById(target);
      dropdown.classList.toggle('show');
      overlay.classList.toggle('show');
    }

    for (var i = 0; i < dropdown_buttons.length; i++) {
      dropdown_buttons[i].addEventListener('click', (e) =>{
        dropdownToggle(e)
      });
    }

    overlay.addEventListener('click', ()=>{
      overlay.classList.remove('show');
      var dropdown = document.querySelector('.dropdown-container.show');
      dropdown.classList.remove('show');
    })

    menu_button.addEventListener('click', function(){
    	  encabezado.append(': Hola era Roberto') ;
    });

  }
}