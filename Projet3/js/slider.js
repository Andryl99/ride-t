var pointer = 0;

var imgTab = [];
    
imgTab[0] = "../pictures/1.jpg";
imgTab[1] = "../pictures/2.jpg";
imgTab[2] = "../pictures/3.jpg";

var titleTab = [];

titleTab[0] = "Réservez simplement";
titleTab[1] = "Voyagez librement";
titleTab[2] = "Terminez facilement";

var txtTab = [] ;

txtTab[0] = "Réservez directement sur la carte interactive et récupérez votre vélo dans la station de votre choix";
txtTab[1] = "'Ridez' sans limite et déplacez vous librement";
txtTab[2] = "Déposez votre vélo dans une station disponible et validez sur l'application, repartez l'esprit tranquille !"



var timer = 5000;

function switchImg()
{
    document.getElementById("blockImg").src = imgTab[pointer];
    document.getElementById("titleTxt").innerHTML = titleTab[pointer];
    document.getElementById("pTxt").innerHTML = txtTab[pointer];
    
    if(pointer < (imgTab.length-1))
    {
        pointer++;
    }
    else{
        pointer=0;
    }
    setTimeout(function(){switchImg()}, timer);
    
    function left()
    {
        pointer-1;
    }
}



window.onload=switchImg;

