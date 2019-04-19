import React, { Component } from 'react';
import Menu from './menu';
import Project from './project';
import gst from './photos/gts.jpg';
import fande from './photos/fande.jpg';
import todo from './photos/todo.jpg';
import rentcar from './photos/rentcar.jpg';

class Projects extends Component{
    state = {
        projects: [
            {
                name: "Guess the square",
                github: "https:/",
                link: "https:/",
                description: "great project",
                photo: gst
            },
            {
                name: "Find & Eat",
                github: "https:/",
                link: "https:/",
                description: "great project",
                photo: fande
            },
            {
                name: "ToDo App",
                github: "https:/",
                link: "https:/",
                description: "great project",
                photo: todo
            },
            {
                name: "Wypożyczalnia samochodów",
                github: "https:/",
                link: "https:/",
                description: "great project",
                photo: rentcar
            }
        ]
    }
    render(){
        return(
            <div>
                <Menu handleClick={this.props.handleClick}/>
                <div className="projects">
                    {this.state.projects.map((project, index) =>{
                        return (
                        <Project
                            key={index}
                            name={project.name}
                            github={project.github}
                            link={project.link}
                            description={project.description}
                            photo={project.photo}
                        />)
                        
                    })}
                </div>

            </div>
        )
    }
}

export default Projects;