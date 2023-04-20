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

  const [websitePrice, setWebsitePrice] = useState({websitePrice: false ,value: 0 });
  const [seoPrice, setSeoPrice] = useState({ seoPrice: false, value: 0 });
  const [adsPrice, setAdsPrice] = useState({ adsPrice: false, value: 0 });
  const parsedArrayState = JSON.parse(localStorage.getItem("data"));
  console.log(parsedArrayState)
  const [arrayState, setArrayState] = useState([]);

  useEffect(() => {

    setArrayState([
      isClicked,
      websitePrice,
      seoPrice,
      adsPrice,
      numberOfPages,
      numberOfLanguages,
      totalPrice,
    ]);
    
  }, [
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
      setIsClicked(parsedArrayState[0]);
      setWebsitePrice(parsedArrayState[1]);
      setSeoPrice(parsedArrayState[2]);
      setAdsPrice(parsedArrayState[3]);
      setNumberOfPages(parsedArrayState[4]);
      setNumberOfLanguages(parsedArrayState[5]);
      setTotalPrice(parsedArrayState[6]);
      console.log(1);
    }
    
    
  }, []);

  const handleCheckBoxWebsite = (e) => {
    setIsClicked(!isClicked);
    updateCheckbox(e, setWebsitePrice);
    console.log(websitePrice);
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
      setCheckBox({ [e.target.name]: true, value: Number(e.target.value) });
      
    } else {
      setCheckBox({ [e.target.name]: false, value: 0 });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userRef.current.value, budgetRef.current.value);
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
            checked={websitePrice.websitePrice}
            onChange={handleCheckBoxWebsite}
            type="checkbox"
            id="website"
            name="website"
            value="500"
          />
          <label htmlFor="website">A website (500 €)</label>
          <div className={isClicked ? "modal-displayed" : "modal-hidden"}>
            <Panel />
          </div>
          <input
            checked={seoPrice.seoPrice}
            onChange={handleCheckBoxSeo}
            type="checkbox"
            id="seo"
            name="seo"
            value="300"
          />
          <label htmlFor="seo">Seo consultant (300 €)</label>
          <input
            checked={adsPrice.adsPrice}
            onChange={handleCheckBoxAds}
            type="checkbox"
            id="adds"
            name="adds"
            value="200"
          />
          <label htmlFor="seo">Google ads campaign (200 €)</label>
        </div>
        <p name="price">Price : {totalPrice} € </p>
        <button>Show budget</button>
      </form>
    </formContext.Provider>
  );
};

export default Form;

/*const updateCheckbox = (e, checkbox, setCheckBox) => {
    setCheckBox({
      
      [e.target.name]: !checkbox[e.target.name], // toggle the state of the checkbox
      value: checkbox[e.target.name] ? Number(e.target.value) : 0  // update the checkbox value based on its state
      
    });
    console.log(checkbox[e.target.name])
  }*/
