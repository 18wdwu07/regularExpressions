$(document).ready(function(){
    console.log("Page Loaded");

    var password = 'Testing123'

    console.log(   /(?=.*[A-Z])\w+/g.test(password)      );

    var regularExpression = RegExp('(?=.*[A-Z])\w+', 'g');

    console.log(regularExpression.test(password));


    // Get the value from the password field
    // check to see if value matches regex
    // if true
    //     process form
    // if false
    //     show error




})
