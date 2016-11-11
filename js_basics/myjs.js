"use strict";
// Task 1
// var a= prompt("Введите высоту", "");
// var b= prompt("Введите ширину", "");
// console.log(a, b);

// Task 2
// function triangle(){
// var area=(a*b/2);
// alert("Площадь треугольника ="+area);
// }
// triangle();

// Task 3
// var arr = [5,7,1,3,8,6,2,7,77];
// var arr2=[];
// var arr3=[];
// var arr4=[];
// console.log(arr);
// for (var i = arr.length - 1; i >= 0; i--){
//     arr2.push(arr[i]);
// }
// console.log(arr2);

// var i=arr.length;
// while(i > 0){
//     i--;
//     arr3.push(arr[i]);
// }
// console.log(arr3);

// var i=arr.length-1;
// do {
// arr4.push(arr3[i]);
// i--;
// } while(i >= 0);
// console.log(arr4);

// Task 4
// var i=2;
// var a= ++i;
// alert(a);

// var i=2;
// var c= i++;
// alert(c);

// Task 5
// var g = prompt("ВВедите любое число", "");
// if (g < 0) {
//   alert ("nagative");
// } else if (g > 0){
//   alert ("positive");
// } else {
//   alert ("0");
// }

//Task 6
// var nam = prompt("Введите ваше имя", "");
//   alert("Привет,"+nam+"!");

// Task 7
var n= prompt("Введите любое число", "");
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
 alert( factorial(n) );