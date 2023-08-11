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
var boardCoord = board.getBoundingClientRect();
var ballCoord = ball.getBoundingClientRect();
var intialBallCoord = ballCoord;
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
            dx: random(3, 8) * (random(0, 1) ? 1 : -1),
            dy: random(3, 8)
        };
    };
    Game.prototype.moveBall = function (velocity) {
        var _this = this;
        if (ballCoord.top <= boardCoord.top ||
            ballCoord.bottom >= boardCoord.bottom) {
            velocity.dy = -velocity.dy;
        }
        ball.style.top = ball.style.top + velocity.dy + "px";
        ball.style.left = ball.style.left + velocity.dy + "px";
        ballCoord = ball.getBoundingClientRect();
        requestAnimationFrame(function () {
            _this.moveBall(velocity);
        });
    };
    return Game;
}());
export default Game;
