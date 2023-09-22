import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import bin from "../../Images/bin.png"

const ExpenseItem = (props) => {
    console.log(props);
    const deleteHandler =() =>{
        // console.log(props.id);
        props.deleteHandler(props.id);
    }

    return (
        <Card>
            <div className='expense-item__date'><ExpenseDate date = {props.date} /></div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.price} ₹</div>
                
            </div>
            <div className='deleteclick'><button onClick={deleteHandler}><img src = {bin} alt='bin' style={{width:"25px",height:"30px"}}></img></button></div>
        </Card>
    )
}

export default ExpenseItem;