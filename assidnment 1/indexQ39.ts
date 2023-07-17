function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  // Call the function with different city-country pairs
  const location1 = city_country("Lahore", "Pakistan");
  const location2 = city_country("Tokyo", "Japan");
  const location3 = city_country("Paris", "France");
  
  console.log(location1);
  console.log(location2);
  console.log(location3);