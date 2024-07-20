namespace Eisdiele {
    export class IceCream {
        private element: HTMLDivElement;

        constructor(public flavor: string, public color: string) {
            this.element = document.createElement("div");
            this.element.className = "iceCream";
            this.element.style.width = "50px";
            this.element.style.height = "50px";
            this.element.style.backgroundColor = color;
            this.element.style.borderRadius = "50%";
            document.getElementById("gameContainer")!.appendChild(this.element);
        }
    }
}
