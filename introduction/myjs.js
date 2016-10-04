 "use strict";
var fname = "Kirill";
var lname = "Stepin";
var age = "25";
alert(fname);
alert(lname);
alert(age);
function myFunction() {
//получаем идентификатор элемента
    var a = document.getElementById("test");
//вешаем на него событие
    a.onclick = function () {
alert("Зачем нажал А???");
    };
}
window.onload = myFunction;
