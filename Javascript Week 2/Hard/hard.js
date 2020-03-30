var massTom = 8; //lbs
var heightTom = 9; //in
var massJerry = 45; //g
var heightJerry = 10; //cm

var bmiTom = (massTom / (heightTom * heightTom));
var bmiJerry = (massJerry / (heightJerry * heightJerry));

console.log(bmiTom);
console.log(bmiJerry);

var trueFalse = (bmiJerry < bmiTom);
console.log(trueFalse)

console.log('Is Tom\'s BMI of ' + bmiTom + ' higher than Jerry\'s BMI of ' + bmiJerry + "? " + trueFalse)