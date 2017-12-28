// scripts.js
window.onerror = function () {
    alert('Pojawił się błąd. Zajrzyj do logów!');
};


var url = 'https://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});

var paragraph = document.getElementById('joke');

function getJoke() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);  //czemu tutaj zadziałało dopiero po wpisaniu false i dodaniu https do adresu???

/* ale kod do końca nie działa - status zmienia się i nie odpowiada końcowemu
  console.log(xhr.status);
  if(xhr.status == 200 && xhr.status < 300) {
    console.log("ok");
  } else {
    console.log("Błąd podczas ładowania strony\n");
  }
*/
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);

    console.log(xhr.response);
    console.log(xhr.status);

    paragraph.innerHTML = response.value.joke;

/* pytanie dlaczego nie mogę oprzeć się na responsie? czy po zmianie adresu w ogóle tutaj js nie dochodzi?

    if(xhr.response == null) {
      console.log("BŁAD");
    } else {
      console.log("SUKCES");
    }

*/
  });

  xhr.send();

  console.log(xhr.status);

}

getJoke();
