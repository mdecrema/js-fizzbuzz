// Richiamo il tag html per poterlo modificare
var lista=document.getElementById('lista').innerHTML;

// Ciclo for
for (i = 1; i <= 100; i++) {
  // x multipli di 3 e 5 stampo FizzBuzz
  if (i % 3 == 0 && i % 5 == 0) {
    document.getElementById('lista').innerHTML+="<li>FizzBuzz</li>";
  // x multipli di 3 stampo Fizz
  } else if (i % 3 == 0) {
    document.getElementById('lista').innerHTML+="<li>Fizz</li>";
  // x multipli di 5 stampo Buzz
  } else if (i % 5 == 0) {
    document.getElementById('lista').innerHTML+="<li>Buzz</li>";
  // x tutti gli altri numeri stampo il valore numerico
  } else {
    document.getElementById('lista').innerHTML+="<li>"+i+"</li>";
  }
};
