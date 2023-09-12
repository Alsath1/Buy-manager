import '../../style/Costitem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';
import React,{ useState } from 'react';

function Costitem (props) {
   const [description, _] = useState(props.description);


    return (
        <li>
    <Card className='cost-item'>
        <CostDate date={props.date} />
        <div className='cost-item__description'>
            <h2>{props.description}</h2></div>
        <div className='cost-item__price'>${props.amount}</div>
        
    </Card>
    </li>)
}

export default Costitem;