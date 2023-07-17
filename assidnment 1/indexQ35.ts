const animals: string[] = ["Dog", "Cat", "Rabbit"];

for (const animal of animals) {
  console.log(animal);
}

console.log("\n");

for (const animal of animals) {
  console.log(`A ${animal.toUpperCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");
