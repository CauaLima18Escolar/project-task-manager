import {get} from './api.js';

const fetchProjects = async () => {
    try {
        const projects = await get('http://localhost:5000/projetos');
        projects.map((project) => showProjectsDOM(project));
    } catch (err) {
        console.log('Erro ao buscar os projetos', err)
    };
};

const showProjectsDOM = (project) => {
    const appContent = document.getElementById('app-content');
    const div = document.createElement('div');

    div.innerHTML = `
    
        <h3>${project._nome} ID: ${project._id}</h3>
    
    `

    appContent.appendChild(div);
}

document.getElementById('btn').addEventListener('click', fetchProjects);