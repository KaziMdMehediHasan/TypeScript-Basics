// Lesson 1 : Type guards

function formatStatistic(stat: string | number) {
  if(typeof stat==='number'){

  return stat.toFixed(2);
  }else if(typeof stat==='string'){
    return stat.toUpperCase();
  }
}

console.log(formatStatistic('Win'));
console.log(formatStatistic(0.364));

// Lesson 2 :Using in with Type Guards

type Cat = {
  name: string;
  run: () => string;
};

type Fish = {
  name: string;
  swim: () => string;
};

const siameseCat = {
  name: "Proxie",
  run: () => "pitter pat",
};

const bettaFish = {
  name: "Neptune",
  swim: () => "bubble blub",
};

function move(pet: Cat | Fish) {
  if ("run" in pet) {
    return pet.run();
  }
  if ("swim" in pet) {
    return pet.swim();
  }
}

console.log(move(siameseCat));

// Lesson 3 : Narrowing with Else

type Pasta = {
  menuName: string;
  boil: () => string;
}

type Meat = {
  menuName: string;
  panFry: () => string;
}

const fettuccine = {
  menuName: 'Fettuccine',
  boil: () => 'Heat water to 212 degrees',
}

const steak = {
  menuName: 'New York Strip Steak',
  panFry: () => 'Heat oil to 350 degrees',
}

function prepareEntree(entree: Pasta | Meat) {
  if('boil' in entree){
    return entree.boil()
  }else{
    return entree.panFry();
  }
}

console.log(prepareEntree(fettuccine));

// Lesson 4 : Narrowing After a Type Guard

type Metal = {
  magnetize: () => string;
}

type Glass = {
  melt: () => string;
}

const iron = {
  magnetize: () => 'Electromagnet activated'
}

const bottle = {
  melt: () => 'Furnace set to 2,700 degrees'
}


function recycle(trash: Metal | Glass) {
  // Add your code below:
  if('magnetize' in trash){
    return trash.magnetize();
  }
  
  return trash.melt();
}

console.log(recycle(iron));

// Review Type Narrowing
// You’re the type of person that finishes lessons! Nice work on completing Type Narrowing. You’re now equipped to utilize TypeScript’s powers of inference through type guards and type narrowing. Let’s review what we learned:

// TypeScript can understand how our code will execute at runtime so that it can infer more specific types while we write code. This is called type narrowing.
// An expression that checks if a variable is a specific type is called a type guard. Type guard’s allow TypeScript to recognize when it can type narrow.
// The typeof operator is useful when writing type guards. It can check if a variable is a 'string', 'number', 'boolean', or 'symbol'.
// The in operator is useful for checking if a specific property exists on an object. in is especially helpful when we have data represented as objects.
// TypeScript can type narrow after a type guard with an else block. TypeScript understands that that else block of an if statement must be the inverse condition of the if statement’s conditional.
// TypeScript can go even further and type narrow after a type guard if the type guard has a return or another terminal statement within its block, no else required.