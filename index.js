const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const projects = [
    {"id": 1, "title": "aprendendo apinodejs", "description": "fazendo nossa primeira api em nodejs"},
    {"id": 2, "title": "aprendendo reactjs", "description": "fazendo nossa primeira interface com reactjs"},
    {"id": 3, "title": "aprendendo a conectar o font com o back", "description": "fazendo nossa primeira comunicação do frontend com o backend"}
];

app.get('/proj', (req, res) => {
    return res.json(projects);
});

app.post('/proj', (req, res) => {
    const { id, title, description } = req.body;
    project = { id, title, description };
    projects.push(project);
    return res.json(project);
})

app.put('/proj/:id', (req, res) => {
    const { id } = req.params;
    const { title, description} = req.body;
    
    const projIndex = projects.findIndex(project => project.id == id);
    if(projIndex < 0 ) {
        return res.status(400).send('Project not found');
    }
    const project = { id , title, description };
    projects[projIndex] = project;
    return res.json(projIndex);
})

app.delete('/proj/:id', (req, res) => {
    const { id } = req.params;
    const { title, description} = req.body;
    
    const projIndex = projects.findIndex(project => project.id == id);
    if(projIndex < 0 ) {
        return res.status(400).send('Project not found');
    }
    projects.splice(projIndex, 1);
    res.status(200).send(projects);
})

app.listen(8080);