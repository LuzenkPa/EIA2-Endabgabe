"use strict";
var Eisdiele;
(function (Eisdiele) {
    class Waffle {
        element;
        constructor() {
            this.element = document.createElement("div");
            this.element.className = "waffle";
            this.element.style.width = "50px";
            this.element.style.height = "50px";
            this.element.style.backgroundColor = "tan";
            document.getElementById("gameContainer").appendChild(this.element);
        }
    }
    Eisdiele.Waffle = Waffle;
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=waffle.js.map