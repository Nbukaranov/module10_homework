 //Задача 8

 let myChar = new Map ();
  
  myChar.set("name" , "Nikita");
  myChar.set("age", 21);
  myChar.set("city", "SPB");


for (let name of myChar) {
  
  console.log(`Ключ- ${name[0]}, Значение- ${name[1]}` );
}
