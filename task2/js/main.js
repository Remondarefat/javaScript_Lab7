
let watch = document.querySelector("h1")
let SelectMenu = document.querySelectorAll("select")
let addAlarmBtn = document.querySelector("button")
let content =document.querySelector(".content")
let alarmContainer =document.querySelector(".alarmContainer")
let alarmTime ;
ringTone = new Audio("./sounds/13767_nice_larm_clock.mp3")

for(let i=12 ; i>0 ; i--){
if (i<10){
    i="0" + i;
}
let selectOption =`<option value="${i}" >${i}</option>`
SelectMenu[0].firstElementChild.insertAdjacentHTML("afterend" , selectOption)
}
for(let i=59 ; i>+0 ; i--){
if (i<10){
    i="0" + i;
}
let selectOption =`<option value="${i}" >${i}</option>`
SelectMenu[1].firstElementChild.insertAdjacentHTML("afterend" , selectOption)
}
for(let i=2 ; i>0 ; i--){
    var temp =i ;
if (temp==1){
    temp="AM"
}
else if (temp==2){
    temp="PM"
}
let selectOption =`<option value="${temp}" >${temp}</option>`
SelectMenu[2].firstElementChild.insertAdjacentHTML("afterend" , selectOption)
}

setInterval(()=>{

    let date =new Date ();
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    temp = "AM";
    //TODO --> check if hr > 12 change temp to "pm" and return 12-hour formate
    if(hr>=12){
        hr=hr-12;
        temp="PM";
    }
    // ! if houre =0 equal hr =12
   hr = hr == 0 ? hr = 12 : hr ; 
   //! if hr & min & sec < 10 adding "0"
hr =hr < 10 ? "0" + hr : hr ;
min =min < 10 ? "0" + min : min ;
sec =sec < 10 ? "0" + sec : sec ;

//? add output in HTML file 
watch.innerText =`${hr}:${min}:${sec} ${temp}`;

if(alarmTime ==`${hr}:${min} ${temp}` ){
    ringTone.play();
    ringTone.loop=true;
    
}
},1000);

let alarmStore =[];

addAlarmBtn.addEventListener('click' , function(eventInfo){  
        let time =`${SelectMenu[0].value}:${SelectMenu[1].value} ${SelectMenu[2].value}` ;
        if(time.includes("Hour") || time.includes("Minutes") || time.includes("AM/PM")){
            eventInfo.preventDefault();
            const p =document.createElement("p")
            const textnode = document.createTextNode("please enter valied time");
            p.appendChild(textnode);
            p.style.color="red"
            p.style.fontSize="30px"
            // ! Insert the new p element after the button element
            addAlarmBtn.parentNode.insertBefore(p, addAlarmBtn.nextSibling);
        }
        else{
            alarmStore.push(time);
            alarmTime=time;
            displayAlarm();
            toggle.checked=true;
        }
    
    
});

function displayAlarm(){
    let cartona='';
    for (var i=0 ; i<alarmStore.length ;i++){
        cartona+= `
        <div class="newAlarm bg-white border-2 w-100 rounded-2 p-1 my-4 d-flex justify-content-between align-items-center">
            ${alarmStore[i]}
            <div class="d-flex  align-items-center">
            <div style="background-color:green" id="tg" class="toggle-button">
                <input type="checkbox" id="toggle" onclick="myFunction()">
                <label for="toggle"></label>
            </div>
            <button style="width:45px" class="btn btn-outline-info  " onclick=" DeletAlarm(${i})" >
                <i class="fa-solid fa-trash"></i>
            </button>
            </div>
        </div>
        `
    
    }
alarmContainer.innerHTML=cartona;
}


function myFunction() {
    var toggle = document.getElementById("toggle");
    var toggleBtn =document.getElementById("tg");

    if (toggle.checked ==true) {
        toggleBtn.style.backgroundColor="green";
        console.log("Toggle is ON");
    } else {
        toggleBtn.style.backgroundColor="lightblue";
        ringTone.pause();
        ringTone.loop=false;
        
    }
}
function DeletAlarm(i){
        alarmStore.splice(i, 1);
        displayAlarm();

}