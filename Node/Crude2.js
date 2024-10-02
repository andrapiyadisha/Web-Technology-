const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const students = [
    {
        id: 1023,
        name: 'Drashti',
        age: 18
    },
    {
        id: 1008,
        name: 'Kuldeep',
        age: 21   
    },
    {
        id: 1025,
        name: 'Meghna',
        age: 27
    }
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // For parsing application/json

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    const newStudent = {
        id: newId,
        name: req.body.name,
        age: req.body.age
    };
    students.push(newStudent);
    res.json(newStudent);
});

app.delete('/students/:id', (req, res) => {
    const studentIndex = students.findIndex(student => student.id === parseInt(req.params.id));
    if (studentIndex !== -1) {
        const deletedStudent = students.splice(studentIndex, 1);
        res.json(deletedStudent);
    } else {
        res.status(404).json({ error: 'Student not found' });
    }
});

app.put('/students/:id', (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id));
    if (student) {
        student.name = req.body.name;
        student.age = req.body.age;
        res.json(student);
    } else {
        res.status(404).json({ error: 'Student not found' });
    }
});

app.listen(3000, () => {
    console.log("Server Started");
});
