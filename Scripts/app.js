/**
 * FileName: app.js
 * 
 * @author Tom Tsiliopoulos
 * @date June 6, 2016
 * 
 * StudentID: 300818557
 * website: comp125-s2016-lesson5.azurewebsites.net
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";


/*

//reference to HTMLElements
var rollBtn=document.getElementById("rollBtn");
var diceResult=document.getElementById("result1");
var dateResult=document.getElementById("result2");


function init(){

    console.log("mamun");


}

function getCurrentTime(){
var today = new Date();
    var hours = (today.getHours()<10) ? "0" + today.getHours() : "" + today.getHours();
    var minute =(today.getMinutes()<10) ? "0" + today.getMinutes() : "" + today.getMinutes();
    var second  = (today.getSeconds()<10) ? "0" + today.getSeconds() : "" + today.getSeconds();

    var currentTime = "" + hours+":"+minute+":"+second+"";

    return currentTime;
}


function diceRoll(){
    
var die1 = Math.floor((Math.random()*6)+1);
var die2 = Math.floor((Math.random()*6)+1);

var total = die1+die2;
console.log("Dies Result: " + total)

diceResult.innerHTML="<h2>" + total + "</h2><br>";


dateResult.innerHTML="<h1>" + getCurrentTime() + "</h1>";

} 

rollBtn.addEventListener("click",diceRoll);
var myVar = setInterval(diceRoll, 1000);


  //  window.addEventListener("load", init);
  */
var name = "mamun";

    var User = {
        ID: "1",
        Name: "admin",
        Email: "admin@example.com",
        Password: "123456",
        Course: [
            {

            ID: "1",
            Name: "COMP123",
            Description: "Programming1"
        }, {

                ID: "2",
                Name: "COMP125",
                Description: "Web Development"
            }, {

                ID: "3",
                Name: "COMP122",
                Description: "Database"
            }, {

                ID: "4",
                Name: "COMP225",
                Description: "Programming Methodology"
            }],

            DropCourse: function (CourseIndex) {
                
                this.Course.splice(CourseIndex,1);
            }
    };





var NewUser = new Object();
NewUser.ID="1";
NewUser.Name = "Marry";
NewUser.Email="mary@example.com";
NewUser.Password="231231123";




/*var Person = {

    Name: "Tom",
    Age: 47,

    saysHello: function () {
        
        console.log(this.Name + "sys hello");
    }
}*/

var Person = function (name,age) {
        
        this.Name = name;
        this.Age=age;
    
}

Person.prototype.SaysHello= function () {
 console.log(this.Name + " says hello!");   
}


  function init() {
      console.log("application started");

      console.log(User);

      console.log(User.Name);


//var myUser = new User();

//myUser.Name="Marry";
//console.log(myUser.Name);
NewUser.Roll="Mmmmm";
console.log(NewUser);

console.log(User.Course[1]);

//Person.saysHello();

console.log(name + "says hello");



for (var course1 in User.Course)
{
    console.log("Courses " + course1 + ": " +User.Course[course1].Name);
}


User.Course.forEach(function (course1) {
console.log("Course :" + course1.Name);


    
},this);





var person = new Person("Mamun",12);
person.SaysHello();


  }

  window.addEventListener("load", init);

})();