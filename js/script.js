$(document).ready(function(){

    $("#passwordTest").submit(function(e){
        e.preventDefault();
        var value = $("#password").val();
        var checkUppercase =  RegExp("(?=.*[A-Z])\\\w+","g");
        $(".message").remove();
        if(checkUppercase.test(value) === true){
            $("#passwordTest").append('<p class="message">Form has been submitted</p>');
        } else {
            $("#passwordTest").append('<p class="message">Error, there must be 1 Uppercase character</p>');
        }
    })


    var password = 'Testing123'

    console.log(/(?=.*[A-Z])\w+/g.test(password));

    // In JS the backslash \ character has a special meaning
    // If you want to use it, then you have to include wrap a \ before and after the one you want to see

    var regularExpression = RegExp("(?=.*[A-Z])\\\w+", 'g');

    console.log(regularExpression.test(password));




})
