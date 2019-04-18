import React, { Component } from 'react';
import Menu from './menu'

class Skills extends Component{
    render(){
        return(
            <div>
                <Menu handleClick={this.props.handleClick}/>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Skills;