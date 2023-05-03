import { StyledPanel, Pages } from "./styledPanel";
import InfoLanguages from "../Info/InfoLanguages";
import InfoPages from "../Info/InfoPages";
import {  formContext } from "../helper";
import { useContext } from "react";

const Panel = () => {

  const {numberOfPages, setNumberOfPages} =useContext(formContext)
  const {numberOfLanguages, setNumberOfLanguages} =useContext(formContext)
  console.log(typeof number)
  
const decreasePage= (amount)=>{
  setNumberOfPages(currentCount =>{
    console.log(currentCount + amount, typeof amount, typeof currentCount)
    return Number(currentCount) - amount
  })
}

   
const increasePage =(amount)=>{
  setNumberOfPages(currentCount =>{
    console.log(currentCount + amount, typeof amount, typeof currentCount)
    return Number(currentCount) + amount
  })
}


const decreaseLanguage= (amount)=>{
  setNumberOfLanguages(currentCount =>{
    console.log(currentCount - amount)
    return Number(currentCount) - amount
  })
}

const increaseLanguage =(amount)=>{
  setNumberOfLanguages(currentCount =>{
    
    return Number(currentCount) + amount
  })
}



  return (
    <>
      <StyledPanel >
        <Pages>
          <label htmlFor="pages">Number of pages</label>
          <button type="button" onClick={()=>decreasePage(1)}>-</button>
          <input id="pages"min={0} onChange={(e)=>setNumberOfPages((e.target.value))} value ={numberOfPages} type="number" />
          <button type="button" onClick={()=>increasePage(1)}>+</button>
          <InfoPages />
        </Pages>

        <Pages>
          <label htmlFor="languages">Number of languages</label>
          <button type="button" onClick={()=>decreaseLanguage(1)}>-</button>
          <input value={numberOfLanguages} onChange={(e)=>setNumberOfLanguages(e.target.value)} type="number" />
          <button type="button" onClick={()=>increaseLanguage(1)} >+</button>
          <InfoLanguages />
        </Pages>
      </StyledPanel>
      <div></div>
    </>
  );
};

export default Panel;
