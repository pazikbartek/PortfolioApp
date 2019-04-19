import React, { Component } from 'react';

class Project extends Component{
    render(){
        return(
            <div className="project">
                <div className="prphoto">
                    <img src={this.props.photo} alt="project"/>
                    <div className="link">
                        <a href={this.props.link} rel="noopener noreferrer" target="_blank"><div> Zobacz na stronie:  <i className="fas fa-globe"></i></div></a>
                        <a href={this.props.github} rel="noopener noreferrer" target="_blank"><div>Zobacz na github: <i className="fab fa-github"></i></div></a>
                    </div>
                </div>
                <div className="prdesc">
                    <h2>{this.props.name}</h2>
                    <h4>{this.props.description}</h4>
                    <h4><i className="fas fa-tools"></i> {this.props.tech}</h4>
                </div>
            </div>
        );
    }
}

export default Project;