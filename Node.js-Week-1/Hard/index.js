let express = require('express')

let app = express()

let data = require('/Users/quintonhbrown/Desktop/Submissions/Node.js-Week-1/Hard/employees.json')

app.get('/employees', (req, res) => {
    
    if (!data) {
        res.status(404).send(`Could not find the employee`)
    }

    res.send(data)
})

app.get('/employees/:id', (req, res) => {

    const sData = data.employees.find(function (employee) {
        console.log(student.id)

        return parseInt(req.param.id) === employee.id
    })

    if (!sData) {
        res.status(404).send(`Could not find the employee id`)
    }

    res.send(sData)


})

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})