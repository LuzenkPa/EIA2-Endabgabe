"use strict";
var Eisdiele;
(function (Eisdiele) {
    class Topping {
        name;
        color;
        constructor(name, color) {
            this.name = name;
            this.color = color;
        }
    }
    Eisdiele.Topping = Topping;
    class Sauce {
        name;
        color;
        constructor(name, color) {
            this.name = name;
            this.color = color;
        }
    }
    Eisdiele.Sauce = Sauce;
    // Die `Data`-Konstante
    Eisdiele.Data = {
        flavors: [
            { name: "Schokolade", color: "brown" },
            { name: "Vanille", color: "yellow" },
            { name: "Stracciatella", color: "#D2B48C" },
            { name: "Haselnuss", color: "#C0C0C0" }
        ],
        containers: [
            { name: "Waffel" },
            { name: "Becher" }
        ],
        toppings: [
            new Topping("Streusel", "#FFD700"),
            new Topping("Nüsse", "#D2691E")
        ],
        sauces: [
            new Sauce("Schokosauce", "#8B4513"),
            new Sauce("Erdbeersauce", "#FF6347")
        ]
    };
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=data.js.map