//get div: image
const personalSection = document.getElementById("personal");
var imageSection = document.createElement("div");
personalSection.appendChild(imageSection);
imageSection.id = "image";

//add personal image
function addImage(){
    //create container
    var imgContainer = document.createElement('div');
    imageSection.appendChild(imgContainer);
    //create element: img
    var img = document.createElement("img");
    imgContainer.appendChild(img);
    //add source to img
    img.src= "./img/fish.jpg";
}

//add my name
function addName(){
    //create container
    var nameContainer = document.createElement('div');
    imageSection.appendChild(nameContainer);
    //create element: h1 for diplay name
    var myName = document.createElement('h1');
    nameContainer.appendChild(myName);
    myName.innerHTML = "Cheuk Lung Li";
    //create element: p for diplay title
    var myTitle = document.createElement('p');
    nameContainer.appendChild(myTitle);
    myTitle.innerHTML = "Computer Programming Student";
}

//add resume button
function addResume(){
    //create container
    var resumeContainer = document.createElement('div');
    resumeContainer.id = "resume";
    imageSection.appendChild(resumeContainer);
    //create ancher
    var a = document.createElement('a');
    resumeContainer.appendChild(a);
    a.download = "resume.pdf";
    a.href = "./file/resume.pdf";
    //create button
    var button = document.createElement("button");
    a.appendChild(button);
    var buttonName = document.createTextNode("Download Resume");
    button.appendChild(buttonName);
}
//add contact me button
function addContactMe(){
    //create container
    var contactContainer = document.createElement('div');
    imageSection.appendChild(contactContainer);
    contactContainer.id = "contactform";
    //create button
    var button = document.createElement("button");
    contactContainer.appendChild(button);
    var buttonName = document.createTextNode("Contact Me");
    button.appendChild(buttonName);
    button.setAttribute("onclick", "window.location.href='./contact.html'");
}

//display image, name and buttons in image session
function displayMe(){
    addImage();
    addName();
    addResume();
    addContactMe();
}

//window
window.displayMe();