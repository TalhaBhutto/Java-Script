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
    mode= "zero";
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
mode= "one";
}
}
let Solution=title=>{window.open("Solutions.html","_Parent");sol2(title)};
let sol2=title=>{
let heading= document.getElementById("SolutionTitle");
heading.innerHTML="<h1>"+this.title+"</h1>";
};
function PastP(self){
    window.open("pastPaper.html","_Parent");
};
function ModeChanger2(){
    localStorage.setItem("value",mode);
}
let x=localStorage.getItem("value");
if(x=="zero"){
    ModeChanger(1);
  }
