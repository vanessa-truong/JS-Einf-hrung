//Einzeiliger Kommentar


/* Mehrzeiliger Kommentar */



// JS Output
console.log("Hallo ihr Lieben<3")

//Datatypes
//Primitive Datatypes (string, number, boolean)
//string = text
//number = zahlen
//boolean = wahrheits/zustandswerte

//Strings
console.log("string is text");
console.log('it works');
console.log(`auch ein string`);


//Numbers
console.log(20);
console.log(3 + 5);
console.log(4 * 4);
console.log(100 / 10);
console.log(4.23489);


//Boolean
console.log(true);
console.log(false);


//Was passiert wenn man einen string und eine number gleichzeitig ausgeben möchte?


//string + number = string
//number + string = string
console.log("Ich bin" + 31);


// Variablen
// var  / let / const
//declaration / assignemt 



//let = Variable, Wert kann sich verändern
let num1 = 150;
console.log(num1)


//const = Konstante, Wert ist immer gleich
const pi = 3.14;
console.log(pi);

//reassigment
num1 = 100;
console.log(num1)


//JS Conventions

// camelCase
let meinHausIstBunt = "red"; // most used

// PascalCase
let MeinHausIstBunt = "blue"

//underscore
let _meinHausIstBunt = "green" // diese bitte nicht nutzen"

//$
let $meinHausIstBunt = "gelb"  // dieses bitte nicht nutzen

// NoGo-Zone
//===========================
// let 1meinHausIstBunt = "pink";
// let meinhausistbunt = "yellow"
// ===========================
// NOGo Zone


// JS ist Case Sensitive 

let ABC;
let aBc;
let AbC;
let abC;

// Das sind alles verschiedene Variablen!

// Arithmetik Operatoren 
// + - * /   -  % ++ --

let numberOne = 5;
let numberTwo = 3;
let numberThree = 10;


// Modulo %
// Computer schaut jetzt wie oft die 3 in die 10 passt = 3 6 9. Und jetzt den Rest von 9 bis 10 = 1 
console.log(numberThree % numberTwo); // 10 % 3 = 1
console.log(120 % 7) // 1
console.log(7 % 4) //3

// decrement --
console.log(numerOne);
numberOne--; //-- zieht immer einen ab
console.log(numberOne);

// increment ++ , zählt immer einen drauf
console.log(numberOne); //4
numberOne++;
console.log(numerOne); //5





// JS Output 2
window.alert("Hallo Du Schnuckelchen");

// JS Input
window.prompt("Bitte gib dein Alter ein:");

//das könnte ich jetzt das prompt in eine Variable packen und es gibt zurück entweder 0 oder Wert
let askAge = window.prompt("Bitte gib dein Alter ein:");
console.log(askAge);
let confirm = window.confirm("Stimmen soe den Cookies zu?");
console.log(confirm);

