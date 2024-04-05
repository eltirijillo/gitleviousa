const body=document.querySelector("body");
const button = document.querySelector("#button");

function changeTheme(){
    body.classList.toggle("darkTheme");
    button.classList.toggle("buttonDarkTheme")
    button.classList.toggle("button");


}
function changeText(){
   
   
    button.classList.toggle("button");
    if (button.innerText==="vuela que vuela, flota que flota"){
        button.innerText="wingardium leviosa";
    } else {
        button.innerText="vuela que vuela, flota que flota";
    }
}


button.addEventListener("click", changeText)

button.addEventListener("click", changeTheme);

