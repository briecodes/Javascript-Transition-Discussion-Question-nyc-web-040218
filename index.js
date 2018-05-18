// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  $('#foreground').fadeOut(interval);
}

//  OUR CODE ***

let zombie = document.getElementById("foreground");
zombie.style.opacity = 1.0;
let timeInput = document.getElementById("interval");
let finalTime = "";
let submitButton = document.getElementById("save_lincoln")

timeInput.onkeyup = function(){ 
  finalTime = parseInt(timeInput.value);
  console.log(finalTime);
}

// submitButton.addEventListener("click", function(event){
//   alert("hey don't do that!!!!");
// });

submitButton.onclick = function(){
  if(isNaN(finalTime)){
    finalTime = 10000;
  }

  let fadeZombie = window.setInterval(myCallback, finalTime);
  
  function myCallback(){
    // console.log(zombie.style.opacity);
    if (zombie.style.opacity === "0"){
      window.clearInterval(fadeZombie);
    }else{
      zombie.style.opacity -= .05;
    }
  }
}