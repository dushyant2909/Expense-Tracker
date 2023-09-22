import React from "react-dom";
import './Card.css';

let Card = (props)=>{
    return <div className='expense-item'>{props.children}</div>
}

export default Card;