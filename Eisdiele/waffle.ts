namespace Eisdiele {
    export class Waffle {
        private element: HTMLDivElement;

        constructor() {
            this.element = document.createElement("div");
            this.element.className = "waffle";
            this.element.style.width = "50px";
            this.element.style.height = "50px";
            this.element.style.backgroundColor = "tan";
            document.getElementById("gameContainer")!.appendChild(this.element);
        }
    }
}
