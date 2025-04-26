let gameSeq = [];
let userSeq = [];
let btns = ['red','green','yellow','purple'];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Started!");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level-${level}`;

    let rndIdx = Math.floor(Math.random()*4);
    let rndColor = btns[rndIdx];
    let rndBTn = document.querySelector(`.${rndColor}`);

    gameSeq.push(rndColor);
    console.log(gameSeq);
    gameFlash(rndBTn);
}

function checkSeq(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        h2.innerHTML = `Game over!! Your score was <b>${level}</b> <br> press any key to restart. `;
        document.querySelector("body").style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = 'white';
        },150);
        reset();
    }

}

function btnPress(){
    userFlash(this);
    userSeq.push(this.id);
    checkSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq =[];
    level = 0;
}