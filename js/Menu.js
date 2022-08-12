//Menu object:
const Menu = ["Home Page", "Infographic", "Education", "Contact Me"];

//edit menu list
function menuList(){
    //get nav: menu_list
    var menulist = document.getElementById("menu_list");
    //create element: ul
    var ul = document.createElement('ul');
    menulist.appendChild(ul);

    for(let i = 0; i < Menu.length; i++){
        var li = document.createElement('li');
        ul.appendChild(li);
        var a = document.createElement('a');
        li.appendChild(a);
        a.innerHTML = Menu[i];
        a.id = `item${i}`;
    }

    var home = document.getElementById("item0");
    home.href = "./#infographic";
    var info = document.getElementById("item1");
    info.href = "./#infographic";
    var edu = document.getElementById("item2");
    edu.href = "./#education";
    var form = document.getElementById("item3");
    form.href = "./contact.html";
}

//window
window.menuList();
