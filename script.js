let boxBTN = document.querySelectorAll(".box button")
let replayBTN = document.querySelector("#Replay")
let user1 = document.querySelector(".user1")
let user2 = document.querySelector(".user2")
let player1 = document.querySelector("#player1")
let player2 = document.querySelector("#player2")
startBTN = document.querySelector("#startbtn")
let start = document.querySelector(".start")
let tictactoe = document.querySelector(".tictactoe")
startBTN.addEventListener("click", function () {

    if (!player1.value.trim() || !player2.value.trim()) {
        alert("Please enter both player names.");
        return;
    }

    
    tictactoe.style.display = "flex";
    start.style.display = "none";

    
    user1.textContent = player1.value.trim();
    user2.textContent = player2.value.trim();

    
    user1.style.backgroundColor = "white";
    user1.style.color="black";
    user2.style.backgroundColor = "transparent";
})


let chance = true;

boxBTN.forEach((box, inex) => {
    box.addEventListener("click", () => {
        if (box.innerHTML !== "") {
            return
        }
        if (chance == true) {
            box.innerHTML = "X"
            user2.style.backgroundColor = "white"
            user2.style.color="black";
            user1.style.backgroundColor = "transparent"
            user1.style.color="white"
            chance = false


        } else {
            box.innerHTML = "O"
            box.style.color = "RED"
            user1.style.color="black";
            user2.style.backgroundColor = "transparent"
            user2.style.color="white"
            chance = true
        }

        let someoneWon = win()
        if (!someoneWon) {
            draw()
        }

    }
    )
})

let winCombination = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]


function win() {
    for (let i = 0; i < winCombination.length; i++) {
        let [a, b, c] = winCombination[i];


        if (boxBTN[a].innerHTML !== ""
            && boxBTN[a].innerHTML == boxBTN[b].innerHTML
            && boxBTN[b].innerHTML == boxBTN[c].innerHTML
        ) {
            let winner = boxBTN[a].innerHTML === "X" ? user1.textContent : user2.textContent;
            alert(`${winner} wins!`);

            // Disable all boxes after win
            boxBTN.forEach(btn => btn.disabled = true);
            return true
        }
    }
    return false

}

function draw() {
    let count = 0;
    boxBTN.forEach(btn => {
        if (btn.innerHTML !== "")
            count++
    })

    if (count == 9) {
        alert(`no one win the match`)
    }

}

replayBTN.addEventListener("click", function () {
    boxBTN.forEach(box => {
        box.innerHTML = ""
        box.disabled = false
        box.style.color = "white"
    })
    chance = true;
    user1.style.backgroundColor = "green";
    user2.style.backgroundColor = "transparent";
    user1.style.color="white";
    user2.style.color="white";

   // tictactoe.style.display = "none";
  //  start.style.display = "block";
   // player1.value = "";
    //player2.value = "";

})





