function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var key = Object.keys(option)[0];
        car[key] = option[key];
    }
    return car;
}
// Call the function with required information and additional name-value pairs
var cars = create_car("Toyota", "Camry", { color: "Blue" }, { features: ["Sunroof", "Navigation"] });
// Print the returned object
console.log(cars);
