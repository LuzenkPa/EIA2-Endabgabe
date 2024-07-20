"use strict";
var Eisdiele;
(function (Eisdiele) {
    class IceCream {
        flavor;
        color;
        element;
        constructor(flavor, color) {
            this.flavor = flavor;
            this.color = color;
            this.element = document.createElement("div");
            this.element.className = "iceCream";
            this.element.style.width = "50px";
            this.element.style.height = "50px";
            this.element.style.backgroundColor = color;
            this.element.style.borderRadius = "50%";
            document.getElementById("gameContainer").appendChild(this.element);
        }
    }
    Eisdiele.IceCream = IceCream;
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=icecream.js.map