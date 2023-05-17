import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Remaining from './Remaining';

const Budget = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [budget, setBudget] = useState('');
    const changeBudget = (val) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }
    const submitEvent = (event) => {
        if (budget >= 20000 || event.target.value > 20000) {
            alert("The budget cannot exceed" + currency + "20000");
            setBudget(20000);
        } else {
            setBudget(event.target.value);
        }
        Remaining();
        return;
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={event=>changeBudget(event.target.value)}
                >
                </input>
            </span>
        </div>
    )
};

export default Budget;