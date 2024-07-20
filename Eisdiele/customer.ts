namespace Eisdiele {
    export abstract class Person {
        protected element: HTMLDivElement;

        constructor() {
            this.element = document.createElement("div");
            this.element.style.position = "absolute";
            document.getElementById("gameContainer")!.appendChild(this.element);
        }
    }

    export class Customer extends Person {
        private mood: string = "happy";

        constructor() {
            super();
            this.element.className = "customer";
            this.element.style.left = "0";
            this.element.style.bottom = "100px";
            this.element.style.width = "50px";
            this.element.style.height = "100px";
            this.element.style.backgroundColor = "yellow"; // Simple stick figure
        }

        async moveToTheke(): Promise<void> {
            let pos = 0;
            return new Promise(resolve => {
                const id = setInterval(() => {
                    if (pos >= 700) { // Adjust based on the width of the gameContainer
                        clearInterval(id);
                        resolve();
                    } else {
                        pos += 5;
                        this.element.style.left = pos + "px";
                    }
                }, 20);
            });
        }

        leave(): void {
            this.element.style.backgroundColor = "gray"; // Simulate leaving
            setTimeout(() => {
                this.element.remove();
            }, 1000);
        }
    }
}
