//infographic object:
const Infographic = {
    about_me: "Hi! You can call me Jenson or Cheuk Lung(卓龍). I'm now studying computer programming in Seneca college. Years before, I also graduated with Economics degree in Hong Kong.\
    My favourite sport is basketball. I'm a die-hard fan of Dallas Mavericks.\
    Moverover, I love listening to Rock music. And I can play a bit of guitar, bass guitar and drum.\
    My motto is \"The future as much as I do. Do the work, own my failures and I will own my success. (from Mark Minervini)\"\
    Thank You for browsing this personal page! If you're interested in anything about me, don't hesitate to click the \"contact me\" button above.",

    info:{
        Sex: "Male",
        Age: 27,
        Language: "English, Cantonese, Chinese",
        Class_Section: "ZAA",
        Student_ID: 149507212,
        Instructor: "Muath Alzghool"
    }
};

//get div: infographic
const infographic = document.getElementById("infographic");
var infographicContainer = document.createElement('div');
infographic.appendChild(infographicContainer);
infographicContainer.id = "infographicContainer";

//create about me in the infographic
function aboutMe(){
    //create container
    var aboutContainer = document.createElement('div');
    infographicContainer.appendChild(aboutContainer);
    aboutContainer.id = "about";

    //create element: h1 shows About Me header to container
    var aboutTitle = document.createElement("h1");
    aboutTitle.innerHTML = "About Me";
    aboutContainer.appendChild(aboutTitle);

    //create element: p shows About me content to container
    var aboutContent = document.createElement("p");
    aboutContent.innerHTML = Infographic.about_me;
    aboutContainer.appendChild(aboutContent);
}

//create information in the infographic
function information(){
    //create container
    var InfoContainer = document.createElement('div');
    infographicContainer.appendChild(InfoContainer);
    InfoContainer.id = "info"

    //create element: h1 shows Info header to container
    var infoTitle = document.createElement("h1");
    infoTitle.innerHTML = "Info";
    InfoContainer.appendChild(infoTitle);

    //append infomation table to container
    var infoContent = objectToTableForm(Infographic.info);
    InfoContainer.appendChild(infoContent);
}

//Utlis funtcions*******************
//recieve object and return a table

function objectToTableForm(object){
    //get object Property and Property value
    objectProperty = Object.getOwnPropertyNames(object);
    //replace the property's underscore to space
    for(let i = 0; i <objectProperty.length; i++){
        objectProperty[i] = objectProperty[i].replaceAll('_', ' ');
    };

    objectValue = Object.values(object);

    //create div: table
    var table = document.createElement("div");
    //create table body
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    //create table rows
    for (let i = 0; i < objectProperty.length; i++) { 
        var row = tbody.insertRow(-1);

        //append cells to row
        cellProperty = row.insertCell(0);
        cellProperty.innerHTML = objectProperty[i];
        cellValue = row.insertCell(1);
        cellValue.innerHTML = objectValue[i];
    }
  
    return table;
}



//display infographic
function displayInfographic(){
    aboutMe();
    information();
}

//window
window.displayInfographic();






