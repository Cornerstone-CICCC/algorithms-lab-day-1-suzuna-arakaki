// Exercise 3: Write a function named 'getFullNames' that takes an array of user objects 
// (each with 'firstName' and 'lastName' properties) and returns an array of full names (e.g., 'John Doe'). 

function getFullNames(users) {
  let fullName = [];
  for (let i = 0; i < users.length; i++){
    let fName = `${users[i].firstName} ${users[i].lastName}`;
    fullName.push(fName);

  }
  return fullName;
}

console.log(getFullNames([{ firstName: 'John', lastName: 'Doe' }, { firstName: 'Jane', lastName: 'Doe' }])) // ['John Doe', 'Jane Doe']



  // return users.map(user => `${user.firstName} ${user.lastName}`);
