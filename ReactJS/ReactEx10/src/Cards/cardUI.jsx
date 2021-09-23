import React from 'react'
import './card-style.css';

const Card = props => {
    return (
        <>
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={props.imgsrc} alt="Image1" className="card-img-top" height="200px"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat unde culpa magni possimus. Molestias, dicta necessitatibus, quam beatae provident nemo doloremque quod est perferendis aliquid cupiditate eius ea, quae voluptate!
                    </p>
                    <a href={props.btn} className="btn btn-outline-success">See More</a>
                </div> 
            </div>  
        </>
    )
}

export default Card