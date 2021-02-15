function ModeChanger(num){
if(num==1){
    document.querySelector("#B1").setAttribute("class","B1");
    document.querySelector("#Mode").innerHTML="<a href=\"#\"><img class=\"icon\" src=\"images/NightMode.png\" onclick=\"ModeChanger(2)\" alt=\"\"></a>";   
    listgroup=document.getElementsByClassName("list-group-item");
    for(a=0;a<listgroup.length;a++){
        listgroup[a].setAttribute("class","list-group-item list-group-item-dark");
    }
    cards=document.getElementsByClassName("card");
    for(b=0;b<cards.length;b++){
        cards.setAttribute("class","card mb-3  m-2 col-5 bg-dark")
    }
    }
else{
    document.querySelector("#B1").setAttribute("class","");
    
    document.querySelector("#Mode").innerHTML="<a href=\"#\"><img class=\"icon\" src=\"images/DayMode.webp\" onclick=\"ModeChanger(1)\" alt=\"\"></a>";
}
}