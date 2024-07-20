/// <reference path="data.ts" />

namespace Eisdiele {
    export class Order {
        constructor(
            public flavor: { name: string, color: string },
            public container: string,
            public topping: string,
            public sauce: string
        ) {}
    }
}
