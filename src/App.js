import Expense from './components/Expenses/Expense'
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import uuid from 'react-uuid'; //To get unique id


let Dummy_Expense = [
    {
        id:'e1',
        expenseDate : new Date(2023,2,15),
        expenseTitle : "School Fees",
        amount : 30000
    },
    {
        id:'e2',
        expenseDate : new Date(2023,1,16),
        expenseTitle : "Mobile EMI",
        amount : 5000
    },
    {
        id:'e3',
        expenseDate : new Date(2022,8,12),
        expenseTitle : "Car loan",
        amount : 20000
    },
    {
        id:'e4',
        expenseDate : new Date(2021,1,16),
        expenseTitle : "T.V",
        amount : 15000
    }
];

const App = () => {
    const [expenses,setExpenses] = useState(Dummy_Expense);

    const addExpenseHandler = (expense) => {
        const temp = {
            id:uuid(),
            ...expense
        }
        const updatedExpense = [temp, ...expenses];
        setExpenses(updatedExpense);
    };

    const deleteExpenseHandler = (expId) =>{
        console.log(expId);
        const copy_of_expense = expenses.filter((expense)=>{
            return expense.id !== expId;
          });
          setExpenses(copy_of_expense);
    };

    return (
        <div>
            <NewExpense onAddExpense = { addExpenseHandler } />
        <Expense items = {expenses} delExp = {deleteExpenseHandler} />
        </div>
        )
}

export default App;