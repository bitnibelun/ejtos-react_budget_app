import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, currency, dispatch } = useContext(AppContext);

    const setInputBudget = (value) => {

        if(value > 20000) {
            alert("The budget cannot exceed 20,000");
            return;
        }
        if( value < (budget - remaining)) {
            alert("The budget cannot be less than the expenses");
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
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='budget-value'
                value={budget}
                step={10}
                style={{ marginLeft: '0rem' , size: 10, width: "150px"}}
                onChange={(event) => setInputBudget(event.target.value)}>
                </input>
        </div>
    );
};
export default Budget;