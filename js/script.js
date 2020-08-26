var lista=document.getElementById('lista');
var check= "";
i = 0;

do {
  check +="<li>"+i+"</li>";
  i++;
} while (i<=100);
  if (i % 3 == 0) {
    lista.innerHTML="<li>Fizz</li>";
  } else if (i % 5 == 0) {
    lista.innerHTML="<li>Buzz</li>";
  } else if (i % 3 == 0 && i % 5 == 0) {
    lista.innerHTML="<li>FizzBuzz</li>";
  } else {
    lista.innerHTML="<li>"+i+"</li>";
  }
};
