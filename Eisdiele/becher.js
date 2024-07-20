"use strict";
var Eisdiele;
(function (Eisdiele) {
    class Becher {
        element;
        constructor() {
            this.element = document.createElement("div");
            this.element.className = "becher";
            this.element.style.width = "50px";
            this.element.style.height = "50px";
            this.element.style.backgroundColor = "white";
            document.getElementById("gameContainer").appendChild(this.element);
        }
    }
    Eisdiele.Becher = Becher;
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=becher.js.map