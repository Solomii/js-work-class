// 1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.
// let maxNumber = [1, 5, 7, 8, 9, 0, -5, -55, 105, 0, 5, 299, 6, 7];
// for (let i = 0; i < maxNumber.length; i++) {
//   if (maxNumber[i] > maxNumber[0]) {
//     maxNumber[0] = maxNumber[i];
//   }
// }
// console.log(maxNumber[0]);
// 2.	Дано масив[“test”, 12, undefined, null, -5, “javascript”, “1”,
// false, true, 0, “!”].Створити новий масив де будуть тільки
// Стрінгові значення.
console.log(newArr.length)
let arr = [“test”, 12, undefined, null, -5,“javascript”, “1”,
  false, true, 0, “!”];
  let stringArr =[]
function string(arr) = {
  if ()
  }

// 3.	Дано колекцію - [{
//   name: "Yura", age: 55, hobby:
//     ["football", "ski", "hiking"], type: "Admin"
// }, {
//   name: "Yulian", age: 28, hobby: ["films", "games", "hiking"],
//     type: "user"
//   }, {
//     name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"],
//     type: "user"
//   }]– Вивести всіх юзерів з типом user.Вивести юзерів які мають
// хоббі hiking.Додати можливість додати нове поле для всіх юзерів
// – job(true / false);
let users = [
  {
    name: "Yura",
    age: 55,
    hobby: ["football", "ski", "hiking"],
    type: "Admin",
  },
  {
    name: "Yulian",
    age: 28,
    hobby: ["films", "games", "hiking"],
    type: "user",
  },
  {
    name: "Taras",
    age: 38,
    hobby: ["hunting", "TV", "javascript"],
    type: "user",
  },
];
console.log(typeOfUser(users));
console.log(hikingHobbies(users));
function typeOfUser(users) {
  let allUsers = "";
  for (let i = 0; i < users.length; i++) {
    if (users[i].type == "user") {
      allUsers += users[i].name + ", ";
    }
  }
  return allUsers;
}

function hikingHobbies(users) {
  let allHobies = "";
  for (let i = 0; i < users.length; i++) {
    if (users[i].hoby == "hiking") {
      hobies += users[i].name + ", ";
    }
  }
  return allHobies;
}

function newField(users) {
  
}

// 4.	Додати на сторінку івент який буде викидати алерт
// як тільки ми захочемо скопіювати текст з сторінки(додайте 1
//    рядок будь якого тексту) і сповіщати що це інтелектуальна
// власність власника.
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyC" && (event.altKey || event.metaKey)) {
    alert ("інтелектуальна власність")
  }
});
// 5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн.
// Вивести нумерований список з іменами всіх країн та її
// столицею на сторінку, назву країни зробити великими буквами.
