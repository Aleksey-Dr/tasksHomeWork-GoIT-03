"use strict";

// Task 30
console.log('Task 30');

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  return {
    completed: false, category: category, priority: priority, ...data,
  };
  // Change code above this line
}

console.log(makeTask({}));
// {completed: false, category: 'General', priority: 'Normal'}
console.log(makeTask({
  category: "Homemade", priority: "Low", text: "Take out the trash"
}));
// {completed: false, category: 'Homemade', priority: 'Low', text: 'Take out the trash'}
console.log(makeTask({ category: "Finance", text: "Take interest" }));
// {completed: false, category: 'Finance', priority: 'Normal', text: 'Take interest'}
console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// {completed: false, category: 'General', priority: 'Low', text: 'Choose shampoo'}
console.log(makeTask({ text: "Buy bread" }));
//{completed: false, category: 'General', priority: 'Normal', text: 'Buy bread'}

console.log('Task 31');

// Change code below this line
function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
  // Change code above this line
}

console.log(add(15, 27)); // 42
console.log(add(12, 4, 11, 48)); // 75
console.log(add(32, 6, 13, 19, 8)); // 78
console.log(add(74, 11, 62, 46, 12, 36)); // 241

// Task 32
console.log('Task 32');

// another variant
/*
// Change code below this line
function addOverNum(...args) {
  let total = 0;
  const firstNum = args[0];
  for (const arg of args) {
    if (arg > firstNum) {
      total += arg;
    }
  }

  return total;
  // Change code above this line
}
*/

// Change code below this line
function addOverNum(firstNum, ...args) {
  let total = 0;
  for (const arg of args) {
    if (arg > firstNum) {
      total += arg;
    }
  }

  return total;
  // Change code above this line
}

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// Task 33
console.log('Task 33');

// Change code below this line
function findMatches(array, ...secondArgs) {
  const matches = []; // Don't change this line
  for (const arg of secondArgs) {
    if (array.includes(arg)) {
      matches.push(arg);
    }
  }
  // Change code above this line
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// Task 34
console.log('Task 34');

const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
  // Change code above this line
};

// Task 35
console.log('Task 35');

const bookShelf_1 = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    const indexOldName = bookShelf_1.books.indexOf(oldName);
    this.books.splice(indexOldName, 1, newName);
    return this.books;
    // Change code above this line
  },
};

console.log(bookShelf_1.updateBook('Haze', 'Dungeon chronicles'));
console.log(bookShelf_1.updateBook('The last kingdom', 'Dune'));

// Task 36
console.log('Task 36');

// Task 41
console.log('Task 41');
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      
    if (potion.name === newPotion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
      
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionsNames = [];
    for (const potion of this.potions) {
      potionsNames.push(potion.name);
    }
    const potionIndex = potionsNames.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {

      if (potion.name === oldName) {
        potion.name = newName;
        return;
      }
    }

    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

// console.log(atTheOldToad.removePotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
atTheOldToad.updatePotionName('Invisibility', 'Invulnerability potion')
console.log(atTheOldToad.getPotions());