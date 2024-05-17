let gameSeq = [];
let userSeq = [];
let btns = ["pink", "brown", "green", "blue"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is Started");
        started = true;
        levelUp();
    }
});
function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function () {
        btn.classList.remove("gameFlash")
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash")
    }, 250);
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randIdx);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function check(index) {
    console.log("Check Level:", level);
    // let index=level-1;
    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
        // console.log("Same value");
    }
    else {
        h2.innerHTML = `Game Over..! Your score was <b>${level}.<b></br> Press any key to Restart a Game.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "whitesmoke";
        }, 150);
        reset();
    }
}
function btnPress() {
    // console.log("User clicked-",this);
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    check(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".box");
for (let box of allBtns) {
    box.addEventListener("click", btnPress);
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}