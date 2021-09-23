import React, { Component } from 'react'
import Card from './cardUI';
import img1 from '../images/adult.jpg';
import img2 from '../images/kitchen.jpg';
import img3 from '../images/alone.jpg';
import img4 from '../images/music.jpg';
import img5 from '../images/c1.jpg';
import img6 from '../images/c.jpg';
import img7 from '../images/c2.jpg';
import img8 from '../images/a3.jpg';

class Cards extends Component{
    render() {
        return(
            <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3">
                        <Card imgsrc={img1} title='Adventure' btn={'/Api1'}/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img2} title='Cooking'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img3} title='Playground'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img4} title='Dancing' btn={'/team'} />
                    </div>
                </div> 
            </div>
            
            <div className="container-fluid d-flex justify-content-center">
                <div className="row" style={{marginBottom:"50px"}}>
                    <div className="col-md-3">
                        <Card imgsrc={img5} title='Music'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img6} title='Courses'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img7} title='Swiming'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img8} title='Driving'/>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Cards;