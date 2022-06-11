// lesson 1
function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

printNumsAndStrings('hello!');
printNumsAndStrings(5);

// Lesson 2 : Type Narrowing

function formatValue(value: string | number) {
  // Write your code here
  if(typeof value === 'string'){
    console.log(value.toLowerCase());
  }
  if(typeof value === 'number'){
    console.log(value.toFixed(2));
  }
}

formatValue('Hiya');
formatValue(42);

// Lesson 3 : Inferred Union Return Types
type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: 'nikko' };
  } else {
    return 'Could not create a user.';
  }
}

let userData: User | string = createUser();

// Lesson 4: Unions and Arrays
function formatListings(listings:(string|number)[]) {
  return listings.map((listing) => {
    if (typeof listing === 'string') {
      return listing.toUpperCase();
    }

    if (typeof listing === 'number') {
      return `$${listing.toLocaleString()}`;
    }
  });
}

const result = formatListings([
  '123 Main St',
  226800,
  '580 Broadway Apt 4a',
  337900,
]);

console.log(result);

// Lesson 5: Common Key Value Pairs
type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event: Like|Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss',
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);

// Lesson 6 :Unions with Literal Types

type Status = 'idle'|'downloading'|'complete';

const downloadStatus =(status:Status)=>{
  if(status === 'idle'){
    console.log('Download');
  }else if(status==='downloading'){
    console.log('Downloading...');
  }else if(status==='complete'){
    console.log('Your download is complete!');
  }
}

downloadStatus('idle');


// Review Unions
// 🙌 Way to go! We’ve learned a variety of ways to create types that are as specific as we need with unions. To recap, we’ve learned:

// We can combine two types with a vertical bar character |. This is the syntax for defining a union. Each type in a union is called a type member.
// We can narrow down what methods and properties are available in a program with type narrowing. Type narrowing allows us to type a variable as a union, then narrow down the union with a type guard to call type member specific methods and properties.
// If a function can return multiple types, TypeScript will infer all possible return types as a union.
// We can use unions to allow arrays to have multiple types of values.
// To call a method or property on a variable typed as a union, we can only call methods or properties that are identical on all members of the union.
// We can define states within our program by using literal types and unions.