function showmenu(){
  if(window.innerWidth<1000) {
    document.getElementById("m").style.width = "75%";
    document.getElementById("m").style.visibility= "visible";
   document.getElementById("zaslona").style.visibility= "visible";
   document.getElementById("zaslona").style.opacity= "0.5";
   document.getElementById("container").style.overflow = "hidden";
   }

   else {
    document.getElementById("m").style.width = "14%";
    document.getElementById("m").style.visibility= "visible";
   document.getElementById("zaslona").style.visibility= "visible";
   document.getElementById("zaslona").style.opacity= "0.5";
   document.getElementById("container").style.overflow = "hidden"
   }
}
function hidemenu(){
    document.getElementById("m").style.width = "0%";
    document.getElementById("m").style.visibility= "hidden";
    document.getElementById("zaslona").style.visibility= "hidden";
    document.getElementById("root").style.opacity= "1";
    document.getElementById("container").style.overflow = "visible";
}

function refresh(){
    location.reload();
}


function podkresl(pomoc){
    pomoc.style.textDecoration= "underline";
}

function niepodkresl(pomoc){
    pomoc.style.textDecoration= "none";
}



function ciemnienie() {
   document.getElementById("divsearch").style.boxShadow = "0px -2px 0px inset";
}
function ciemnienie1() {
    document.getElementById("divsearch1").style.boxShadow = "0px -2px 0px inset";
 }

window.onscroll = function() {scroll()};

 function scroll(){

    if (document.documentElement.scrollTop > 50) {
        document.getElementById("gora").style.backgroundColor = "white";
    
      } else {
        document.getElementById("gora").style.backgroundColor = "";
    
      }

      if (document.documentElement.scrollTop > 450) {
        document.getElementById("divsearch1").style.width = "39%";
         document.getElementById("divsearch1").style.visibility= "visible";
      }
      else {
        document.getElementById("divsearch1").style.width = "0%";
      document.getElementById("divsearch1").style.visibility = "hidden";
      
        }

 }
 
