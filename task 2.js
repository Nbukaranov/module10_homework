//Задача 2 
let x = false;
if (typeof x === "number") {
  console.log("Это число");
} else if (typeof x === "string") {
  console.log("Это строка");
} else if (typeof x === "boolean"){
  console.log("Это логическое значение");
} else {
  console.log("Тип x не определён");
}

//Либо

let x = undefined;

switch (typeof(x)) {
  case "number":
    console.log('x - число');
    break;
  case "string":
    console.log('x - строка');
    break;
  case "boolean":
    console.log('x - логическое значение');
    break;
  default:
    console.log('Тип x не определён');
}