"use strict";
let moniteur1=5
let tuer="jason";
let pvJason=100;
let moniteur=["jacsone","lorent","emilli","manon","fabrise"];
let caractéristique=["geek","blond","sportife","intelo","ingénieur"];
let nono=10;
let gta;
let prt;
let hio;
let gto;
let cal;
let degaPv;
let pro
for(let i=0;i<nono;i++){//j'ai fait une boucle pour que ci les moniteur ou jason son mort on sore de la boucle.

    gta = (Math.floor(Math.random()  * 4) + 0);
    hio = (Math.floor(Math.random()  * 3) + 0);
    prt = (Math.floor(Math.random()  * 3) + 1);
    gto = (Math.floor(Math.random()  * 1) + 0);
    pro = (Math.floor(Math.random()  * 2) + 0);
    degaPv = (Math.floor(Math.random()  * 3) + 1);
  
    if(moniteur1==5){//la ces si les moniteut sont tous la.
            switch (prt) {
                case 1:
                    console.log("le moniteur"+" "+ moniteur[gta]+" "+"est un>/e"+" "+caractéristique[2] +" "+"meure");
                    moniteur.splice(gta,1);
                    moniteur1-=1;
                       
                    break;
                case 2:
                    console.log("le moniteur"+" "+ moniteur[gta]+" "+"est un/e"+" "+caractéristique[2]+" "+ "blese"+" "+ tuer+" "+"lui retire"+" "+10*3+" "+"pv");
                pvJason-=10*3//il infilige 10 dega de basse mais.
                    break;
                case 3:
                    console.log("le moniteur"+" "+ moniteur[gta]+" "+"est un/e"+" "+caractéristique[2]+" "+ "meure mais blese"+" "+ tuer+" "+15*3+" "+"pv");
                    pvJason-=15*3//il infilige 15 dega de basse mais 1 a 3 il multiplie aleatoirement leur dega mais le moniteur meur.
                    moniteur.splice(gta,1);
                    moniteur1-=1;
                     
                    break;
            }
            
    }else if(moniteur1==4){// il en mance 1

    
        switch (prt) {
            case 1:
                console.log("le moniteur"+" "+ moniteur[hio]+" "+"est un>/e"+" "+caractéristique[1] +" "+"meure");
                moniteur.splice(hio,1);
                moniteur1-=1;
                   
                break;
            case 2:
                console.log("le moniteur"+" "+ moniteur[hio]+" "+"est un"+" "+caractéristique[1]+" "+ "blese"+" "+ tuer+" "+"lui retire"+" "+10*1.85+" "+"pv");
                pvJason-=10*1.85
                break;
            case 3:
                console.log("le moniteur"+" "+ moniteur[hio]+" "+"est un/e"+" "+caractéristique[1]+" "+ "meure mais blese"+" "+ tuer+" "+15*1.85+" "+"pv");
                    pvJason-=15*1.85
                    moniteur.splice(hio,1);
                    moniteur1-=1;
                    
                    
                break;
        }
    }else if(moniteur1==3){//il en manque 2
    
        
            switch (prt) {
                case 1:
                    console.log("le moniteur"+" "+ moniteur[pro]+" "+"est un>/e"+" "+caractéristique[0] +" "+"meure");
                    moniteur.splice(prt,1);
                    moniteur1-=1;
                   
            break;
                case 2:
                    console.log("le moniteur"+" "+ moniteur[pro]+" "+"est un"+" "+caractéristique[0]+" "+ "blese"+" "+ tuer+" "+"lui retire"+" "+10+" "+"pv");
                    pvJason-=10
            break;
                case 3:
                    console.log("le moniteur"+" "+ moniteur[pro]+" "+"est un/e"+" "+caractéristique[0]+" "+ "meure mais blese"+" "+ tuer+" "+15+" "+"pv");
                    pvJason-=15
                    moniteur.splice(pro,1);
                    moniteur1-=1;
                      
                    
                break;
        }
    }else if(moniteur1==2){//il en manque 3
        
            switch (prt) {
                case 1:
                    console.log("le moniteur"+" "+ moniteur[gto]+" "+"est un>/e"+" "+caractéristique[4] +" "+"meure");
                    moniteur.splice(gto,1);
                    moniteur1-=1;
                       
                    break;
                case 2:
                    console.log("le moniteur"+" "+ moniteur[gto]+" "+"est un"+" "+caractéristique[4]+" "+ "blese"+" "+ tuer+" "+"lui retire"+" "+10*2+" "+"pv");
                    pvJason-=10*2
                    break;
                case 3:
                    console.log("le moniteur"+" "+ moniteur[gto]+" "+"est un/e"+" "+caractéristique[4]+" "+ "meure mais blese"+" "+ tuer+" "+15*2+" "+"pv");
                    pvJason-=15*2
                    moniteur.splice(gto,1);
                    moniteur1-=1;
                     
                        
                    break;
            }
    }else{//il est tuselle avec jason

         switch (prt) {
                case 1:
                    console.log("le moniteur"+" "+ moniteur[0]+" "+"est un>/e"+" "+caractéristique[3] +" "+"meure");
                    moniteur.splice(0,1);
                    moniteur1-=1;
                       
                    break;
                case 2:
                    console.log("le moniteur"+" "+ moniteur[0]+" "+"est un"+" "+caractéristique[3]+" "+ "blese"+" "+ tuer+" "+"lui retire"+" "+10*1.5+" "+"pv");
                    pvJason-=10*1.5
                    break;
                case 3:
                    console.log("le moniteur"+" "+ moniteur[0]+" "+"est un/e"+" "+caractéristique[3]+" "+ "meure mais blese"+" "+ tuer+" "+15*1.5+" "+"pv");
                    pvJason-=15*1.5
                    moniteur.splice(0,1);
                    moniteur1-=1;
                   
                    break;
            }
        }
    
if(moniteur1==0){//si tous le moniteur meur 
    console.log(tuer+" " +"a tuer tous les moniteur");
    console.log(pvJason);
    break

}else if(pvJason<=0){//si jason meur
    console.log("les moniteur on tuer"+" "+tuer);
    console.log("les moniteur en vie sont"+" "+moniteur);
    
   break
    
}else{}
}
