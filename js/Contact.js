//get <form>: form
var form = document.getElementById('form');

//dynamically display rate text box
//add <input> text
function addRateBox(){
    var haveRateBox = Boolean(document.getElementById("rate"));
    if(!haveRateBox){
        var rateBox = document.createElement('input');
        rateBox.setAttribute("type", "text");
        rateBox.setAttribute("name", "rate");
        rateBox.setAttribute("id", "rate");
        rateBox.setAttribute("placeholder", "Hourly rate");
        var messageBox = document.getElementById('message');
        form.insertBefore(rateBox , messageBox);
        
    }
}
//delete <input> text
function deleteRateBox(){
    var haveRateBox = Boolean(document.getElementById("rate"));
    if(haveRateBox){
        document.getElementById('rate').remove();
    }
}

//if click on the radio, dynamically display rate text box
function dynamicRadio(){
    var Hiring = document.getElementById("purpose3");
    Hiring.onclick = function(){addRateBox()};

    var Question= document.getElementById("purpose1");
    Question.onclick = function(){deleteRateBox()};
    
    var Comment= document.getElementById("purpose2");
    Comment.onclick = function(){deleteRateBox()};
}

//input validation
//validate <input> text
function validateText(id, pattern){
    var text = document.getElementById(id);
    var textInput = text.value.trim().toUpperCase();

    if (textInput.length == 0) {  
        alert(`${id} Cannot be empty!`);
        return false;
    }

    if (!pattern.test(textInput)) {
        alert(`${id} Invalid format!`);
        return false;
    }
    return true;
}
//validate <input>: fname
function validateFirstName(){
    var regEx = /[A-Za-z0-9'\.\-\s\,]/;
    return validateText("fname", regEx);
}
//validate <input>: lname
function validateLastName(){
    var regEx = /[A-Za-z0-9'\.\-\s\,]/;
    return validateText("lname", regEx);
}
//validate <input>: email
function validateEmail(){
    var regEx = /\S+@\S+\.\S+/;
    return validateText("email", regEx);
}
//validate <input>: contact_address
function validateAddress(){
    var regEx = /[A-Za-z0-9'\.\-\s\,]/;
    return validateText("contact_address", regEx);
}
//validate <input>: cities
function validateCity(){
    var regEx = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    return validateText("cities", regEx);
}
//validate <input>: postal
function validatePostal(){
    var regEx =
    /^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]$/;
    return validateText("postal", regEx);
}
//validate <input>: message-box
function validateMessage(){
    var regEx = /[A-Za-z0-9'\.\-\s\,]/;
    return validateText("message-box", regEx);
}
//validate <input>: rate
function validateRate(){
    if(Boolean(document.getElementById("rate"))){
        var regEx = /^[0-9]*$/;
    return validateText("rate", regEx);
    }
    return true;
}
//form validation: inclusion of all inputs
function formValidation(){
    return validateFirstName() && validateLastName() 
        && validateEmail() && validateAddress() &&
        validateCity() && validatePostal() && validateRate() &&validateMessage();
}

//running of contact form function
function contactForm(){
    dynamicRadio();
}

//window
window.contactForm();
