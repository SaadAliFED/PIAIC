function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with different city-country pairs
var location1 = city_country("Lahore", "Pakistan");
var location2 = city_country("Tokyo", "Japan");
var location3 = city_country("Paris", "France");
console.log(location1);
console.log(location2);
console.log(location3);
