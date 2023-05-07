/* Numero de botones con la clase drum, este codigo es lo mismo que el 
numero 7*/

/*Agrego el "Evento escucha" a cada uno, en vez de poner uno por uno, 
con un for y 3 lineas de codigo me ahorro mucho codigo*/

/*la funcion la ocupo por que un Evento Escucha ocupa de una funcion y esta funcion guarda en una variable el texto html que tiene el tag y que haya recivido un "click"*/

/*El if tiene que estar dentro ya quer usa una variable que solo tiene alcance local en la funcion y no funciona por fuera, el if si puede comparar texto solo tiene que ir como un string entre comillas

El ==  vs === en texto, cualquiera de las dos me sirvio solo que prefiero que sea tres para que sea exactamente*/

/*var cola  Estoy declarando una variable
  new se usa para crear objetos que van a ser mandados al construtor, en esta sintaxis seguido de new se pone el nombre del constructor asi:
  
  var bellboy1 = new Bellboy("Timmy", 19, true, ["English", "Spanish"]);

  Pero observa que aqui NO hay constructor,creado por nosostros:
  
  Sin embargo Audio("url") es un constructor predefinido por Javascript

  cola.play   Es la variable con el metodo .play()
*/

var NumberOfDrums = document.querySelectorAll(".drum").length; // Es igual a 7

//Agregar el evento escucha "click a cada uno de los clase drums y la funcion que hara si dan click 

for (var i = 0; i < NumberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", clickLetra);
    }

function clickLetra() {
        var buttonInnerHtml = this.innerHTML; //Sacar la letra que se dio click
        makeSound(buttonInnerHtml); //Llamar a la funcion make sound con el valor de la letra que se dio click
    }
//Agregar el evento de tecla presionada

document.addEventListener("keydown", funcionTecla);

function funcionTecla(evt) {
    var queTecla = evt.key; 
    console.log(queTecla);
    makeSound(queTecla);
    }

// clickLetra y funcionTecla mandan un valor a makeSound(queclickeo) le mandan el valor que tendra que Clickeo

function makeSound(queClickeo) {

    if (queClickeo === "w") {
        var cola = new Audio("sounds/tom-1.mp3");
        cola.play(); 
    } else if (queClickeo === "a") {
        var cola = new Audio("sounds/tom-2.mp3");
        cola.play();
    } else if (queClickeo === "s") {
        var cola = new Audio("sounds/tom-3.mp3");
        cola.play();
    } else if (queClickeo === "d") {
        var cola = new Audio("sounds/tom-4.mp3");
        cola.play();
    } else if (queClickeo === "j") {
        var cola = new Audio("sounds/snare.mp3");
        cola.play();
    } else if (queClickeo === "k") {
        var cola = new Audio("sounds/crash.mp3");
        cola.play();
    } else if (queClickeo === "l") {
        var cola = new Audio("sounds/kick-bass.mp3");
        cola.play();
    }
}
















    // console.log(funcionTecla(teclaInfo));
    // funcionTecla();



    // function resultado(uno){
    //     var uno;
    //     var dos = 3;
    //     var resultado = uno + dos;
    //     return resultado;
    // }
    
    // resultado(1);


//     if (queTecla === "w") {
//     var cola = new Audio("sounds/tom-1.mp3");
//     cola.play(); 
//     console.log(queTecla);
//     }
//     if (queTecla === "a") {
//     var cola = new Audio("sounds/tom-2.mp3");
//     cola.play(); 
//     console.log(queTecla);

//     }
//     if (queTecla === "s") {
//     var cola = new Audio("sounds/tom-3.mp3");
//     cola.play();
//     console.log(queTecla);
 
//     }
//     if (queTecla === "d") {
//     var cola = new Audio("sounds/tom-4.mp3");
//     cola.play(); 
//     console.log(queTecla);

//     }
//     if (queTecla === "j") {
//     var cola = new Audio("sounds/snare.mp3");
//     cola.play(); 
//     console.log(queTecla);

//     }
//     if (queTecla === "k") {
//     var cola = new Audio("sounds/crash.mp3");
//     cola.play(); 
//     console.log(queTecla);

//     }
//     if (queTecla === "l") {
//     var cola = new Audio("sounds/kick-bass.mp3");
//     cola.play();
//     console.log(queTecla);
 
//     }
// }
// );

//Activar con click pero en Switch

// var NumberOfDrums = document.querySelectorAll(".drum").length; 

// for (var i = 0; i < NumberOfDrums; i++) {
// document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
// }

// function handleclick() {
//     var queClickeo = this.innerHTML;
    
// switch (queClickeo) {
//     case "w":
//         var hola = new Audio("sounds/tom-1.mp3");
//         hola.play(); 
//         break;

//     case "a":
//         var cola = new Audio("sounds/tom-2.mp3");
//         cola.play(); 
//         break;

//     case "s":
//         var cola = new Audio("sounds/tom-3.mp3");
//         cola.play(); 
//         break;

//     case "d":
//         var cola = new Audio("sounds/tom-4.mp3");
//         cola.play(); 
//         break;

//     case "j":
//         var cola = new Audio("sounds/snare.mp3");
//         cola.play(); 
//         break;

//     case "k":
//         var cola = new Audio("sounds/crash.mp3");
//         cola.play(); 
//         break;

//     case "l":
//         var cola = new Audio("sounds/kick-bass.mp3");
//         cola.play(); 
//         break;

//     default:
//         console.log(queClickeo);
//         break;
// }

// }






 

