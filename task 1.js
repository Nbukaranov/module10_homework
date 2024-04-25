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