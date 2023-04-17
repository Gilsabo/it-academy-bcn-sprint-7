import Form from "../Form/Form";
import Search from "../Search/Search"
import { NavLink } from "react-router-dom";

const Calculation = () => {
    return ( 
        <>
        <Form />
        <Search />
        <NavLink to="/">Go to calculate introduction</NavLink>
        </>
     );
}
 
export default Calculation;