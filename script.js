// qusetion 1
var petArray = ["cat", "cow", "dog"];

// qusetion 2
console.log(petArray[1]);

// qusetion 3
petArray.push("sheep");

// qusetion 4
console.log(petArray.length);

// qusetion 5
var catObject = {
  name: "Fluffy",
  colour: "Grey",
  age: 1
};

// qusetion 6
console.log(catObject.age);

// qusetion 7
var catArray = [
  {
    name: "Fluffy",
    colour: "Grey",
    age: 1
  }
];

// qusetion 8
for (var i = 0; i < catArray.length; i++) {
  console.log(catArray[i].name);
  console.log(catArray[i].colour);
  console.log(catArray[i].age);
}

// question 9
function logToConsole(theWord) {
  console.log(theWord);
}

// question 10
logToConsole("Donkey");
