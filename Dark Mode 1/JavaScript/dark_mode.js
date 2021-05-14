let darkMode = localStorage.getItem("dark-mode");


const colorSwitch = document.querySelector('#darkModeToggle');


if(darkMode === "enabled"){
    darkModeOn();
    document.querySelector("#darkModeToggle").checked = true;
}

colorSwitch.addEventListener("click",checkMode);

function checkMode(){
    darkMode = localStorage.getItem("dark-mode");    
    if(darkMode !== "enabled")
    {
        trans();
        console.log("dark on")
        darkModeOn();
    }
    else
    {
        trans();
        console.log("dark off")
        darkModeOff();
    }
}


function darkModeOn(){
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode","enabled");
}
function darkModeOff(){
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", null);
}

let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 1000);
}