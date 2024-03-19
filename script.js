let boxes = document.querySelectorAll(".box");
let turnO = true;
let popup = document.querySelector(".winner");
let overlay = document.querySelector(".overlay");
let ok = document.querySelector(".ok");

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
const checkWinner = () => {
    for(let pattern of wins) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 === val2 && val1 === val3) {
            if(val1 == "X") {
                document.querySelector(".text").innerText = "Player X wins";
                popup.style.zIndex = 999;
                overlay.style.zIndex = 998;
            } else if(val1 == "O") {
                document.querySelector(".text").innerText = "Player O wins";
                popup.style.zIndex = 999;
                overlay.style.zIndex = 998;
            }
            break;
        }
    }
};
const disableAll = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};
document.querySelector(".reset").addEventListener("click", () => {
    disableAll();
});
ok.addEventListener("click", () => {
    popup.style.zIndex = -999;
    overlay.style.zIndex = -998;
    disableAll();
});
