var watch= document.querySelector(".watch"),
date = document.querySelector(".date");
saturday = document.querySelector(".sat")
sunday = document.querySelector(".sun")
monday = document.querySelector(".mon")
tuesday = document.querySelector(".tue")
wednesday = document.querySelector(".wed")
thursday = document.querySelector(".thu")
friday = document.querySelector(".fri")

function updateWatch(){
    watch.innerHTML = (new Date()).toLocaleTimeString();
}
setInterval(updateWatch,1000);

function daySelector(){
var day=new Date();
var currentDay = day.getDay();
switch(currentDay){

        case 0:
        sunday.style="opacity: 100%"
        break;
        case 1:
        monday.style="opacity: 100%"
        break;
        case 2:
        tuesday.style="opacity: 100%"
        break;
        case 3:
        wednesday.style="opacity: 100%"
        break;
        case 4:
        thursday.style="opacity: 100%"
        break;
        case 5:
        friday.style="opacity: 100%"
        break;
        case 6:
        saturday.style="opacity: 100%"
        break;
} 

}
setInterval(daySelector,1000);

// ------------------------------- popup script -------------------------------- 
var pop = document.querySelector(".open-button");
var closing = document.querySelector(".close");

pop.addEventListener("click",openForm);
closing.addEventListener("click",closeForm);

function openForm() {
    document.getElementById("popup").style.display = "block";
  }


  function closeForm() {
    document.getElementById("popup").style.display = "none";
  }

// ------------------------ alarm set ------------------
var clearBtn = document.querySelector(".clear"),
setButton = document.querySelector(".setAlarm"),
hours = document.querySelector("#hoursInp"),
minutes = document.querySelector("#minutesInp"),
seconds = document.querySelector("#secondsInp");


clearBtn.addEventListener("click",clearInput);
setButton.addEventListener("click",setAlarm)

function clearInput(){
    document.querySelector("#hoursInp").value=0
    document.querySelector("#minutesInp").value=0
    document.querySelector("#secondsInp").value=0
}

function setAlarm() {
    period = Number(
      (Number(seconds.value) + Number(minutes.value) * 60 + Number(hours.value * 3600)) *
        1000
    );
  
    setTimeout(startAlarm, period);
    start = new Date().toLocaleTimeString();
  
    clearInput();
    closeForm();
  }


  function startAlarm() {
    alert(
      `Alarm is set 
      From: ${start} To: ${new Date().toLocaleTimeString()}
        Period: ${period/1000} seconds`
    );
  }

