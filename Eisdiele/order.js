"use strict";
/// <reference path="data.ts" />
var Eisdiele;
(function (Eisdiele) {
    class Order {
        flavor;
        container;
        topping;
        sauce;
        constructor(flavor, container, topping, sauce) {
            this.flavor = flavor;
            this.container = container;
            this.topping = topping;
            this.sauce = sauce;
        }
    }
    Eisdiele.Order = Order;
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=order.js.map