import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
      
    return (
        <div className='alert alert-secondary' style={{backgroundColor:'lightgreen'}}>
            <label style={{backgroundColor: 'lightgreen', color:'white'}}>
                Currency  
                <select name="currency" id="currency" onChange={event=>changeCurrency(event.target.value)}
                    style={{backgroundColor:'lightgreen', color:'white', outlineStyle:'none', outline:'none', outlineColor:'lightgreen', outlineOffset:'none'}}
                >
                    <option style={{color:'black'}} value="$">($ Dollar)</option>
                    <option style={{color:'black'}} value="£">(£ Pound)</option>
                    <option style={{color:'black'}} value="€">(€ Euro)</option>
                    <option style={{color:'black'}} value="₹">(₹ Ruppee)</option>
                </select>	
            </label>
        </div>
    );
};

export default Currency;