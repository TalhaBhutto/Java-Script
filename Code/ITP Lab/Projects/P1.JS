X1="<li class=\"list-group-item list-group-item-dark\">Maths solutions</li><li class=\"list-group-item list-group-item-dark\">English Solutions</li><li class=\"list-group-item list-group-item-dark\">Chemistry Solutions</li><li class=\"list-group-item list-group-item-dark\">Physics Solutions</li><li class=\"list-group-item list-group-item-dark\">Biology Solutions</li><li class=\"list-group-item list-group-item-dark\">History Solutions</li><li class=\"list-group-item list-group-item-dark\">Geography Solutions</li><li class=\"list-group-item list-group-item-dark\">Urdu Solutions</li><li class=\"list-group-item list-group-item-dark\">Sindhi Solutions</li><li class=\"list-group-item list-group-item-dark\">Computer Solutions</li><li class=\"list-group-item list-group-item-dark\">Islamiat Solutions</li><li class=\"list-group-item list-group-item-dark\">Arabic Solutions</li><li class=\"list-group-item list-group-item-dark\">Maths Past Papers</li><li class=\"list-group-item list-group-item-dark\">English Past Papers</li><li class=\"list-group-item list-group-item-dark\">Chemistry Past Papers</li><li class=\"list-group-item list-group-item-dark\">Physics Past Papers</li><li class=\"list-group-item list-group-item-dark\">Biology Past Papers</li><li class=\"list-group-item list-group-item-dark\">History Past Papers</li><li class=\"list-group-item list-group-item-dark\">Geography Past Papers</li><li class=\"list-group-item list-group-item-dark\">Urdu Past Papers</li><li class=\"list-group-item list-group-item-dark\">Sindhi Past Papers</li><li class=\"list-group-item list-group-item-dark\">Computer Past Papers</li><li class=\"list-group-item list-group-item-dark\">Islamiat Past Papers</li><li class=\"list-group-item list-group-item-dark\">Arabic Past Papers</li>";
function ModeChanger(num){
if(num==1){
    document.querySelector("#B1").setAttribute("class","B1");
    //document.querySelector("#SideBarList").innerHTML=X1;
    listgroup=document.getElementsByClassName("list-group-item")
    for(a=0;a<listgroup.length;a++){
        listgroup[a].setAttribute("class","list-group-item list-group-item-dark");
    }

    }
else{
    document.querySelector("#B1").setAttribute("class","B2");
}
}