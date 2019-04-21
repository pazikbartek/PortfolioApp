import React, { Component } from 'react';
import Menu from './menu'
import html from './photos/html.png'
import css from './photos/css.png';
import js from './photos/js.png'
import webpack from './photos/webpack.png';
import react from './photos/react.png';
import git from './photos/git.png';
import {WOW} from 'wowjs';


class Skills extends Component{
    wow = new WOW(  {  live: false})
    componentDidMount(){
        this.wow.init();
    }
    render(){

        return(
            <div>
                <Menu handleClick={this.props.handleClick}/>
                <div className="technologies">
                    <div className="techname">
                        <h3 className="wow zoomIn" data-wow-duration="1.2s">HTML</h3>
                        <img src={html} className=""alt="HTML"/>
                    </div>
                    <div className="techname">
                        <h3 className="wow zoomIn" data-wow-duration="1.2s" >CSS</h3>
                        <img src={css} alt="CSS" />
                    </div>
                    <div className="techname">
                        <h3 className="wow zoomIn" data-wow-duration="1.2s">JavaScript</h3>
                        <img src={js} alt="JavaScript"/>
                    </div>
                    <div className="techname">
                        <h3 className="wow zoomIn" data-wow-duration="1.2s">React</h3>
                        <img src={react} alt="React" />
                    </div>
                    <div className="techname">
                        <h3 className="wow zoomIn" data-wow-duration="1.2s" >GIT</h3>
                        <img src={git} alt="GIT"/>
                    </div>
                    <div className="techname">
                        <h3 className="wow zoomIn" data-wow-duration="1.2s">Webpack</h3>
                        <img src={webpack} alt="Webpack"/>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Skills;