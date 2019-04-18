import React, { Component } from 'react';
import Menu from './menu'

class Projects extends Component{
    render(){
        return(
            <div>
                <Menu handleClick={this.props.handleClick}/>
                <div>
                    Moje projekty: sdas
                </div>
            </div>
        )
    }
}

export default Projects;