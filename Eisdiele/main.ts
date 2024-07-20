namespace Eisdiele {
    let currentOrder: Order;
    let money: number = 0;
    const customers: Customer[] = [];

    document.addEventListener("DOMContentLoaded", () => {
        setupGame();
        generateOrder();
    });

    function setupGame(): void {
        document.querySelectorAll(".iceCream").forEach(button => {
            button.addEventListener("click", () => {
                const flavor = (button as HTMLElement).dataset.flavor!;
                document.querySelectorAll(".waffle, .becher").forEach(containerButton => {
                    containerButton.addEventListener("click", () => {
                        const container = (containerButton as HTMLElement).dataset.container!;
                        document.querySelectorAll(".topping").forEach(toppingButton => {
                            toppingButton.addEventListener("click", () => {
                                const topping = (toppingButton as HTMLElement).dataset.topping!;
                                document.querySelectorAll(".sauce").forEach(sauceButton => {
                                    sauceButton.addEventListener("click", () => {
                                        const sauce = (sauceButton as HTMLElement).dataset.sauce!;
                                        checkOrder(flavor, container, topping, sauce);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

        createCustomer();

        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d")!;
        drawTheke(ctx);
    }

    function generateOrder(): void {
        const flavors = Data.flavors;
        const containers = Data.containers;
        const toppings = Data.toppings;
        const sauces = Data.sauces;

        // Wähle ein zufälliges Objekt aus und extrahiere den Namen
        const selectedFlavor = flavors[Math.floor(Math.random() * flavors.length)].name;
        const selectedContainer = containers[Math.floor(Math.random() * containers.length)].name;
        const selectedTopping = toppings[Math.floor(Math.random() * toppings.length)].name;
        const selectedSauce = sauces[Math.floor(Math.random() * sauces.length)].name;

        currentOrder = new Order(selectedFlavor, selectedContainer, selectedTopping, selectedSauce);
        document.getElementById("orderDisplay")!.innerText = `Bestellung: ${currentOrder.flavor} in ${currentOrder.container} mit ${currentOrder.topping} und ${currentOrder.sauce}`;
    }

    function checkOrder(flavor: string, container: string, topping: string, sauce: string): void {
        if (flavor === currentOrder.flavor && container === currentOrder.container && topping === currentOrder.topping && sauce === currentOrder.sauce) {
            money += 5; // Preis pro Bestellung
            document.getElementById("money")!.innerText = `Geld: ${money}€`;
            generateOrder();
            serveCustomer();
        } else {
            alert("Falsche Bestellung!");
        }
    }

    function drawTheke(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(0, ctx.canvas.height - 100, ctx.canvas.width, 100);
    }

    async function createCustomer(): Promise<void> {
        const customer = new Customer();
        customers.push(customer);
        await customer.moveToTheke();
    }

    function serveCustomer(): void {
        const servedCustomer = customers.shift();
        if (servedCustomer) {
            servedCustomer.leave();
        }
    }
}
