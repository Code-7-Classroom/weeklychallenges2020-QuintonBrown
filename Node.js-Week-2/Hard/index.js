const express = require('express');
const app = express();

app.use(express.json());

let data = require('/Users/quintonhbrown/Desktop/Submissions/Node.js-Week-2/employees.json')
//GET::myendpointname.com/employees = Returns json with information from all employees.
app.get('/employees', (req, res) => {
    
    if (!data) {
        res.status(404).send(`Could not find the employee`)
    }

    res.send(data)
})
//POST::myendpointname.com/employees = Inserts new employee into your data.
app.post('/employees', (req, res) => {
    const addEmployee = {
        name: req.body.name,
        id: data.employees.length + 1,
        salary: req.body.salary,
        departmentName: req.body.departmentName
    };
    data.employees.push(addEmployee);
    res.send(addEmployee)
})

// PUT::myendpointname.com/employees/<employeeID> = Updates information for specified employee.
app.put('/employees/:id', (req, res) => {
    const addEmployee = {
        name: req.body.name,
        id: req.body.id,
        salary: req.body.salary,
        departmentName: req.body.departmentName
    };
    data.employees.push(addEmployee);
    res.send(addEmployee)
})
//GET::myendpointname.com/employees/<employeeID> = Returns json with the information from that specific employee.
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
//DELETE::myendpointname.com/employees/<employeeID> = Removes the employee with that ID from the data.
app.delete('/employees/:id', (req, res) => {
    const deleteEmployee = {
        name: req.body.name,
        id: req.body.id,
        salary: req.body.salary,
        departmentName: req.body.departmentName
    };
    data.employees.pop(deleteEmployee);
    res.send(deleteEmployee)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))

