import React, { Component } from 'react';
import Menu from './menu'
import html from './photos/html.png'
import css from './photos/css.png';
import js from './photos/js.png'
import webpack from './photos/webpack.png';
import react from './photos/react.png';
import git from './photos/git.png';


class Skills extends Component{
    render(){
        return(
            <div>
                <Menu handleClick={this.props.handleClick}/>
                <div className="technologies">
                    <div className="techname">
                        <h3>HTML</h3>
                        <img src={html} />
                    </div>
                    <div className="techname">
                        <h3>CSS</h3>
                        <img src={css} />
                    </div>
                    <div className="techname">
                        <h3>JavaScript</h3>
                        <img src={js} />
                    </div>
                    <div className="techname">
                        <h3>React</h3>
                        <img src={react} />
                    </div>
                    <div className="techname">
                        <h3>GIT</h3>
                        <img src={git} />
                    </div>
                    <div className="techname">
                        <h3>Webpack</h3>
                        <img src={webpack} />
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Skills;