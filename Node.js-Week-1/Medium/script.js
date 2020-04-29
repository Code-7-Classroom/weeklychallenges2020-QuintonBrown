/* 
MEDIUM: Create a node application that will read all of the planets in the solar system from a text file and print them to the console.
Text file: mercury, venus, earth, mars, jupiter, saturn ,uranus, neptune, pluto (I still believe in you pluto) 
*/

const fs = require ('fs')

let content = fs.readFileSync("/Users/quintonhbrown/Desktop/Submissions/Node.js-Week-1/Medium/planets.txt")

console.log(content)
