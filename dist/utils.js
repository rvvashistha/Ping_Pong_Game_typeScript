var state;
(function (state) {
    state[state["STARTED"] = 0] = "STARTED";
    state[state["STOPPED"] = 1] = "STOPPED";
})(state || (state = {}));
var random = function (min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
};
export { state, random };
