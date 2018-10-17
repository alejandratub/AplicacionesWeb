/*
Jesús Horacio Rojas Cortés A01020026
Alejandra Tubilla Castellanos A01022960
*/
window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
  var valueClicked = document.querySelector('ul[id="menu"] li a');
  var menu = document.getElementById('menu');
  valueClicked.setAttribute("id","clicked");
  fetch('/clicked',
  {
    method:'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({value: valueClicked.innerHTML})
  })
  .then(function(response) {
    if(response.ok) {
      console.log('Click was recorded');
      return;
    }
    throw new Error('Request failed.');
  })
  .catch(function(error) {
    console.log(error);
  });
  function hoverFunction(event) {
    event.target.setAttribute("style","color: darkgreen;");
  }

  function mouseOutFunction(event) {
    event.target.removeAttribute("style");
  }

  function clickFunction(event) {
    valueClicked.removeAttribute('id')
    event.target.removeAttribute("class");
    event.target.setAttribute("id","clicked");
    valueClicked = event.target;
    console.log(valueClicked.innerHTML);
    var text = valueClicked.innerHTML;

    fetch('/clicked',
    {
      method:'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({value: text})
    })
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  menu.addEventListener('mouseover',hoverFunction);
  menu.addEventListener('mouseout', mouseOutFunction);
  menu.addEventListener('click',clickFunction)

});
