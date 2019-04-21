import React, { Component } from 'react';
import Menu from './menu'
import {WOW} from 'wowjs';

class Aboutme extends Component{
    wow = new WOW(  {  live: false})
    componentDidMount(){
        this.wow.init();
    }

    render(){
        return(
            <div>
                <Menu handleClick={this.props.handleClick}/>
                <div className="aboutme">
                    <h1 className="wow fadeInDown" data-wow-duration="1.5s">Cześć, nazywam się Bartosz Pązik.</h1>
                    <div className=" wow fadeInUp description"data-wow-duration="1.5s">
                        Mieszkam we Wrocławiu, gdzie studiuję Informatykę w biznesie na Uniwersytecie Ekonomicznym. Tworzenie stron i aplikacji
                        internetowych to moja pasja. Obecnie poszukuję pierwszego stażu/pracy na stanowisku Junior Front-End Developer.
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;