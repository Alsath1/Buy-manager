import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";
import React , {useState} from "react";

const INITIAL_costs = [
]

function App() {
  
const [costs , setCosts] = useState(INITIAL_costs);

  const addCostHandler  = (cost) => {
    setCosts(prevCosts =>{
      return [cost, ...prevCosts]
    });
  }


  return ( <div>
    <NewCost onAddCost={addCostHandler} />
   <Costs costs={costs} />
  
</div> 
 );
}

export default App;



