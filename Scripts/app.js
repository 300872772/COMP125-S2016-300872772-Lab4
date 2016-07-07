/**
 * FileName: app.js
 * @author: Md Mamunur Rahman
 * website: 
 * @description: This file is the main javascript file for this web site
 */

// IIFE (Immediately Invoked Function Expression)
(function () {
    "use strict";


    var User = function (userName, password) {
        this.UserName = userName;
        this.Password = password;
    }



    /**
     * This function calls all other functions 
     * 
     * @function InitialFunction
     * @returns {void}
     */
    function InitialFunction() {

        LoginFormEventHandling();

    }



    /**
     * This function collect data from element of form in login page
     * 
     * @function getFormData
     * @param {object} event
     * @returns {void}
     */
    function creatObject(event) {
        //prevent form default
        event.preventDefault();

        // create a reference for your form
        var userNameForm = document.getElementById("userName");
        var passwordForm = document.getElementById("password");

        //creat Object

        var user = new User(userNameForm.value, passwordForm.value);

        //call displaFormData
        displaFormData(user.UserName, user.Password);

        loginForm.reset();
    }

    /**
 * This function handles event for login form
 * 
 * @function LoginFormEventHandling
 * @returns {void}
 */
    function LoginFormEventHandling() {

        var loginForm = document.getElementById("loginForm").addEventListener("submit", creatObject);

    }


    /**
     * This function display data in console from element of form in concat page 
     * 
     * @function displaFormData
     * @returns {void}
     */
    function displaFormData(userName, password) {

        console.log("++++++++++++++++++++++++++++++++++++++++++");
        console.log("User Name: " + userName);
        console.log("Password: " + password);

        console.log("++++++++++++++++++++++++++++++++++++++++++");


    }

    //call initial function
    window.addEventListener("load", InitialFunction);
})();

