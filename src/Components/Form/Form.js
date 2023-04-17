import Panel from "../Panel/Panel";
import { useState, useRef } from "react";
import "./Form.css";
import { useEffect } from "react";


const Form = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [websitePrice, setWebsitePrice] = useState({webSitePrice:false, value: 0});
  const [seoPrice, setSeoPrice] = useState({seoPrice:false, value: 0});
  const [adsPrice, setAdsPrice] = useState({adsPrice:false, value: 0});
  

 

  const handleCheckBoxWebsite = (e) => {
    setIsClicked(!isClicked)
    updateCheckbox(e, websitePrice, setWebsitePrice);
    console.log(websitePrice);
  };

  const handleCheckBoxSeo = (e) => {
    updateCheckbox(e, seoPrice, setSeoPrice);
  };

  const handleCheckBoxAds = (e) => {
    updateCheckbox(e, adsPrice, setAdsPrice);
  };

  
  
  const priceDom = websitePrice.value + seoPrice.value + adsPrice.value
  useEffect(() => {
    console.log(websitePrice, seoPrice, adsPrice);
  }, [websitePrice, seoPrice, adsPrice, priceDom]);

  
  const updateCheckbox = (e, checkbox, setCheckBox) => {
    if (e.target.checked === false) {
      setCheckBox({[e.target.name]: false, value: 0 });
    } else {
      setCheckBox({[e.target.name]: true, value: Number(e.target.value)  });
    }
  };

  


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userRef.current.value, budgetRef.current.value);
  };
  const userRef = useRef();
  const budgetRef = useRef();

  return (
    <>
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
            checked={websitePrice.webSitePrice}
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
        <p name="price">Price : {priceDom} € </p>
        <button>Show budget</button>
      </form>
      
    </>
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
