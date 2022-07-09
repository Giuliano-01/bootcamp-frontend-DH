var age = 18;                           // number 
var name = "Jane";                      // string
var name = {first:"Jane", last:"Doe"};  // objeto literal
var truth = false;                      // booleano
var sheets = ["HTML","CSS","JS"];       // array

var g = /()/;                   // RegEx

var a; typeof a;                        // undefined (sin definir)
var a = null;                           // null (vacio o desconocido)
var a = 'a'*3;                          // NaN (not a number)

var student = {                 // objeto literal
firstName:"Jane",           // list of properties and values (atributos)
lastName:"Doe",
age:18,
height:170,
fullName : function() {     // object function (metodos)
   return this.firstName + " " + this.lastName;
}
}; 
student.age = 19;           // setting value
student[age]++;             // incrementing
name = student.fullName();  // call object function