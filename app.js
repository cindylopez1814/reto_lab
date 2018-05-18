var name = prompt("Para iniciar indicanos tu nombre");
name = name.toUpperCase();
document.write("Bienvenida <br/>" + "<strong>" + name + " </strong> <hr/>" );

// Declarar preguntas en array
var preguntas = ["¿En cuántos paises se encuentra Laboratoria?", "¿Quién es nuestra CEO?","¿Cuánto dura el BootCamp?"];

// Declarar respuestas array
var respuestas = ["4", "mariana costa", "6 meses"];

// Realizar las preguntas y guardar sus respuetas 
function p1(){
  var buenas = document.getElementById("bien");
  var malas = document.getElementById("mal");

   var question1 = prompt("1-" + preguntas [0]);
   question1 = question1.toLowerCase();
   if (question1 == respuestas[0]){ 
    alert( "respuesta correcta");
    buenas.innerHTML += ("</br>" + preguntas [0] + "</br>" + respuestas [0]);
   } else {
    alert(" respuesta incorrecta");
    malas.innerHTML += "</br> " + preguntas[0] + "</br>" + question1 + " (" + respuestas[0] + ")";
   }
   var question2 = prompt("2-" + preguntas [1]);
   question2 = question2.toLowerCase();
   if ( question2 == respuestas[1]) {
    alert("respuesta correcta");
    buenas.innerHTML +=("</br> " + preguntas [1] + "</br>" + respuestas [1]);
   } else {
   alert("respuesta incorrecta");
   malas.innerHTML += "</br> " + preguntas[1] + "</br>" + question2 +  " (" + respuestas[1]+ ")";
   }

   var question3 = prompt("3-" + preguntas [2]);
   question3 = question3.toLowerCase();
   if ( question3 == respuestas[2] ) {
    alert(" respuesta correcta");
    buenas.innerHTML +=("</br> " + preguntas [2] + "</br>" + respuestas [2]);
   } else {
    alert ("respuesta incorrecta");
    malas.innerHTML += "</br> " + preguntas[2] + "</br>" + question3 + " (" + respuestas[2] + ")";
  }
}
  
// Boton de Negacion
function p2(){
  alert("Espararemos hasta que estes lista");
}

