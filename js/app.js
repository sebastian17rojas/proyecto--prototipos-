//This function takes two arguments: elem (an HTML element) and className (a text string representing a CSS class).
//If elem already has the class className, it removes it. If it does not, it adds it.
//Then, it returns the modified element.
`
function toggleClass(elem,className){
    if (elem.className.indexOf(className) !== -1){
      elem.className = elem.className.replace(className,'');
    }
    else{
      elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
    }
  
    return elem;
  }


//This function takes an HTML element (elem) as argument.
//It checks the current display style of the element (curDisplayStyle).
//If it is hidden ('none') or has no display style defined, it displays it ('block'). Otherwise, it hides it ('none').
  function toggleDisplay(elem){
    const curDisplayStyle = elem.style.display;			
  
    if (curDisplayStyle === 'none' || curDisplayStyle === ''){
      elem.style.display = 'block';
    }
    else{
      elem.style.display = 'none';
    }
  
  }


//This function is activated when the title of the drop-down menu is clicked.
//It gets the parent element (the menu container) and looks for the corresponding menu and icon.
//Toggles CSS classes to show or hide the menu and rotate the icon.
  function toggleMenuDisplay(e){
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.menu');
    const icon = dropdown.querySelector('.fa-angle-right');
  
    toggleClass(menu,'hide');
    toggleClass(icon,'rotate-90');
  }

//Executed when a menu item is selected.
//Hides the menu.
//Updates the menu title with the text of the selected option and adds the icon.
//Triggers a custom event.
  
  function handleOptionSelected(e){
    toggleClass(e.target.parentNode, 'hide');			
  
    const id = e.target.id;
    const newValue = e.target.textContent + ' ';
    const titleElem = document.querySelector('.dropdown .title');
    const icon = document.querySelector('.dropdown .title .fa');
  
  
    titleElem.textContent = newValue;
    titleElem.appendChild(icon);
  
    //trigger custom event
    document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
      //setTimeout is used so transition is properly shown
    setTimeout(() => toggleClass(icon,'rotate-90',0));
  }


//It is activated when the menu title changes.
//Updates an element with the result (it can be a paragraph or a span) with the content of the title.
  function handleTitleChange(e){
    const result = document.getElementById('result');
  
    result.innerHTML = 'The result is: ' + e.target.textContent;
  }
  


  //get elements
  const dropdownTitle = document.querySelector('.dropdown .title');
  const dropdownOptions = document.querySelectorAll('.dropdown .option');
  


  //bind listeners to these elements
  dropdownTitle.addEventListener('click', toggleMenuDisplay);
  
  dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
  
  document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);
  `

  function boton_login() {
    window.open("../html/login.html");
  }

  function boton_ofertas() {
    window.open("../html/ofertas.html");
  }

  function boton_ofertas() {
    window.open("../html/ofertas.html");
  }


  document.getElementById("nav_bar").innerHTML = `
  <div class="logo">
      <a href="../html/index.html">
      <img src="/IMG/trip-coin azul.png" alt="Logo">
      </a>
  </div>
  <nav id="header_nav">
       <!--<div class='title pointerCursor'>Select an option <i class="fa fa-angle-right"></i></div>
      <div class='menu pointerCursor hide'>-->
          <ul>
              <li><a href="vuelos.html">Vuelos</a></li>
              <li><a href="ofertas.html">Ofertas</a></li>
              <li><a href="reserva-vuelo.html">Reservar vuelos</a></li>
              <li><a href="page.html">Métodos de pago</a></li>
              <li><a href="help.html">Ayuda</a></li>
              <button onclick="boton_login()" id="z">login</button>
          
          </ul>
      </div>
  </nav>
`