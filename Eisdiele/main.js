"use strict";
var Eisdiele;
(function (Eisdiele) {
    let currentOrder;
    let money = 0;
    const customers = [];
    document.addEventListener("DOMContentLoaded", () => {
        setupGame();
        generateOrder();
    });
    function setupGame() {
        document.querySelectorAll(".iceCream").forEach(button => {
            button.addEventListener("click", () => {
                const flavor = button.dataset.flavor;
                document.querySelectorAll(".waffle, .becher").forEach(containerButton => {
                    containerButton.addEventListener("click", () => {
                        const container = containerButton.dataset.container;
                        document.querySelectorAll(".topping").forEach(toppingButton => {
                            toppingButton.addEventListener("click", () => {
                                const topping = toppingButton.dataset.topping;
                                document.querySelectorAll(".sauce").forEach(sauceButton => {
                                    sauceButton.addEventListener("click", () => {
                                        const sauce = sauceButton.dataset.sauce;
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
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        drawTheke(ctx);
    }
    function generateOrder() {
        const flavors = Eisdiele.Data.flavors;
        const containers = Eisdiele.Data.containers;
        const toppings = Eisdiele.Data.toppings;
        const sauces = Eisdiele.Data.sauces;
        // Wähle ein zufälliges Objekt aus und extrahiere den Namen
        const selectedFlavor = flavors[Math.floor(Math.random() * flavors.length)].name;
        const selectedContainer = containers[Math.floor(Math.random() * containers.length)].name;
        const selectedTopping = toppings[Math.floor(Math.random() * toppings.length)].name;
        const selectedSauce = sauces[Math.floor(Math.random() * sauces.length)].name;
        currentOrder = new Eisdiele.Order(selectedFlavor, selectedContainer, selectedTopping, selectedSauce);
        document.getElementById("orderDisplay").innerText = `Bestellung: ${currentOrder.flavor} in ${currentOrder.container} mit ${currentOrder.topping} und ${currentOrder.sauce}`;
    }
    function checkOrder(flavor, container, topping, sauce) {
        if (flavor === currentOrder.flavor && container === currentOrder.container && topping === currentOrder.topping && sauce === currentOrder.sauce) {
            money += 5; // Preis pro Bestellung
            document.getElementById("money").innerText = `Geld: ${money}€`;
            generateOrder();
            serveCustomer();
        }
        else {
            alert("Falsche Bestellung!");
        }
    }
    function drawTheke(ctx) {
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(0, ctx.canvas.height - 100, ctx.canvas.width, 100);
    }
    async function createCustomer() {
        const customer = new Eisdiele.Customer();
        customers.push(customer);
        await customer.moveToTheke();
    }
    function serveCustomer() {
        const servedCustomer = customers.shift();
        if (servedCustomer) {
            servedCustomer.leave();
        }
    }
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=main.js.map