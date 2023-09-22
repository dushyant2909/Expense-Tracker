import React from 'react';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    
    return (
        <div>
        {
            props.items.map(
            expense => (
                <ExpenseItem 
                    id = {expense.id}
                    date = {expense.expenseDate}
                    title = {expense.expenseTitle}
                    price = {expense.amount}
                    deleteHandler = {props.delExp}
                />
                )
            )
        }
        </div>
    )
}

export default Expenses;