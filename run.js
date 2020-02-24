const User = require('./User');
const joshua = new User('Joshua', 'Joshua@heaven.com');
const eve = new User('Eve', 'Eve@eden.org');

console.log("------- Rendering START: -------")
console.log(joshua.renderData());
console.log(eve.renderData());
console.log("------- Rendering END: -------")