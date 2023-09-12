import '../../style/CostForm.css'

import React,{ useState } from 'react';

const CostForm = (props) => {


    const [isInputNameValid , SetIsInputNameValid] = useState(true)
    const [isInputAmountValid , SetIsInputAmountValid] = useState(true)
    const [isInputDateValid , SetIsInputDateValid] = useState(true)

    const [InputName, setInputName] = useState('');
    const [InputAmount, setInputAmount] = useState('');
    const [InputDate, setInputDate] = useState('');

    // const [userUnput , setUserInput] = useState({
    //     inputName: '',
    //     inputAmount:'',
    //     inputDate: '',
    // })


    const nameChangeHandler = (event) => {
        if(event.target.value.trim().length > 0 ){
            setInputName(event.target.value)
            SetIsInputNameValid(true);
        }
        // setUserInput({...userUnput,
        //     inputName: event.target.value,
        // })
        
    }
    const amountChangeHandler = (event) => {
        if(event.target.value >=0 ){
            setInputAmount(event.target.value)
            SetIsInputAmountValid(true);
        }
        // setUserInput({...userUnput,
        //     inputAmount: event.target.value,
        // })
        
    }
    const dateChangeHandler = (event) => {
        if(event.target.value !== 0 ){
            setInputDate(event.target.value)
            SetIsInputDateValid(true)
        }
        // setUserInput({...userUnput,
        //     inputDate: event.target.value,
        // })
       
    }
const SubmitHandler = (event) => {
event.preventDefault();

const costData = {
    description: InputName,
    amount: InputAmount,
    date: new Date(InputDate),
}

if(costData.description.trim().length === 0){
    SetIsInputNameValid(false);
    return;
}
if(costData.amount.trim().length === 0){
    SetIsInputAmountValid(false);
    return;
}
if(costData.amount.trim().length === 0){
    SetIsInputDateValid(false);
    return;
}

props.onSaveCostData(costData);
setInputAmount('');
setInputDate('');
setInputName('');

}


return <form onSubmit={SubmitHandler}>
    <div className="new-cost__controls">
        <div className= "new-cost__control">
            <label style={{"color": !isInputNameValid ? 'red' : '#fefae1' }}>Name</label>
            <input style={{borderColor: !isInputNameValid ? 'red' : '#8284FA' ,
             color: '#F2F2F2',
             background: !isInputNameValid ? 'salmon' : '#2c2c2c'}} type="text" value={InputName} onChange={nameChangeHandler}></input>
        </div>
    </div>
    <div className="new-cost__controls">
        <div className="new-cost__control">
            <label style={{"color": !isInputAmountValid ? 'red' : '#fefae1' }} >Sum</label>
            <input  style={{borderColor: !isInputAmountValid ? 'red' : '#8284FA' ,
            color: '#F2F2F2',
             background: !isInputAmountValid ? 'salmon' : '#2c2c2c'}} value={InputAmount} onChange={amountChangeHandler} type="number" ></input>
        </div>
    </div>
    <div className="new-cost__controls">
        <div className="new-cost__control">
            <label style={{"color": !isInputDateValid ? 'red' : '#fefae1' }} >Date</label>
            <input style={{borderColor: !isInputDateValid ? 'red' : '#8284FA' ,
             color: '#F2F2F2',
             background: !isInputDateValid ? 'salmon' : '#2c2c2c'}} onChange={dateChangeHandler} type="date" min='2000-01-01' step='2024-12-31'></input>
        </div>
        
    </div>
    <div className="new-cost__actions">
            <button  value={InputDate} type="submit">Add expense</button>
            <button type='button' onClick={props.onCancel}>Cancel</button>
        </div>
</form>
}


export default CostForm