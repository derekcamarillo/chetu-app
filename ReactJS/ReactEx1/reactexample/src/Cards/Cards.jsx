import React, { Component } from 'react'
import Card from './cardUI';
import img1 from '../images/adult.jpg';
import img2 from '../images/kitchen.jpg';
import img3 from '../images/alone.jpg';
class Cards extends Component{
    render() {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title='Adventure'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title='Cooking'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title='Playground'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;