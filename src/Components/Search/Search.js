import { useEffect } from "react";
import { useState } from "react";

const Search = ({ arrayBudgetSheet, setArrayBudgetSheet}) => {
  const [searchValue, setSearchValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  
 
  

  const handleAphabeticOrder = () => {
    const sortAlphabeticOrder = [...storedSheets].sort((a, b) =>
      a.budgetname.localeCompare(b.budgetname, { sensitivity: "base" })
    );
    console.log(arrayBudgetSheet);
    setStoredSheets(sortAlphabeticOrder);
  };

  const handleDateOrder = () => {
    const sortArrayOrder = [...storedSheets].sort(
      (a, b) =>a.date - b.date
    );
    console.log(arrayBudgetSheet, storedSheets );
    setStoredSheets(sortArrayOrder);
    
  };

  const handleSearchBar = (e) => {
    setSearchValue(e.target.value);
    if (searchValue.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const dataStored = JSON.parse(localStorage.getItem("stored"));
  const [storedSheets, setStoredSheets] =useState([])

console.log(dataStored)

  useEffect(()=>{
setStoredSheets(arrayBudgetSheet)
console.log(storedSheets)
console.log(arrayBudgetSheet)

  },[arrayBudgetSheet])
 
  useEffect(() => {
    
    
    localStorage.setItem("stored", JSON.stringify(storedSheets));
    console.log(storedSheets)

    
  }, [arrayBudgetSheet,storedSheets]);
  

  

  useEffect(()=>{
   
    if(dataStored){
      setStoredSheets(dataStored)
      console.log(storedSheets)
    }

  },[])
 
 

  return (
    <>
      <div className="search-buttons">
        <button onClick={handleAphabeticOrder}>Alphabetic order</button>
        <button onClick={handleDateOrder}>Date order</button>
        <button>Reset</button>
      </div>
      <div className="search-bar">
        <label htmlFor="search">Search</label>
        <input onChange={handleSearchBar} type="text" />
      </div>
      <div className="budget-sheet-box">
        {isEmpty &&
          storedSheets &&
          storedSheets.map((budget, index) => (
            <div className="sheet-container">
              <div key={index} className="user-sheet">
                <div>{budget.user}</div>
                <div>{budget.budgetname}</div>
                <div className="date">{ budget.date.toLocaleString()}</div>
                
              </div>
            </div>
          ))}
        {!isEmpty &&
          storedSheets
            .filter((budget) => budget.budgetname.includes(searchValue))
            .map((budget, index) => (
              <div className="sheet-container">
                <div key={index} className="user-sheet">
                  <div>{budget.user}</div>
                  <div>{budget.budgetname}</div>
                  <div className="date">{budget.date.toLocaleString()}</div>
                  <div className="div"></div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default Search;
