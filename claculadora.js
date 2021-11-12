const mensaje = document.getElementById("mensaje");

function questionQuestion() {
  let operators = [
    " operacion sin definir",
    " Opcion 1 sumar: ",
    " Opcion 2 restar : ",
    " Opcion 3 multiplicar : ",
    " Opcion 4 dividir : ",
  ];
  if (question > 4 || question < 1) alert("opcion no valida");
  if (question > 4 || question < 1) document.write("Intenta Nuevamente!");
  if (question > 4 || question < 1) exit();
  else if (question > 1 || question < 5) alert(operators[question]);
}

let question = prompt(
  "Tipo de operacion que desea realizar 1- sumar 2- restar 3-multiplicar 4-dividir"
);
questionQuestion();

let num1 = parseInt(prompt("Digite un numero"));
let num2 = parseInt(prompt("segundo numero"));

let sum = num1 + num2;
let rest = num1 - num2;
let multi = num1 * num2;
let div = num1 / num2;
let operators = [
  " operacion sin definir",
  " Opcion 1 sumar: ",
  " Opcion 2 restar : ",
  " Opcion 3 multiplicar : ",
  " Opcion 4 dividir : ",
];
let simbols = ["operaciones", " + ", " - ", " x ", " / "];
let operator = operators[question];
let simbol = simbols[question];

function sumar() {
  if (question == 1) return sum;
  else if (question == 2) return rest;
  else if (question == 3) return multi;
  else if (question == 4) return div;
}

document.write(
  operator + num1 + simbol + num2 + " = " + parseFloat(sumar()).toFixed(2)
);
