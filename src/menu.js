import React, {Component} from 'react';

class Menu extends Component{
    render(){

        return(
            <div className="menu">
                <div className="button" onClick={this.props.handleClick} id="Aboutme">O mnie</div>
                <div className="button" onClick={this.props.handleClick} id="Skills">Umiejętności</div>
                <div className="button" onClick={this.props.handleClick} id="Projects">Projekty</div>
                <div className="button" onClick={this.props.handleClick} id="Contact">Kontakt</div>
            </div>
        )
    }
}

export default Menu;