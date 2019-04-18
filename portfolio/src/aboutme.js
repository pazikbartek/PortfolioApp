import React, { Component } from 'react';
import Menu from './menu'

class Aboutme extends Component{
    render(){
        return(
            <div>
                <Menu handleClick={this.props.handleClick}/>
                <div className="aboutme">
                    <h1>Cześć, nazywam się Bartosz Pązik</h1>
                    <div className="description">
                        Studiuję we wrocłaawiu na ue. Szukam pracy/stażu jako front end.
                        Programuje od kilku miesiecy
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;