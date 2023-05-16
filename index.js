const p1 = document.querySelector("#p1 img");
const p2 = document.querySelector("#p2 img");
const win = document.querySelector("#player_win").textContent;


document.getElementById("play").addEventListener("click", function () {

    const randomNumberP1 = Math.floor(Math.random() * 6) + 1;
    const randomNumberP2 = Math.floor(Math.random() * 6) + 1;

    p1.animate([{ transform: 'rotateZ(0deg)' },
    { transform: 'rotateZ(720deg)' }],
    { duration: 500, easing: "ease-out" })
    p2.animate([{ transform: 'rotateZ(0deg)' }, 
    { transform: 'rotateZ(720deg)' }],
    { duration: 500, easing: "ease-out" })

    
    p1.src = `dices/dice${randomNumberP1}.svg`;
    p2.src = `dices/dice${randomNumberP2}.svg`;
    
    setTimeout(() => {

        if (randomNumberP1 > randomNumberP2) {
            document.querySelector("#player_win").textContent = "1";
            p1.animate([{ transform: "scale(1)", backgroundColor: "blue" }, { transform: "scale(1.2)", backgroundColor: "blue" }, { transform: "scale(1)", backgroundColor: "blue" }],
                { duration: 500, easing: "ease-out" })
        }
        else if (randomNumberP1 < randomNumberP2) {
            document.querySelector("#player_win").textContent = "2";
            p2.animate([{ transform: "scale(1)", backgroundColor: "red" }, { transform: "scale(1.2)", backgroundColor: "red" }, { transform: "scale(1)", backgroundColor: "red" }],
                { duration: 500, easing: "ease-out" })
        }
        else {
            document.querySelector("#player_win").textContent = "-";
            p1.animate([{ transform: "scale(1)", backgroundColor: "gray" }, { transform: "scale(1.2)", backgroundColor: "gray" }, { transform: "scale(1)", backgroundColor: "gray" }], { duration: 500, easing: "ease-out" })
            p2.animate([{ transform: "scale(1)", backgroundColor: "gray" }, { transform: "scale(1.2)", backgroundColor: "gray" }, { transform: "scale(1)", backgroundColor: "gray" }], { duration: 500, easing: "ease-out" })
        }
    }, 500)

})
