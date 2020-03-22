const fs = require("fs");

//读数据库
const usersString = fs.readFileSync("./db/user.json").toString();
const usersArray = JSON.parse(usersString);
// console.log(typeof usersString);
// console.log(usersString);
// console.log(typeof usersArray);
// console.log(usersArray);

//写数据库
const user3 = { id: 3, name: "jerry", password: "ppp" };
usersArray.push(user3);
const string = JSON.stringify(usersArray);
"./db/user.json", string;
