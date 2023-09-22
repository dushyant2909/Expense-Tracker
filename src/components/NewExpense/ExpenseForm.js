import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    let [enteredTitle,setNewTitle] = useState('');
    let [enteredDate,setNewDate] = useState('');
    let [enteredAmount,setNewAmount] = useState('');

    const changeTitle = (event) =>{
        setNewTitle(event.target.value);
    }
    const changeAmount = (event) =>{
        setNewAmount(event.target.value);
    }
    const changeDate = (event) =>{
        
        // let nd = new Date(event.target.value);//Converted string date to date format
        setNewDate(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault(); //Prevents form to submit
        const expenseData = {
            expenseDate : enteredDate,
            expenseTitle : enteredTitle,
            amount : enteredAmount
        };
        props.onSaveExpenseData(expenseData);
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div>
                    <label>Title : </label>
                    <input type = "text" value={ enteredTitle } onChange={changeTitle} /> 
                </div>
                <div>
                    <label>Date : </label>
                    <input type = "date" value={ enteredDate} onChange={changeDate} /> 
                </div>
                < div >
                    <label>Amount : </label>
                    <input type = "number" value={ enteredAmount } min = {0.01} step={0.01} onChange={changeAmount} /> 
                </div>
                <div>
                    <button className='add-expense-btn' type='submit'>Add Expense Item</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;