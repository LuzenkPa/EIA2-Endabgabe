namespace Eisdiele {
    export class Becher {
        private element: HTMLDivElement;

        constructor() {
            this.element = document.createElement("div");
            this.element.className = "becher";
            this.element.style.width = "50px";
            this.element.style.height = "50px";
            this.element.style.backgroundColor = "white";
            document.getElementById("gameContainer")!.appendChild(this.element);
        }
    }
}
