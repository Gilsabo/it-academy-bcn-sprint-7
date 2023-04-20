import Panel from "../Panel/Panel";
import { useState, useRef } from "react";
import "./Form.css";
import { formContext } from "../helper";
import { useEffect } from "react";

const Form = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [totalPrice, setTotalPrice] = useState();
  const [numberOfLanguages, setNumberOfLanguages] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const [websitePrice, setWebsitePrice] = useState({value: 0 });
  const [seoPrice, setSeoPrice] = useState({ value: 0 });
  const [adsPrice, setAdsPrice] = useState({  value: 0 });
   const [arrayState, setArrayState] = useState([]);
  const [isChecked, setIsChecked] = useState({websitePrice :  false, seoPrice: false, adsPrice: false  })

  const parsedArrayState = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    setArrayState([
      isChecked,
      isClicked,
      websitePrice,
      seoPrice,
      adsPrice,
      numberOfPages,
      numberOfLanguages,
      totalPrice,
    ]);
    
  }, [
    isChecked,
    isClicked,
    websitePrice,
    adsPrice,
    seoPrice,
    totalPrice,
    numberOfLanguages,
    numberOfPages,
  ]);

  useEffect(()=>{
    const data = arrayState
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data)
  },[arrayState])
 

  useEffect(() => {
    
    if (parsedArrayState) {
      setArrayState(parsedArrayState);
      setIsChecked(parsedArrayState[0])
      setIsClicked(parsedArrayState[1]);
      setWebsitePrice(parsedArrayState[2]);
      setSeoPrice(parsedArrayState[3]);
      setAdsPrice(parsedArrayState[4]);
      setNumberOfPages(parsedArrayState[5]);
      setNumberOfLanguages(parsedArrayState[6]);
      setTotalPrice(parsedArrayState[7]);
      console.log(1);
    }
    
    
  }, []);

  const handleCheckBoxWebsite = (e) => {
    setIsClicked(!isClicked)
    updateCheckbox(e, setWebsitePrice);
  };

  const handleCheckBoxSeo = (e) => {
    updateCheckbox(e, setSeoPrice);
  };

  const handleCheckBoxAds = (e) => {
    updateCheckbox(e, setAdsPrice);
  };

  useEffect(() => {
    setTotalPrice(
      websitePrice.value +
        seoPrice.value +
        adsPrice.value +
        numberOfPages * 30 +
        numberOfLanguages * 30
    );
  }, [websitePrice, seoPrice, adsPrice, numberOfLanguages, numberOfPages]);

  const updateCheckbox = (e, setCheckBox) => {
    if (e.target.checked === true) {
      setCheckBox({  value: Number(e.target.value) });
      setIsChecked({...isChecked,[e.target.name]:true})
      
    } else {
      setCheckBox({  value: 0 });
      setIsChecked({...isChecked, [e.target.name]:false})
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userRef.current.value, budgetRef.current.value);
    const budget = [{user:userRef.current.value, budgetname:budgetRef.current.value, info:arrayState }]
    console.log(budget)
  };
  const userRef = useRef();
  const budgetRef = useRef();

  return (
    <formContext.Provider
      value={{
        numberOfPages,
        setNumberOfPages,
        numberOfLanguages,
        setNumberOfLanguages,
      }}
    >
      <form className="form" action="" onSubmit={onSubmit}>
        <h3>Personal information</h3>
        <div className="personal-information">
          <div className="name" style={{ display: "block" }}>
            <label htmlFor="user-name">User's name</label>
            <input type="text" ref={userRef} />
          </div>
          <label htmlFor="budget-name">Budget's name</label>
          <input type="text" ref={budgetRef} />
        </div>
        <div className="services">
          <h3> What service would you like to hire?</h3>
          <input
            checked={isChecked.websitePrice}
            
            onClick={handleCheckBoxWebsite}
            type="checkbox"
            id="websitePrice"
            name="websitePrice"
            value="500"
          />
          <label htmlFor="websitePrice">A website (500 €)</label>
          <div className={isClicked ? "modal-displayed" : "modal-hidden"}>
            <Panel />
          </div>
          <input
            checked={isChecked.seoPrice}
            
            onClick={handleCheckBoxSeo}
            type="checkbox"
            id="seoPrice"
            name="seoPrice"
            value="300"
          />
          <label htmlFor="seoPrice">Seo consultant (300 €)</label>
          <input
            checked={isChecked.adsPrice}
            
            onClick={handleCheckBoxAds}
            type="checkbox"
            id="adsPrice"
            name="adsPrice"
            value="200"
          />
          <label htmlFor="seoPrice">Google ads campaign (200 €)</label>
        </div>
        <p name="price">Price : {totalPrice} € </p>
        <button>Show budget</button>
      </form>
    </formContext.Provider>
  );
};

export default Form;


