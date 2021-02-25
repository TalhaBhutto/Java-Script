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
}
}
function Solution(title){
    let Heading= document.querySelector("#SolutionTitle")
    window.open("Solutions.html","_Parent");
}
function PastP(self){
    window.open("pastPaper.html","_Parent");
}