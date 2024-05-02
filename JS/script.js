//imports
import 
{ 
    Player
} from "./player.js";
import
{
    steveFight,
    steve
} from "./fight.js";
import
{
    Mega
} from "./playMusic.js";
import
{
    clay1
} from "./cleo.js"
//exports
export
{
    player1,
    displayScreen,
};
//elements
const body = document.querySelector("body");
const displayScreen = document.querySelector(".display-screen");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
let playerName = document.createElement("input");
let playerAge = document.createElement("input");
let askName = document.createElement("h2");
let askAge = document.createElement("h2");
let nextButton = document.createElement("button");
let nextButton2 = document.createElement("button");
let player1 = new Player(playerName, 100);
let check = 0
let player = document.querySelector(".player")
let modifier = 10
let cords = document.querySelector("#cords")
const healthD = document.querySelector("#healthD")
const weaponD = document.querySelector("#weaponD")
const burgersD = document.querySelector("#burgersD")
const inventory = document.querySelector("#inventory")
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
nextButton.setAttribute("class", "button");
nextButton2.setAttribute("class", "button");
playerAge.setAttribute("type", "number");
    
    
        if(player1.weapon == "sword")
    {
        player.setAttribute("src", "./CSS/images/Character.png")
    }
    player.style.left = '100px'
    player.style.top = '290px'
    player1.playerx = 100
    player1.playery = 290
    cords.innerText = 'x = ' + player1.playerx + 'y = ' + player1.playery;

window.addEventListener('keydown', (e) => {
        if(player1.weapon == "sword")
    {
        player.setAttribute("src", "./CSS/images/Character.png")
    }
    
    switch (e.key)
    {
        case 'ArrowUp':
            player.style.top = player1.playery + "px";
            player1.playery = player1.playery - modifier;
            cords.innerText = 'x = ' + player1.playerx + 'y = ' + player1.playery;
            wall1()
            break;
        case 'ArrowDown': 
            player.style.top = player1.playery + "px";
            player1.playery = player1.playery + modifier;
            cords.innerText = 'x = ' + player1.playerx + 'y = ' + player1.playery;
            wall2()
            break;
        case 'ArrowLeft':
            player.style.left = player1.playerx + "px";
            player1.playerx = player1.playerx - modifier;
            cords.innerText = 'x = ' + player1.playerx + 'y = ' + player1.playery;
            wall4()
            break;
        case 'ArrowRight':
            player.style.left = player1.playerx + "px";
            player1.playerx = player1.playerx + modifier;
            cords.innerText = 'x = ' + player1.playerx + 'y = ' + player1.playery;
            wall3()
            break;
        case 'r':
            modifier = 13;
            break;
        case 'e':
            modifier = 10;
            break;
        case 'h':
            inventory.setAttribute("class", "inventory");
            healthD.innerText = 'health: ' + player1.health;
            weaponD.innerText = 'weapon: ' + player1.weapon;
            burgersD.innerText = 'number of burgers: ' + player1.food;
            modifier = 0;
            break;
        case 'g':
            inventory.setAttribute("class", "inverntory2");
            healthD.innerText = ''
            weaponD.innerText = ''
            burgersD.innerText = ''
            modifier = 10;
            cords.style.display = 'none';
            break;
        case 'y':
            cords.style.display = 'block';
            break;
        case 't':
            cords.style.display = 'none';
            break;
    }
    if (modifier == 10 || modifier == 13)
    {
        cords.style.display = 'none';
    }
});


    
    
    

function wall1(){
    if(player1.playery <= 0){
        player1.playery = 10
    }
}
function wall2(){
    if(player1.playery >= 613){
        player1.playery = 603
    }
}
function wall3(){
    if(player1.playerx >= 1077){
        player1.playerx = 1067
        player.style.left = '1067px'
    }
}
function wall4(){
    if(player1.playerx <= 58){
        player1.playerx = 68
        player.style.left = '68px'
    }
}





//room1
    
    let clay = document.querySelector(".clayx");
    let clayX = 1000
    let clayY = 310
    clay.style.top = clayY + "px"
    clay.style.left = clayX + "px"
    let dialogBox = document.querySelector("#dialog-box")
    dialogBox.setAttribute("class", "dialog-boxH")
    let words = document.querySelector("#talking")






function start()
{
    let dialouge = 1
stopBtn.addEventListener('click', () => {
    dialouge++
    switch(dialouge){
    case 2:
        words.innerText = "Is this your first time here"
        break;
    case 3:
        words.innerText = "Dont worry i will teach how to defend yourself from anyone"
        break;
    case 4:
        words.innerText = "Well not anyone but most people"
        break;
    case 5:
        clayX = 540
        clayY = 50
        clay.style.top = clayY + "px"
        clay.style.left = clayX + "px"   
        dialogBox.setAttribute("class", "dialog-boxH")
        player.style.display = 'none'
        clay1()
        break;
    }
})
player.style.left = '100px'
player.style.top = '290px'
player1.playerx = 100
player1.playery = 290
cords.innerText = 'x = ' + player1.playerx + 'y = ' + player1.playery;

    
    clay.setAttribute("class", "clay")
    setTimeout(() => {
        dialogBox.setAttribute("class", "dialog-box")
        words.innerText = "hello there, i am clay"
    }, 2000)



    

















































    /*
    startBtn.removeEventListener("click", start);
    nextButton.addEventListener("click", removeChildren);
    displayScreen.appendChild(askName);
    displayScreen.appendChild(playerName);
    displayScreen.appendChild(nextButton);
    askName.innerText = "What is your name?";
    nextButton.innerText = "Next";
    let playerNameV = playerName.value;
    player1.name = playerNameV;
    */
}
    /*
function removeChildren()
{
    if(check == 0)
    {
        check++;
        start();
    }else{
        displayScreen.removeChild(askName);
        displayScreen.removeChild(nextButton);
        displayScreen.removeChild(playerName);
        check--;
        askAgeF();
    }
}
function askAgeF()
{
    displayScreen.appendChild(askAge);
    displayScreen.appendChild(playerAge);
    displayScreen.appendChild(nextButton2);
    askAge.innerText = "And how old are you?";
    nextButton2.innerText = "Next";
    let playerAgeV = playerAge.value;
    player1.age = playerAgeV;
    nextButton2.addEventListener("click", removeChildren2);
}
function removeChildren2()
{
    if(check == 0)
    {
        check++;
        askAgeF();
    }else{
        check--;
        displayScreen.removeChild(askAge);
        displayScreen.removeChild(nextButton2);
        displayScreen.removeChild(playerAge);
        Mega();
        setTimeout(Mega, 10);
        setTimeout(Mega, 160000);
        setTimeout(Mega, 320000);
        setTimeout(Mega, 470000);
        player1.weapon = "Sword";
        steve.setAttribute("class", "steve2");
        steveFight();
    }
}
function stop()
{
    const anchor = document.createElement("a");
    displayScreen.appendChild(anchor);
    anchor.setAttribute("href", "index.html");
    anchor.innerText = "stop";
}
*/