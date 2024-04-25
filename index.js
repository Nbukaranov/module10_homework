//Задача 1

let num = +prompt ('Введите число:');

console.log(typeof num);

if (isNaN(num % 2)){
  console.log("Упс, кажется, вы ошиблись")
} else if (num % 2 === 0) {
  console.log('Четное число')
} else {
  console.log("Нечетное число")
}


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


//Задача 3

let str = "Hello world";

strReverse = str.split("");
strReverse.reverse();
newStr = strReverse.join("");
console.log(newStr);


//Задача 4

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  console.log(getRandomIntInclusive(0, 100));


  //Задача 5

  let newArr = [1, true, 3, 'food'];

newArr.forEach((item) => {
  console.log(item);
})


//Задача 6

let newArr = [2, "2", 2];

function foo(newArr) {
for (let i = 0; i < newArr.length; i++) 

    if (newArr[i] !== newArr[0]) 
    return !1;
    return !0

};
 console.log(foo(newArr));


 // Задача 7

 let newArr = [undefined, 0, 1, 2];

let evenNumb = 0;
let oddNumb = 0;
let notNumb = 0;
let nullNumb = 0;


for (let i = 0; i < newArr.length; i++) { 

    if (newArr[i] % 2 !== 0 && typeof newArr[i] !== "string" && typeof newArr[i] !== "boolean" && typeof newArr[i] !== "undefined") {
        oddNumb += 1;
    } else if (newArr[i] % 2 === 0 && typeof newArr[i] !== "string" && typeof newArr[i] !== "boolean" && newArr[i] !== 0 && typeof newArr[i] !== "object") {
      evenNumb +=1;
    } else if (newArr[i] === 0) {
     nullNumb +=1;
    }else {
      notNumb +=1;
    }
 
};
 
 console.log("Не числа: " + notNumb);
 console.log("Количество чётных: " + evenNumb);
 console.log("Количество нечётных: " + oddNumb);
 console.log("Количество нулевых: " + nullNumb);



 //Задача 8

 let myChar = new Map ();
  
  myChar.set("name" , "Nikita");
  myChar.set("age", 21);
  myChar.set("city", "SPB");


for (let name of myChar) {
  
  console.log(`Ключ- ${name[0]}, Значение- ${name[1]}` );
}
