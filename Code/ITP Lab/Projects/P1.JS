function ModeChanger(num){
if(num==1){
    document.querySelector("#B1").setAttribute("class","B1");
    
    listgroup=document.getElementsByClassName("list-group-item")
    for(a=0;a<listgroup.length;a++){
        listgroup[a].setAttribute("class","list-group-item list-group-item-dark");
    }

    }
else{
    document.querySelector("#B1").setAttribute("class","B2");
}
}