"use strict"
//Task 1
// var now = new Date();
// switch(now.getDay()) {
//   case 0:alert( 'Сегодня воскресенье' );break;
//   case 1:alert( 'Сегодня понедельник' );break;
//   case 2:alert( 'Сегодня вторник' );break;
//   case 3:alert( 'Сегодня среда' );break;
//   case 4:alert( 'Сегодня четверг' );break;
//   case 5:alert( 'Сегодня пятница' );break;
//   case 6:alert( 'Сегодня суббота' );
// }
// console.log(now.getDay());

//Task 2
// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1;
// var yyyy = today.getFullYear();

// if(dd<10) {
//     dd='0'+dd
// } 
// if(mm<10) {
//     mm='0'+mm
// } 
// today = dd+'/'+mm+'/'+yyyy;
// document.write(today);

//Task 3
// var t= new Date();
// t.setFullYear(2014);
// t.setMonth(0);
// t.setDate(1);
// console.log(t);
// while( t.getFullYear() < 2050){
//     t.setFullYear(t.getFullYear()+1);
//     if (t.getDay()==6){
//     	console.log(t.getFullYear());
//     }
// }

//Task 4
// var t= new Date();
// var q= new Date();
// t.setMonth(11);
// t.setDate(31);
// var days = (t.getTime()- q.getTime())/86400000;
// console.log("Until next New Year left " +days+ " days!");

//Task 5
// function is_array(input){
// 	if (toString.call(input) == "[object Array]"){
// 		return("true");
// 	} else{
// 		return("false");
// 	}
// }
// console.log(is_array("qwe")); 
// console.log(is_array([1, 2, 4, 0]));

// Tast 6
// var arr=[5, 6, 8, 252, 64, 524, 0, 77, 1];
// function cloneArr(arr){
// 	var arr2=arr.slice(0);
// 	return arr2;
// }
// console.log(arr);
// console.log(cloneArr(arr));

// Task 7
// var arr=[5, 6, 8, 5, 64, 524, 0, 77, 1, 8, 1, 5, 5, 5, "f","C" ,"c", "c", "c"];
// console.log(arr);
// function mostFreq(arr){
// var arr2=[];
// for (var i = 0; i < arr.length; i++){
//  	var k=arr[i];
//  	var count =0;
//  		for (var j = i; j < arr.length; j++){
//  			if (k==arr[j]){
//     		count +=1; 
//     	}
//     }arr2.push(count);
// }
//     var arrLen = arr2.length,
//         maxEl = 0;
//     for (var i = 0; i < arrLen; i++) {
//       if (maxEl < arr2[i]) {
//         maxEl = i;
//       }
//     }
//     return "The most frequent item of an array is: " + arr[maxEl];
// }
// console.log(mostFreq(arr));

//Task 8
// var str= prompt("Введите слово или набор символов", "");
// function chCase(str){
// var str2="";
// for ( i=0; i<str.length; i++){
// 	if (str.charAt(i).toUpperCase() == str.charAt(i)){
// 		str2=str2+str.charAt(i).toLowerCase();
// 	}
// 		else{
// 			str2=str2+str.charAt(i).toUpperCase();
// 		}
// 	}
// console.log(str);
// console.log(str2);
// }
// chCase(str);

//Task 9
// var arr = ["1","1","1","1","1","2","2","2","2","2","2","Cat","cat","Cat","Cat","Cat", ];
// function removeDuble(arr1){
// 	var arrLC=[];
// 	var result = [];
// 	for (var s = 0; s < arr1.length; s++){
// 	arrLC.push(arr1[s].toLowerCase());}
// 	nextInput:
// 	for (var i = 0; i < arrLC.length; i++) {
// 	var str = arrLC[i];
// 		for (var j = 0; j < result.length; j++) {
// 		    if (result[j] == str) continue nextInput;
// 		    }
// 		result.push(str);
//     } console.log(result);
//  return result;
// }
// removeDuble(arr);

//Task 10
// var a=[1,2,3,4,5,];
// function compareRandom(a, b) {
//   return Math.random() - 0.5;
// }
// a.sort(compareRandom);
// console.log(a);

// Task 11
// var arr=["46","null","0","","false", "undefined", "NaN", 44, "some text", "NaN"];
// function removeNUF(arr){
// 	var result=[];
// 		for (var i = 0; i < arr.length; i++) {
// 			    if (arr[i] !== "null" && arr[i] !=="0" && arr[i] 
// 			    	!=="" && arr[i] !=="false" && arr[i] !=="undefined" && arr[i] !=="NaN"){
// 			    	result.push(arr[i]);
// 			    } 
// 			}
// 		console.log(result);
// 		return result;
// 	 } 
// removeNUF(arr);

// Task 12
// var library = [ 
// { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
// { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
// { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
// ];
// library.sort(function (a, b) {
//   if (a.title > b.title) {
//     return 1;
//   }
//   if (a.title < b.title) {
//     return -1;
//   }
//   return 0;
// });
// for (var i=0; i<library.length; i++){
// console.log(library[i].author," - ", library[i].title);
// }

