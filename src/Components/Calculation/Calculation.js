import Form from "../Form/Form";
import Search from "../Search/Search"
import { NavLink } from "react-router-dom";
import { useState } from "react";


const Calculation = () => {
    const [arrayBudgetSheet, setArrayBudgetSheet] = useState([])
   
   
    
    
        
    
    
    return ( 
        <>
        <Form arrayBudgetSheet={arrayBudgetSheet} setArrayBudgetSheet={setArrayBudgetSheet}/>
        <Search arrayBudgetSheet={arrayBudgetSheet} setArrayBudgetSheet={setArrayBudgetSheet}  />
        <NavLink to="/">Go to calculate introduction</NavLink>
        </>
     );
}
 
export default Calculation;