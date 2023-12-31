import { state } from "./utils"
import { Scores, Velocity, random } from "./utils";
//DOM Nodes :-
const board = document.querySelector(".board") as HTMLElement;
const ball = document.querySelector(".ball") as HTMLElement;
const paddel1 = document.querySelector(".paddle_1") as HTMLElement;
const paddel2 = document.querySelector(".paddle_2") as HTMLElement;
const score1 = document.querySelector(".player_1_score") as HTMLElement;
const score2 = document.querySelector(".player_2_score") as HTMLElement;
const message = document.querySelector(".message") as HTMLElement;



let boardCoord=board.getBoundingClientRect();

let ballCoord = ball.getBoundingClientRect();

const intialBallCoord = ballCoord;

let paddle1Coord = paddel1.getBoundingClientRect();
let paddle2Coord = paddel2.getBoundingClientRect();

let paddleHeight = paddle1Coord.height;

let BallTop = ball.style.top;
let BallLeft = ball.style.left;

class Game {
    private readonly SPEED = 0.085;
    private state = state.STOPPED;
    private scores = {
        player1: 0,
        player2: 0
    } as Scores;


    start() {
        console.log("Game on!!", this.state)
        this.bindListeners();
    }

    bindListeners() {
        document.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                this.state = state.STARTED;
                message.innerHTML = "Game on!!"

                requestAnimationFrame(() => {
                    let velocity = this.getVelocity();
                    this.moveBall(velocity);
                })
            }

        })
    }

    getVelocity() {
        return {
            dx: random(3, 8) * (random(0, 1) ? 1 : -1),
            dy: random(3, 8)
        } as Velocity
    }

    moveBall(velocity: Velocity) {
        
        if(
            ballCoord.top<=boardCoord.top  ||
            ballCoord.bottom>= boardCoord.bottom
        ){
            velocity.dy=-velocity.dy;

        }

        ball.style.top=ball.style.top + velocity.dy +"px"
        ball.style.left=ball.style.left + velocity.dy +"px"

        ballCoord=ball.getBoundingClientRect();

        requestAnimationFrame(()=>{
            this.moveBall(velocity);
        })
    }




}

export default Game