let boxes = document.querySelectorAll(".box");
let turnO = true;

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
        console.log(val1, val2, val3);

        if(val1 === val2 && val1 === val3) {
            if(val1 == "X") {
                alert("Player X wins");
                disableAll();
            } else if(val1 == "O") {
                alert("Player O wins");
                disableAll(0);
            }
            break;
        }
    }
};
const disableAll = (n) => {
    if(n == 0) {
        boxes.forEach((box)=> {
            box.disabled = true;
        });
    } else {
        boxes.forEach((box) => {
            box.disabled = false;
            box.innerText = "";
        })
    }
}
document.querySelector(".reset").addEventListener("click", () => {
    disableAll(1);
});

