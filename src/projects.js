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
                github: "https://github.com/pazikbartek/GuessTheSquare",
                link: "https://pazikbartek.github.io/GuessTheSquare/",
                description: "Gra polega na odgadnięciu wszystkich par w ograniczonej liczbie prób.",
                photo: gst,
                tech: "HTML, CSS, JavaScript."
            },
            {
                name: "Find & Eat",
                github: "https://github.com/pazikbartek/Find-and-Eat",
                link: "https://pazikbartek.github.io/Find-and-Eat/",
                description: "Aplikacja, która pozwala wyszukać restaurację po nazwie miasta. Dodatkowo umożliwia sortowanie po opinii lub cenie. Dane pobierane są z zewnętrznego API.",
                photo: fande,
                tech: "HTML, CSS, JavaScript, Webpack."
            },
            {
                name: "ToDo App",
                github: "https://github.com/pazikbartek/ToDoApp",
                link: "https://pazikbartek.github.io/ToDoApp/",
                description: "Aplikacja, która umożliwia dodawanie zadań z podziałem na kategorie. Zadania można usuwać lub zaznaczać jako zakończone. Wszystkie dane zapisywane są w localStorage.",
                photo: todo,
                tech: "HTML, CSS, React."
            },
            {
                name: "Wypożyczalnia samochodów",
                github: "https://github.com/pazikbartek/SportCarRent",
                link: "https://pazikbartek.github.io/SportCarRent/",
                description: "Przykładowa strona internetowa wypożyczalni samochodów sportowych.",
                photo: rentcar,
                tech: "HTML, CSS, JavaScript, Webpack."
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
                            tech={project.tech}
                        />)
                        
                    })}
                </div>

            </div>
        )
    }
}

export default Projects;