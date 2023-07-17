function order_sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    console.log("Bread: Whole Wheat");
    console.log("Items:");
  
    for (const item of items) {
      console.log(`- ${item}`);
    }
  
    console.log("Enjoy your sandwich!");
    console.log("--------------------");
  }
  
  // Call the function with different number of arguments
  order_sandwich("Cheese", "Tomato", "Lettuce");
  order_sandwich("Turkey", "Bacon", "Avocado", "Mayo");
  order_sandwich("Ham", "Swiss Cheese");
  