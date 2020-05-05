const express = require('express');
const app = express();

let data = require('/Users/quintonhbrown/Desktop/Submissions/Node.js-Week-2/employees.json')

app.get('/employees', (req, res) => {
    
    if (!data) {
        res.status(404).send(`Could not find the employee`)
    }

    res.send(data)
})

app.get('/employees/:id', (req, res) => {

    const eData = data.employees.find(function (employee) {
        console.log(employee.id)

        return parseInt(req.params.id) === employee.id
    })

    if (!eData) {
        res.status(404).send(`Could not find the employee id`)
    }

    res.send(eData)


})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))

