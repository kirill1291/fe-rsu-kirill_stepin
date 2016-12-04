"use strict"

function Calculator() {
  this.result = 0;
  this.getResult = function(){
    console.log(this.result);};
  this.add = function(a){
    this.result += a;
    return this;};
  this.reset = function(){ 
    this.result = 0;
    return this;
};
  this.subtract = function(b){
    this.result -= b;
    return this;};
    this.divide = function(c){
    this.result /= c;
    return this;};
  this.multiply = function(d){
    this.result *= d;
    return this;};   
  this.getInitialState = function (callback) {
        setTimeout(function () {
            callback();
        }, 500);
    };
};

var calculator = new Calculator();

function setResult(n){
    return this.result = n;
}

calculator.add(4);
calculator.subtract(1);
console.log(calculator.getResult()); // 3

calculator.reset();
console.log(calculator.getResult()); // 0
console.log(calculator.add(4).reset().add(1).getResult()); // 1

calculator.getInitialState(setResult.bind(calculator,5));
