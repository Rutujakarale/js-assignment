var person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  
  document.write("WELLCOME" + person) ;
}
var person = setInterval(myTimer, 5000);
function myTimer() {
  var d = new Date();
  document.write( d.toLocaleTimeString());
}
function myFunction() {
    var person = document.body;
    person.classList.toggle("dark-mode");
  }