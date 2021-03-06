console.log("Welcome to Tic Tac Toe")


//All Music variables defined below:
let music = new Audio("./assets/music.mp3");
let gameoverMusic= new Audio("./assets/gameover.mp3");
let turnMusic = new Audio("./assets/ting.mp3")


//Adding Media Query for Responsive

let mediaQuery = window.matchMedia("(max-width:911px)")

//Initial turn defined as 'X'
let turn = "X";

//Initial Gameover boolean
let gameover =  false;

//Function to change the Turn from X to O
const changeTurn = function(){
    return turn === "X"?"0" : "X"
}


//Function to Check which player win (X or 0)
const checkWin = function(){
    
    let boxtext = document.getElementsByClassName("boxtext");
    //Array for all win possibility in a game and last three index element added for Line when player wins
    let wins = [
            [0,1,2,5,5,0,1,8,0],
            [3,4,5,5,15,0,1,25,0],
            [6,7,8,5,25,0,1,42,0],
            [0,3,6,-5,15,90,-16,25,90],
            [1,4,7,5,15,90,1,25,90],
            [2,5,8,15,15,90,19,25,90],
            [0,4,8,5,15,45,1,25,45],
            [2,4,6,5,15,135,1,25,135]
    ]

    //Applying Logic on each box checking X or 0 is there in grid in serial way
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won ";
            gameover = true;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width ="200px"
            gameoverMusic.play();
            document.querySelector(".line").style.width= "20vw";
            document.querySelector(".line").style.transform =`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            if(mediaQuery.matches){
               
                document.querySelector(".line").style.width= "48vw";
                document.querySelector(".line").style.transform =`translate(${e[6]}vw, ${e[7]}vw) rotate(${e[8]}deg)`
            }
        }
    })

}


//Added Music Play on and Off using eventlistners
document.body.addEventListener("mousemove", function () {
    music.play();
})
off.addEventListener('click',function(){
    music.muted =true;
})
on.addEventListener('click',function(){
    music.muted = false;
})

//Game Logic(Event listeners ,Function call)
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', function(){
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin(); 
            if(!gameover){
            document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    })
})

//Add onlick to reset button
reset.addEventListener('click',function(){
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    });
    turn ="X";
    gameover = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width ="0px"
    document.querySelector(".line").style.width= "0vw";
});








