import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props: any) => {

    const [showForm, setShowForm] = React.useState(false);
    const saveExpenseDataHandler = (enteredExpenseData: any) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const showFormHandler = () => {
        setShowForm(showForm ? false : true);
    }

    return (
        <div className='new-expense'>
            {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} changeFormStatus={showFormHandler}/>}
        </div>
    );
};

export default NewExpense;
