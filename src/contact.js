import React, { Component } from 'react';
import Menu from './menu'

class Contact extends Component{
    render(){
        return(
            <div>
                <Menu handleClick={this.props.handleClick}/>
                <div className="data">
                    <span><i className="fas fa-phone"></i> 795-474-575 </span>
                    <span><i className="fas fa-envelope"></i> bartosz.pazik98@gmail.com</span>
                    <span><i className="fas fa-map-marker-alt"></i> Wrocław, Polska </span>
                </div>
                <div className="smedia">
                    <a href="https://github.com/pazikbartek" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/bartosz-p%C4%85zik-85b31a185/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i> </a>
                </div>
            </div>
        )
    }
}

export default Contact;