class Human {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    fetchJob = () => {
        console.log(`${this.name} is a ${this.job}!`)
    }
    exercise = () => {
        console.log(`Running is fun! - said ${this.name}`)
    }
}

var quinton = new Human('Quinton', 'Full Stack Dev', '25');
console.log(quinton)

class Programer extends Human {
    constructor(name, job, age, languages) {
        super(name, job, age)
        this.lang = [languages]
        this.busy = true
    }
    completeTask = () => {
        this.busy = false
    }
    acceptNewTask = () => {
        this.busy = true
    }
    offerNewTask = () => {
        if (this.busy === true) {
            console.log(`${this.name} can't accept any new tasks right now.`)
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`)
        }
    }
    learnLanguage = (languages) => {
        return this.lang.push(languages)
    }
    listLanguages = () => {
        console.log(this.lang)
    }
}
var hector = new Programer('Hector', 'Senior Full Stack', '18', 'HTML');
console.log(hector)

hector.exercise();
hector.offerNewTask();
hector.completeTask();
hector.offerNewTask();