import React, { useContext } from 'react';
import { TiDelete, TiMinus, TiPlus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><span style={{backgroundColor:'green', borderRadius:'50%', position:'absolute', height:'1.5em', width:'1.5em'}}><TiPlus size='1.5em' color='white' onClick={event => increaseAllocation(props.name)}></TiPlus></span></td>
            <td><span style={{backgroundColor:'red', borderRadius:'50%', position:'absolute', height:'1.5em', width:'1.5em'}}><TiMinus size='1.5em' color='white' onClick={event => decreaseAllocation(props.name)}></TiMinus></span></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;