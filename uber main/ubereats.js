function showmenu(){
  if(window.innerWidth<1500) {
    document.getElementById("m").style.width = "70%";
    document.getElementById("m").style.opacity = "1";
    document.getElementById("m").style.visibility= "visible";
   document.getElementById("zaslona").style.visibility= "visible";
   document.getElementById("zaslona").style.opacity= "0.5";
   document.getElementById("container").style.overflowY = "hidden";
   document.getElementById("applink1").innerHTML = "Pobierz aplikację";
   }

   else {
    document.getElementById("m").style.width = "10%";
    document.getElementById("m").style.opacity = "1";
    document.getElementById("m").style.visibility= "visible";
   document.getElementById("zaslona").style.visibility= "visible";
   document.getElementById("zaslona").style.opacity= "0.5";
   document.getElementById("container").style.overflowX = "hidden"
   }
}
function hidemenu(){
    document.getElementById("m").style.width = "0%";
    document.getElementById("m").style.opacity = "0";
    document.getElementById("m").style.visibility= "hidden";
    document.getElementById("zaslona").style.visibility= "hidden";
    document.getElementById("container").style.overflowY = "visible";
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

 
    if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
        document.getElementById("gora").style.backgroundColor = "white";
    
      } else {
        document.getElementById("gora").style.backgroundColor = "";
    
      };

      if (document.documentElement.scrollTop > 450) {
        document.getElementById("divsearch1").style.width = "39%";
         document.getElementById("divsearch1").style.visibility= "visible";
      }
      else {
        document.getElementById("divsearch1").style.width = "0%";
      document.getElementById("divsearch1").style.visibility = "hidden";
      
        };


        
      if (document.documentElement.scrollTop > 450 && window.innerWidth<1500) {
        document.getElementById("divsearch1").style.width = "100%";
        document.getElementById("divsearch1").style.height = "100%";
        document.getElementById("divsearch1").style.left = "0%";
         document.getElementById("divsearch1").style.visibility= "visible";
         document.getElementById("guziki").style.width = "0%";
         document.getElementById("guziki").style.visibility = "hidden";
         document.getElementById("goraleft").style.width = "0%";
         document.getElementById("goraleft").style.visibility = "hidden";
      }
      else {
        document.getElementById("divsearch1").style.width = "0%";
      document.getElementById("divsearch1").style.visibility = "hidden";
      document.getElementById("guziki").style.width = "50%";
         document.getElementById("guziki").style.visibility = "visible";
         document.getElementById("goraleft").style.width = "40%";
         document.getElementById("goraleft").style.visibility = "visible";
        };
 }