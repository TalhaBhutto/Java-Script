function ModeChanger(num){
if(num==1){
    document.querySelector("#B1").setAttribute("class","B1");
    document.querySelector("#Mode").innerHTML="<a href=\"#\"><img class=\"icon\" src=\"images/NightMode.png\" onclick=\"ModeChanger(2)\" alt=\"\"></a>";   
    listgroup=document.getElementsByClassName("list-group-item");
    for(a=0;a<listgroup.length;a++){
        listgroup[a].setAttribute("class","list-group-item list-group-item-dark");
    }

    }
else{
    document.querySelector("#B1").setAttribute("class","");
    
    document.querySelector("#Mode").innerHTML="<a href=\"#\"><img class=\"icon\" src=\"images/DayMode.webp\" onclick=\"ModeChanger(1)\" alt=\"\"></a>";
}
}