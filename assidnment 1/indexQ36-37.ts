function make_shirt(size: string, message: string) {

    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
  }
  
  // Call the function
  make_shirt("M", "Hello, World!");
  console.log("q37")
  function make_shirtM(size: string = "L", message: string = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
  }
  
  // Call the function with default values
  make_shirtM(); 
  make_shirtM("M"); 
  make_shirt("S", "Hello, OpenAI!");
  