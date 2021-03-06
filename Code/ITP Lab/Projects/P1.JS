var mode="one";
function ModeChanger(num){
if(num==1){
    document.querySelector("#navbar").setAttribute("class","navbar navbar-expand-lg navbar-dark bg-secondary");
    document.querySelector("#B1").setAttribute("class","B1");
    document.querySelector("#Mode").innerHTML="<a href=\"#\"><img class=\"icon\" src=\"images/NightMode.png\" onclick=\"ModeChanger(2)\" alt=\"\"></a>";   
    document.querySelector("#ModeLabel").innerHTML="<a href=\"#\" class=\"nav-link\" onclick=\"ModeChanger(2)\">Dark Mode</a>";
    listgroup=document.getElementsByClassName("list-group-item");
    for(a=0;a<listgroup.length;a++){
        listgroup[a].setAttribute("class","list-group-item list-group-item-dark");
    }
    cards=document.getElementsByClassName("card");
    for(b=0;b<cards.length;b++){
        cards[b].setAttribute("class","card mb-3  m-2 col-5 bg-dark");
    }
    document.querySelector("#footer").setAttribute("class","row bg-secondary");
    document.getElementById("search").setAttribute("class","btn btn-outline-primary");
    mode= "zero";
    localStorage.setItem("value",mode);
    }
else{
    document.querySelector("#navbar").setAttribute("class","navbar navbar-expand-lg navbar-dark bg-primary");
    document.querySelector("#B1").setAttribute("class","");
document.querySelector("#Mode").innerHTML="<a href=\"#\"><img class=\"icon\" src=\"images/DayMode.webp\" onclick=\"ModeChanger(1)\" alt=\"\"></a>";   
document.querySelector("#ModeLabel").innerHTML="<a href=\"#\" class=\"nav-link\" onclick=\"ModeChanger(1)\">Light Mode</a>";
listgroup=document.getElementsByClassName("list-group-item");
for(a=0;a<listgroup.length;a++){
    listgroup[a].setAttribute("class","list-group-item");
}
cards=document.getElementsByClassName("card");
for(b=0;b<cards.length;b++){
    cards[b].setAttribute("class","card mb-3  m-2 col-5");
}
document.querySelector("#footer").setAttribute("class","row bg-primary");
document.getElementById("search").setAttribute("class","btn btn-outline-success");
mode= "one";
localStorage.setItem("value",mode);
}
}
let Solution=title=>{window.open("Solutions.html","_Parent");localStorage.setItem("title",title);};
function PastP(self){
    window.open("pastPaper.html","_Parent");localStorage.setItem("title",title);
};
let x=localStorage.getItem("value");
if(x=="zero"){
    ModeChanger(1);
  }
