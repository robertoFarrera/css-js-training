'use strict'

document.onreadystatechange = function () {
  if (document.readyState == "complete") {

    var path = window.location.pathname;
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    console.log(id);

    const menu_button = document.getElementById('menu-button');
    const dropdown_buttons = document.querySelectorAll('.dropdown a');
    const overlay = document.querySelector('.overlay');


    function dropdownToggle(element) {
      var t = element.dataset.dropdown;
      var dropdown = document.getElementById(t);
      dropdown.classList.toggle('show');
      overlay.classList.toggle('show');
    }

    for (var i = 0; i < dropdown_buttons.length; i++) {
      dropdown_buttons[i].addEventListener('click', () => {
        dropdownToggle(this.activeElement)
      });
    }

    overlay.addEventListener('click', () => {
      overlay.classList.remove('show');
      var dropdown = document.querySelector('.dropdown-container.show');
      dropdown.classList.remove('show');
    })

    // Ejemplo de Promesas
    /*
    let miPrimeraPromise = new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve("¡Éxito!"); // ¡Todo salió bien!
      }, 3000);
    });

    document.querySelector('#btn-products').addEventListener('click', async () => {
      
      console.log('Antes');

      // Promise
      var loading = document.querySelector('#loading');
      loading.classList.add('show');
      await miPrimeraPromise.then((succesMessage) => {
        console.log('Promesa: ' + succesMessage);
      }).finally(() => {
        loading.classList.remove('show');
      });
      
      console.log('Después');

    });
    */

    if (path == '/index.html') {
      var loading = document.querySelector('#loading');
      loading.classList.add('show');
      var container = document.querySelector('#result');
      var element;
      fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
        .then(json => {
          json.map((post) => {
            element = document.createElement('div', { class: 'card' });
            element.innerHTML = (`
              <!-- Post -->
              <div class="card">
                <h2 class="title"><a href="/post-details.html?id=${post.id}">${post.title}</a></h2>
                <p>${post.body}</p>
                <div class="usuario">
                  <a href="/user.html?id=${post.userId}">Ver usuario</a>
                </div>
              </div>
            `);
            container.appendChild(element);

          })
        })
        .finally(() => {
          loading.classList.remove('show');
        })
    }

    if (id && path == '/post-details.html') {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json())
        .then(json => { console.log(json) });
    }

    if (id && path == '/user.html') {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json())
        .then(json => { console.log(json) });
    }

  }
}