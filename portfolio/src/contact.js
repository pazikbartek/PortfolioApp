import React, { Component } from 'react';
import Menu from './menu'

class Contact extends Component{
    render(){
        return(
            <div>
                <Menu handleClick={this.props.handleClick}/>
                <div>
                    Telefon: 231231321
                </div>
            </div>
        )
    }
}

export default Contact;