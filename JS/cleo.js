import
{
    player1,
    displayScreen,
} from "./script.js";
import
{
    Punch
} from "./playMusic.js";
import
{
    random,
    PublicRandomNum,
    PublicRandomNum2,
    PublicRandomNum3,
    PublicRandomNum4,
} from "./PublicRandomNumbers.js";
export{
	clay1
}

let health = 100
let turn = 0
function clay1(){
	if(player1.health > 0 && health > 0)
    {
        turn++;
    }else
    {
        clayHealth.innerText = "Steve's Health: " + health;
        removeChildrenOfFight();
    }
    random();
    appendChildrenToFight();
    displayScreen.classList.add("display-screen-b");
    clayHealth.innerText = health;
    fightInfo.innerText = "Name: " + player1.name;
    fightInfo2.innerText = "Age: " + player1.age;
    fightInfo3.innerText = "Health: " + player1.health;
    fightInfo4.innerText = "Weapon: " + player1.weapon;
    btn1.innerText = "Attack";
    btn2.innerText = "Defend";
    btn3.innerText = "Heal";
    btn4.innerText = "Surrender";
    btn1.addEventListener("click", attack);
    btn2.addEventListener("click", appendShieldsForDefence);
    btn3.addEventListener("click", heal);
    btn4.addEventListener("click", removeChildrenOfFight);
}
function removeChildrenOfFight()
{
    displayScreen.removeChild(clayText);
    displayScreen.removeChild(steveHealth);
    displayScreen.removeChild(fightBar);
    sword.setAttribute("class", "sword");
}
function appendChildrenToFight()
{
    fightBar.appendChild(clayText);
    fightBar.appendChild(f1);
    fightBar.appendChild(f2);
    fightBar.appendChild(f3);
    displayScreen.appendChild(clayHealth);
    displayScreen.appendChild(fightBar);
    fightBar.appendChild(fightInfo);
    fightBar.appendChild(fightInfo2);
    fightBar.appendChild(fightInfo3);
    fightBar.appendChild(fightInfo4);
    fightBar.appendChild(btn1);
    fightBar.appendChild(btn2);
    fightBar.appendChild(btn3);
    fightBar.appendChild(btn4);
}	
const backBtn = document.querySelector("#back");
let healMenu = document.createElement("div");
let food1 = document.createElement("div");
let food2 = document.createElement("div");
let food3 = document.createElement("div");
let food4 = document.createElement("div");
let food5 = document.createElement("div");
let food6 = document.createElement("div");
let food7 = document.createElement("div");
let food8 = document.createElement("div");
let food9 = document.createElement("div");
let shieldN = 3;
let shields = document.createElement("div");
let shield1 = document.createElement("div");
let shield2 = document.createElement("div");
let shield3 = document.createElement("div");
let fightBar = document.createElement("div");
let fightInfo = document.createElement("p");
let fightInfo2 = document.createElement("p");
let fightInfo3 = document.createElement("p");
let fightInfo4 = document.createElement("p");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let btn4 = document.createElement("button");
let f1 = document.createElement("h1");
let f2 = document.createElement("h1");
let f3 = document.createElement("h1");
let clayHealth = document.createElement("h3");
let answer = document.createElement("input");
let submitBtn = document.createElement("button");

let clayText = document.createElement("h1");
let clayText2 = document.createElement("h1");
submitBtn.setAttribute("class", "submit-button");
healMenu.setAttribute("class", "heal-menu");
shields.setAttribute("class", "shields");
shield1.setAttribute("class", "shield");
shield2.setAttribute("class", "shield");
shield3.setAttribute("class", "shield");
food1.setAttribute("class", "food");
food2.setAttribute("class", "food");
food3.setAttribute("class", "food");
food4.setAttribute("class", "food");
food5.setAttribute("class", "food");
food6.setAttribute("class", "food");
food7.setAttribute("class", "food");
food8.setAttribute("class", "food");
food9.setAttribute("class", "food");
healMenu.appendChild(food1);
healMenu.appendChild(food2);
healMenu.appendChild(food3);
healMenu.appendChild(food4);
healMenu.appendChild(food5);
healMenu.appendChild(food6);
healMenu.appendChild(food7);
healMenu.appendChild(food8);
healMenu.appendChild(food9);

fightBar.setAttribute("class", "fight-bar");
fightInfo.setAttribute("class", "fight-info");
fightInfo2.setAttribute("class", "fight-info");
fightInfo3.setAttribute("class", "fight-info");
fightInfo4.setAttribute("class", "fight-info");
btn1.setAttribute("class", "btn1");
btn2.setAttribute("class", "btn2");
btn3.setAttribute("class", "btn3");
btn4.setAttribute("class", "btn4");

clayHealth.setAttribute("class","clayHealth")