//Задача 6

let newArr = [2, "2", 2];

function foo(newArr) {
for (let i = 0; i < newArr.length; i++) 

    if (newArr[i] !== newArr[0]) 
    return !1;
    return !0

};
 console.log(foo(newArr));