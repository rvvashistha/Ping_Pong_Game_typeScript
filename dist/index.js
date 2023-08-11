import { state } from "./utils";
import { random } from "./utils";
//DOM Nodes :-
var board = document.querySelector(".board");
var ball = document.querySelector(".ball");
var paddel1 = document.querySelector(".paddle_1");
var paddel2 = document.querySelector(".paddle_2");
var score1 = document.querySelector(".player_1_score");
var score2 = document.querySelector(".player_2_score");
var message = document.querySelector(".message");
var ballcoord = ball.getBoundingClientRect();
var intialBallCoord = ballcoord;
var paddle1Coord = paddel1.getBoundingClientRect();
var paddle2Coord = paddel2.getBoundingClientRect();
var paddleHeight = paddle1Coord.height;
var BallTop = ball.style.top;
var BallLeft = ball.style.left;
var Game = /** @class */ (function () {
    function Game() {
        this.SPEED = 0.085;
        this.state = state.STOPPED;
        this.scores = {
            player1: 0,
            player2: 0
        };
    }
    Game.prototype.start = function () {
        this.state = state.STARTED;
        console.log("Game on!!", this.state);
        this.bindListeners();
    };
    Game.prototype.bindListeners = function () {
        var _this = this;
        document.addEventListener('keydown', function (event) {
            if (event.key === "Enter") {
                _this.state = state.STARTED;
                message.innerHTML = "Game on!!";
                requestAnimationFrame(function () {
                    var velocity = _this.getVelocity();
                    _this.moveBall(velocity);
                });
            }
        });
    };
    Game.prototype.getVelocity = function () {
        return {
            dx: random(3, 8),
            dy: random(3, 8)
        };
    };
    Game.prototype.moveBall = function (velocity) {
        console.log(velocity);
    };
    return Game;
}());
export default Game;
