import { NavLink } from "react-router-dom";
const Introduction = () => {
  return (
    <>
      <h2>Hi, there</h2>
      <h3>
        this an app to help you calculate the budget you need to build your
        dreams with us
      </h3>
      <NavLink to="/calculation">Go to calculate budget</NavLink>
    </>
  );
};

export default Introduction;
