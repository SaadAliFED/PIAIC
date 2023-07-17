function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    console.log("Bread: Whole Wheat");
    console.log("Items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log("Enjoy your sandwich!");
    console.log("--------------------");
}
// Call the function with different number of arguments
order_sandwich("Cheese", "Tomato", "Lettuce");
order_sandwich("Turkey", "Bacon", "Avocado", "Mayo");
order_sandwich("Ham", "Swiss Cheese");
