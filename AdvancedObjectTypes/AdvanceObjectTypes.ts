// Lesson 1 : Interfaces and Types
// Write an interface here
interface Run{
  miles:number
}

function updateRunGoal(run:Run) {
  console.log(`
Miles left:       ${50 - run.miles}
Percent of goal:  ${(run.miles / 50) * 100}% complete
  `)
}

updateRunGoal({
  miles: 5,
})

// Lesson 2 : Interfaces and Classes
// Write an interface here
// interface Directory{
//   addFile:(name:string)=>void;
// }

// class DesktopDirectory implements Directory{
//   addFile(name: string) {
//     console.log(`Adding file: ${name}`);
//   }

//   showPreview(name: string) {
//     console.log(`Opening preview of file: ${name}`);
//   }
// }

// const Desktop = new DesktopDirectory();

// Desktop.addFile('lesson-notes.txt');
// Desktop.showPreview('lesson-notes.txt');

// Lesson 3 :Deep Types

interface Directory {
  addFile: (name: string) => void;
  // Define a config type member here
  config:{
    default:{
      encoding:string,
      permissions:string,
    }
  }
}

class DesktopDirectory implements Directory {
  config = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    }
  }

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

console.log(Desktop.config);

// Lesson 4 : Composed Types

interface Dir {
  addFile: (name: string) => void;
  config: Config
}
interface DefaultConfig{
  encoding: string,
  permissions: string
}
interface Config{
  default : DefaultConfig
}
class LaptopDirectory implements Dir {
  config = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    }
  }

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Laptop = new DesktopDirectory();

console.log(Desktop.config);

// Lesson 5 : Extending Interfaces
interface Human {
  name: string;
  hobbies: string[];
}

interface Developer extends Human {
  code: () => void;
}

const me: Developer = { 
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina', 
  hobbies: ['Building rockets']
}

me.code();

// Lesson 6 : Index Signatures

// import { getBudgetAsync } from './api'; ===> Import API from an external source

// Write an interface here
interface Budget{
  [category:string]:number
}

async function getBudget() {
  const result:Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();

// Lesson 7: Optional Type Members
// Write an interface here
interface UserNameOptions{
  firstName?: string;
  lastName?:string;
  username:string;
}
function getUserName(options:UserNameOptions) {
  if (options.firstName && options.lastName) {
    return console.log(`${options.firstName} ${options.lastName}`);
  }

  return console.log(options.username);
}

getUserName({
  firstName: 'Mr.',
  lastName: 'Oshiro',
  username: 'hotelowner304'
})

getUserName({
  firstName: 'Madeline',
  username: 'mountainClimber'
})