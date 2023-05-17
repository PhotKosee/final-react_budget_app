import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, dispatch, budget, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const changeBudget = (val) => {
        if (val > 20000) {
            alert("The budget cannot exceed" + currency + "20000");
            val = 20000;
        } else if (totalExpenses > budget) {
            alert("The budget cannot lower than spending");
            val = 20000;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} 
                <input
                    step='10'
                    type='number'
                    id='budget'
                    value={budget}
                    onChange={event=>changeBudget(event.target.value)}
                >
                </input>
            </span>
        </div>
    )
};

export default Budget;