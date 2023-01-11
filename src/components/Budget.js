import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);

    const setInputBudget = (value) => {

        if(value > 20000) {
            alert("The value cannot exceed 20,000");
            return;
        }
        else{
            dispatch({
                type: 'SET_BUDGET',
                payload: value
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input
                required='required'
                type='number'
                id='budget-value'
                value={budget}
                style={{ marginLeft: '2rem' , size: 10}}
                onChange={(event) => setInputBudget(event.target.value)}>
                </input>
        </div>
    );
};

export default Budget;