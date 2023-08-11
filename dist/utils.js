var state;
(function (state) {
    state[state["STARTED"] = 0] = "STARTED";
    state[state["STOPPED"] = 1] = "STOPPED";
})(state || (state = {}));
export { state };
