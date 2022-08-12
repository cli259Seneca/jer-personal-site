//education object:
const Education = 
[
    {
        School: "Seneca College",
        Program: "Computer Programming & Analysis",
        Period: "2022-2024(expected)"
    },
    {
        School: "The Open University of Hong Kong",
        Program: "Bachelor of Social Sciences with Honours in Applied Economics",
        Period: "2014-2018"
    }
];

//get <div>: education
const education = document.getElementById("education");

//create education history table to education <div>
function educationHistory(){
    //create container
    var educationContainer = document.createElement('div');
    education.appendChild(educationContainer);
    educationContainer.id ="educationContainer";

    //create element: h1 shows Info header to container
    var educationHeader = document.createElement("h1");
    educationHeader.innerHTML = "Education";
    educationContainer.appendChild(educationHeader);

    //append Education table to container
    for(let i = 0; i < Education.length; i++){
    var educationContent = objectToTableForm(Education[i]);
    educationContainer.appendChild(educationContent);
    }
}

//Utlis funtcions*******************
//recieve object and return a table
var tableCount = 1;
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
    table.id = `table${tableCount}`;
    tableCount++;
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


//display Education session
function displayEducation(){
    educationHistory();
}

//window
window.displayEducation();

