import CostForm from "./CostForm"
import '../../style/NewCost.css'
import React , {useState} from "react"

const NewCost =(props) => {

const [isFormVisible , setIsFormVisible ] =  useState(false);

    const SaveCostDataHandler = (InputCostData) => {

        const costData = {
            ...InputCostData,
            id: Math.random().toString(),
        }
        setIsFormVisible(false); 


        props.onAddCost(costData);
    }


    const inputCostDataHendler = () => {
        setIsFormVisible(true)
    }
    const cancelCostHandler =() =>{
        setIsFormVisible(false)
    }
return (<div className="new-cost">
    {!isFormVisible && <button onClick={inputCostDataHendler}>Add new expense</button>}
   {isFormVisible && <CostForm onSaveCostData={SaveCostDataHandler} onCancel={cancelCostHandler} />}   
</div>)


}

export default NewCost