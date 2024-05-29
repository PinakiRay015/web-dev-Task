//Javascript program to update the age of an specific user if found. And if not, the console to be printed as "Not found"
let users = [
  { id: 1, name: "A", age: 25 },
  { id: 2, name: "B", age: 30 },
  { id: 3, name: "C", age: 22 },
];

const userIdToUpdate = 2;
let isFound = false;

for (let key in users) {
  if (userIdToUpdate == users[key].id) {
    users[key].age = 35;
    console.log(`The age of user havind id ${userIdToUpdate} is updated!!`);
    console.log("Here is your updated array object");
    console.log(users[key]);
    isFound = true;
    break;
  }
}
if (!isFound) {
  console.log("User is not found");
}
