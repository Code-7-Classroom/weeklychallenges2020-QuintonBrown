/* EASY: Create two variables and assign a person’s name to each.Console log a statement that says which name is shorter or longer, and by how many characters.
Example output: “The name Thomas is longer than John by 2 characters” */

var name1 = 'Thomas';
var name2 = 'John';
var characters = name1.length - name2.length;
console.log('The name ' + name1 + ' is longer than ' + name2 + ' by ' + characters + ' characters');