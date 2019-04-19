import React, { Component } from 'react';

class Project extends Component{
    render(){
        return(
            <div className="project">
                <div className="prphoto">
                    <img src={this.props.photo} />
                    <div className="link">
                        <div>{this.props.github}</div>
                        <div>{this.props.link}</div>
                    </div>
                </div>
                <div className="prdesc">
                    <h2>{this.props.name}</h2>
                    <h4>{this.props.description}</h4>
                </div>
            </div>
        );
    }
}

export default Project;