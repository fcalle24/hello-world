function sayHello() {
alert(“Hello, World!”);
}

function sayHello () {
var p=document.getElementById("hello");
p.innerHTML="Hello, World!"
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
}
 else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello, ' + storedName;
}

  myButton.onclick = function() {
  setUserName();
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
