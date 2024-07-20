namespace Eisdiele {
    // Definitionen für die Typen
    export interface Flavor {
        name: string;
        color: string;
    }

    export interface Container {
        name: string;
    }

    export class Topping {
        constructor(
            public name: string,
            public color: string
        ) {}
    }

    export class Sauce {
        constructor(
            public name: string,
            public color: string
        ) {}
    }

    // Die `Data`-Konstante
    export const Data = {
        flavors: [
            { name: "Schokolade", color: "brown" },
            { name: "Vanille", color: "yellow" },
            { name: "Stracciatella", color: "#D2B48C" },
            { name: "Haselnuss", color: "#C0C0C0" }
        ] as Flavor[],

        containers: [
            { name: "Waffel" },
            { name: "Becher" }
        ] as Container[],

        toppings: [
            new Topping("Streusel", "#FFD700"),
            new Topping("Nüsse", "#D2691E")
        ] as Topping[],

        sauces: [
            new Sauce("Schokosauce", "#8B4513"),
            new Sauce("Erdbeersauce", "#FF6347")
        ] as Sauce[]
    };
}

