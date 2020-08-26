var lista=document.getElementById('lista').innerHTML;
var listaNumeri = [];

for (i=0 ; i<100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
  document.getElementById('lista').innerHTML="<li>FizzBuzz</li>";
} else if (i % 3 == 0) {
  document.getElementById('lista').innerHTML="<li>Fizz</li>";
} else if (i % 5 == 0) {
  document.getElementById('lista').innerHTML="<li>Buzz</li>";
} else {
  document.getElementById('lista').innerHTML="<li>"+i+"</li>";
}
};
