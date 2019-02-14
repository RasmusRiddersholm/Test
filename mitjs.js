function fremad(aktuelleFotoindeks,fotoliste,fototekst){
    if(aktuelleFotoindeks<fotoliste.length-1){
        aktuelleFotoindeks++;
        document.getElementById("bg").style.backgroundImage="url("+fotoliste[aktuelleFotoindeks]+")";
        document.getElementById("billedtekst").innerText=fototekst[aktuelleFotoindeks];
        document.getElementById("lyd").innerHTML="&olcir;";
    }
    return aktuelleFotoindeks;
}



function tilbage(aktuelleFotoindeks,fotoliste,fototekst){
    if(aktuelleFotoindeks>0){
        aktuelleFotoindeks--;
        document.getElementById("bg").style.backgroundImage="url("+fotoliste[aktuelleFotoindeks]+")";
        document.getElementById("billedtekst").innerText=fototekst[aktuelleFotoindeks];
        document.getElementById("lyd").innerHTML="&olcir;";
    }
    return aktuelleFotoindeks;
}



function musikKontrol(musikstykke){
    if(musikstykke.paused){
        musikstykke.play();
        document.getElementById("lyd").innerHTML="&otimes;";
    }else{
        musikstykke.paused();
        document.getElementById("lyd").innerHTML="&olcir;";
    }
}



//Hovedprogramdel
var fotoliste=["store.jpg","street.jpg","window.jpg","facader.jpg","by.jpg"];
var musikliste=["Walker.mp3","Bouncy_Fun_1.mp3","Funky_Groove.mp3","Walker.mp3","Bouncy_Fun_1.mp3"];



var fototekst=[
    "Vi startede ud med en brunch på Le Bistro. Det var en rigtig dejlig oplevelse",
    "Vejret var fint, så vi gik lidt frem og tilbage på strøget. Folk så ud til at nyde det",
    "Vi shoppede lidt i Forever 21. Super hipster, yeah!",
    "Der var spændende butiksfacader at kigge på. Her er det blevet aften, men butikkerne holder dørene åbne for handlende.",
    "Vi tog et sygt godt billede med vores drone."
];


//Startværdier
var aktuelleFotoindeks=0;
var musikstykke=[];


for (var i=0;i<musikliste.length;i++){
    musikstykke[i]=new Audio(musikliste[i]);
    musikstykke[i].loop=true;
}


document.getElementById("bg").style.backgroundImage="url("+fotoliste[aktuelleFotoindeks]+")";
document.getElementById("billedtekst").innerText=fototekst[aktuelleFotoindeks];


//Slut på startværdier


document.getElementById("fremad__knap").addEventListener("click",function(){
    musikstykke[aktuelleFotoindeks].pause();
    aktuelleFotoindeks=fremad(aktuelleFotoindeks,fotoliste,fototekst);
});


document.getElementById("tilbage__knap").addEventListener("click",function(){
    musikstykke[aktuelleFotoindeks].pause();
    aktuelleFotoindeks=tilbage(aktuelleFotoindeks,fotoliste,fototekst);
});



document.getElementById("lyd").addEventListener("click",function(){
    musikKontrol(musikstykke[aktuelleFotoindeks]);
});


document.getElementById("hjem").addEventListener("click",function(){
    location.href="index.html";
});