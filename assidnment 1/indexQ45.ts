function create_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]): object {
    const car: { manufacturer: string; model: string; [key: string]: any } = {
      manufacturer: manufacturer,
      model: model
    };
  
    for (const option of options) {
      const key = Object.keys(option)[0];
      car[key] = option[key];
    }
  
    return car;
  }
  
  // Call the function with required information and additional name-value pairs
  const cars = create_car("Toyota", "Camry", { color: "Blue" }, { features: ["Sunroof", "Navigation"] });
  
  // Print the returned object
  console.log(cars);
  