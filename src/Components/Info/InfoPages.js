import { useState } from "react";
import "./Info.css";

const InfoPages = () => {
  const [isPopped, setIsPopped] = useState(false);
  const popModal = () => {
    if (isPopped === false) {
      setIsPopped(true);
    } else {
      setIsPopped(false);
    }
  };

  const closeModal=(e)=>{
    
    setIsPopped(false)
  }

  const preventClosingModal = (e) =>{
    e.stopPropagation()
  }
  return (
    <>
      <div className="info-box">
        <div className="info" onClick={popModal}>
          i
        </div>
      </div>
      <div className={isPopped ? "displayed-modal" : "hidden-modal"} onClick={closeModal}>
        <div className ="text-modal" onClick={preventClosingModal} >
          {" "}
          In this space you have to input the number of pages that your website
          will have
        </div>
      </div>
    </>
  );
};

export default InfoPages;
