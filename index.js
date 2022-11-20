const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());


const courses = require('./Data/courses.json')




app.get('/', (req, res) => {
    res.send('News API Running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const singleCourses = courses.find(n => n._id === id)
    res.send(singleCourses)
})
app.get("/courses/det/:categoryid", (req, res) => {
    const categoryid = req.params.categoryid;
    const cours = courses.find(n => n.category_id == categoryid)
    res.send(cours)
})

app.listen(port, () => {
    console.log('News Server Running On Port', port);
})