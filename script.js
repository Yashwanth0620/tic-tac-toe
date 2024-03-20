let boxes = document.querySelectorAll(".box");
let turnO = true;
// Possible combinations for the winning cases
let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// to switch turns and disable the visited buttons
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});
// checks the winning combinations every time the button is pressed
const checkWinner = () => {
    for(let pattern of wins) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        
        if(val1 === val2 && val1 === val3) {
            // displays the popup if either of Player X or Player O wins
            if(val1 == "X") {
                document.querySelector(".text").innerText = "Player X wins";
                popup.style.zIndex = 999;
                overlay.style.zIndex = 998;
                break;
            } else if(val1 == "O") {
                document.querySelector(".text").innerText = "Player O wins";
                popup.style.zIndex = 999;
                overlay.style.zIndex = 998;
                break;
            }
        }
    }
};


let popup = document.querySelector(".winner");
let overlay = document.querySelector(".overlay");
let ok = document.querySelector(".ok");
// if the game is a DRAW
document.querySelector(".reset").addEventListener("click", () => {
    disableAll();
});
// hides the popup again
ok.addEventListener("click", () => {
    popup.style.zIndex = -999;
    overlay.style.zIndex = -998;
    disableAll();
});
// every button is re-anabled for the next game
const disableAll = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};
