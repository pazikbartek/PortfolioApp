import React, { Component } from 'react';
import Menu from './menu'

class Contact extends Component{
    render(){
        return(
            <div>
                <Menu handleClick={this.props.handleClick}/>
                <div className="data">
                    <span><i class="fas fa-phone"></i> 795-474-575 </span>
                    <span><i class="fas fa-envelope"></i> bartosz.pazik98@gmail.com</span>
                    <span><i class="fas fa-map-marker-alt"></i> Wrocław, Polska </span>
                </div>
                <div className="smedia">
                    <a href="https://github.com/pazikbartek" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://pl.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i> </a>
                </div>
            </div>
        )
    }
}

export default Contact;