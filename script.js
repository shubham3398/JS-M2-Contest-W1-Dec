const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  { name: "shubham", age: 23, profession: "developer" },
  { name: "rahul", age: 25, profession: "admin" },
  { name: "sanket", age: 22, profession: "developer" },
  { name: "rohit", age: 20, profession: "admin" },
];


// 1. Print Developers
function printDeveloper() {
  for (let i of data) {
    console.log(i);
  }
}

// 2. Add Data
function addData() {
  let yourName = prompt("Enter your Name");
  let yourAge = parseInt(prompt("Enter your Age"), 10);
  let yourProfession = prompt("Enter your Profession");

  let newObj = { name: yourName, age: yourAge, profession: yourProfession };
  data.push(newObj);
}

// 3. Remove Admins
function removeAdmin() {
  for (let i in data) {
    if (data[i].profession === "admin") {
      data.splice(i, 1);
    }
  }
}

// 4. Concatenate Array
function concatenateArray() {
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];

  let newArr = arr1.concat(arr2);
  console.log(newArr);
}

// 5. Average Age
function averageAge() {
  let sum = 0;
  for (let obj of data) {
    sum += obj.age;
  }

  console.log(sum / data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  for (let obj of data) {
    if (obj.age > 25) {
      console.log(true);
      return;
    }
  }
  console.log(false);
}

// 7. Unique Professions
function uniqueProfessions() {
  let map = {};

  for (let obj of data) {
    let profession = obj.profession;
    if (!map[profession]) {
      map[profession] = 1;
      console.log(obj.profession);
    } else {
      map[profession]++;
    }
  }
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
}

// 9. Update Profession
function updateJohnsProfession() {
  for (let obj of data) {
    if (obj.name === "john") {
      obj.profession = "manager";
    }
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let count = 0;

  for (let obj of data) {
    if (obj.profession === "developer" || obj.profession === "admin") {
      count++;
    }
  }
  console.log(count);
}