// Task 13
// var arr1=[1,2,"qq","i8", 44, 55, 44];
// var arr2=[3,4,"qq","i8"];
// function mergeArr(arrA, arrB){
// 	var result=[];
// 	for (var i=0; i<arrB.length; i++){
// 		arrA.push(arrB[i]);
// 	}
// 	nextInput:
// 	for (var i = 0; i < arrA.length; i++) {
// 	var str = arrA[i];
// 		for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
// 		    if (result[j] == str) continue nextInput; // если да, то следующий
// 		    }
// 		result.push(str);
//     } console.log(result);
//  return result;
// }
// mergeArr(arr1, arr2);

// Task 14
// var arr=["1","2","3","4","5","6",];
// function removeSpec(arr, n){
// 	var result=[];
// 		for (var i=0; i<arr.length; i++){
// 			if (i !== n ){
// 				result.push(arr[i]);
// 			}
// 		}console.log(result);
// 	 } 
// removeSpec(arr, 2);

// Task 15
// var arr=["black", "cat", "dog", "man", "clock", "date", "New year", "processor", "winter" ];
// function randomItem(arr){
// 	var randomNumber = Math.floor(Math.random() * (0 - arr.length + 1)) + arr.length;
// 	console.log(arr[randomNumber]);
// }
// randomItem(arr);

//Task 16
// var arr=["1","2","3","4","5","6",];
// function moveEl(arr, e, n){
// 	var result=[];
// 	var k, b;
// 	k = arr[n];
// 	b = arr[e];
// 	arr[e]=k;
// 	arr[n]=b;
// 	console.log(arr);
// }
// moveEl(arr, 0, 4);

// Task 17
// function  inDays(a, b){
// 	var a, b,c;
// 	c=(Date.parse(a)-Date.parse(b))/86400000;
// 	alert(Math.abs(c));
// }
// inDays("2015/01/01", "2015/12/31");

//Task 18
// var date = ['2015/02/01', '2015/02/02', '2015/01/03'];
// function maxDate(arr){
// 	var arrLen = arr.length,
//         maxEl = 0;
//     for (var i = 0; i < arrLen; i++) {
//       if (maxEl < (Date.parse(arr[i]))) {
//         maxEl = (Date.parse(date[i]));
//       }
// 	}
// 	var day = new Date(maxEl);
// 	var dd = day.getDate();
// 	var mm = day.getMonth()+1;
// 	var yyyy = day.getFullYear()
// 	if(dd<10) {
//     dd='0'+dd
// 	} 
// 	if(mm<10) {
// 	    mm='0'+mm
// 	} 
// 		return yyyy+"/"+mm+"/"+dd;
// }
// console.log(maxDate(date));

//Task 19
// var string = prompt("Введите имена (через запятую)", "");
// var arr = string.split(', ');
// console.log(arr);

//Task 20
// var str= prompt("Введите слово или набор символов", "");
// function capitalize(str){
// var str2="";
// str2 += str.charAt(0).toUpperCase();
// for (var i=1; i<str.length; i++){
// 	str2=str2+str.charAt(i)
// 	}
// 	console.log(str2);
// }
// capitalize(str);

//Task 21
// function camelize(str) {
//   var arr = str.split(/[- ]/);
//   for (var i = 1; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }
//   return arr.join('');
// }
// console.log( camelize("Java Script") );
// console.log( camelize("java-script") );
// console.log( camelize("Java Script Exercises") );

//Task 22
// var arr=[1, 2, 3, 4, 5, 6, 256];
// function findHigh(arr){
//     var arrLen = arr.length,
//         maxEl = 0;
//     for (var i = 0; i < arrLen; i++) {
//       if (maxEl < arr[i]) {
//         maxEl = arr[i];
//       }
//     }console.log(maxEl);
// }
//  findHigh(arr);

//Task 23
// var arr=[2, 1, 3, 4, 5, 6, 256, 0.5];
// function findLow(arr){
//     var arrLen = arr.length,
//         minEl = arr[0];
//     for (var i = 0; i < arrLen; i++) {
//       if (minEl > arr[i]) {
//         minEl = arr[i];
//       }
//     }console.log(minEl);
// }
// findLow(arr);

//Task 24
// function isNumber(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }
// console.log(isNumber("456456"));

//Task 25
// var arr=[2, 1, 3, 4, 5, 6, 256, 0.5];
// function summArr(arr){
// 	var i, sum=0;
// 	for (i=0; i<arr.length; i++){
// 		sum+=arr[i];
// 	}
// 	console.log(sum);
// }
// summArr(arr);

//Task 26
var menuSetup = {
  width: 300,
  height: 200,
  text: 454,
  color:444,
  background:444,
};
function objectLength(obj) {
var size = 0, key;
for (key in obj) {
	if (obj.hasOwnProperty(key)) size++;
	}
return size; 
};
console.log(objectLength(menuSetup));

//Task 27
console.log(Object.keys(menuSetup));



