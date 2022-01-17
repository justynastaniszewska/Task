// ToDo
/*
Task 1
Import array with users (from user1.json file) and write a function that will check if the phone number for every single user contains only digits
Result:
- if the phone number contains only digits then log true in the console
- if the phone number does not contain only digits then log which user's phone number is not correct e.g. "Phone number of user with ID 2 is not correct"

Task 2
Import array with users (from user1.json file) and users (from user2.js file) and compare them
Result:
- if the first email address of users1 is the same as the first email address of users2 (users1.users[1].emailAddress === users2.users[1].emailAddress) then do not log anything
- if the first email address of users1 is not the same as the first email address of users2 then log in the console e.g. "Email addresses of user with ID 1 are not the same. First email is: racks.jacson@test.tt; but second email is: racks.jecson@test.tt".

Compare email addresses, first names, last names and phone numbers.
*/

var data = require("./users1.json");
for (let i = 0; i < data.users.length; i++) {
  if (/^\d+$/.test(data.users[i].phoneNumber)) {
    console.log("true");
  } else {
    console.log(`phone number of user with id ${i + 1} was not correct`);
  }
}
console.log("\n");
const data2 = require("./users2");

for (let i = 0; i < data.users.length; i++) {
  if (data.users[i].emailAddress !== data2.users[i].emailAddress)
    console.log(
      `Email addresses of user with ID ${
        i + 1
      } are not the same. First email is: ${
        data.users[i].emailAddress
      }; but second email is: ${data2.users[i].emailAddress}`
    );
}

for (let i = 0; i < data.users.length; i++) {
  if (data.users[i].firstName !== data2.users[i].firstName)
    console.log(
      `First names of user with ID ${i + 1} are not the same. First name is: ${
        data.users[i].firstName
      }; but second name is: ${data2.users[i].firstName}`
    );
}

for (let i = 0; i < data.users.length; i++) {
  if (data.users[i].lastName !== data2.users[i].lastName)
    console.log(
      `Last names of user with ID ${i + 1} are not the same. First name is: ${
        data.users[i].lastName
      }; but second name is: ${data2.users[i].lastName}`
    );
}

for (let i = 0; i < data.users.length; i++) {
  if (data.users[i].phoneNumber !== data2.users[i].phoneNumber)
    console.log(
      `Phone numbers of user with ID ${
        i + 1
      } are not the same. First number is: ${
        data.users[i].phoneNumber
      }; but second number is: ${data2.users[i].phoneNumber}`
    );
}
