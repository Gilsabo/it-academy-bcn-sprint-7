import { useState, useEffect } from "react";
//import { useSearchParams } from "react-router-dom"

const useCheckboxes = () => {
  const [websitePrice, setWebsitePrice] = useState({ value: 0 });
  const [seoPrice, setSeoPrice] = useState({ value: 0 });
  const [adsPrice, setAdsPrice] = useState({ value: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [totalPrice, setTotalPrice] = useState();
  const [numberOfLanguages, setNumberOfLanguages] = useState(0)
  
  const [numberOfPages, setNumberOfPages] = useState(0);

  const [arrayState, setArrayState] = useState([]);
  const [isChecked, setIsChecked] = useState({
    websitePrice: false,
    seoPrice: false,
    adsPrice: false,
  });

  
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

  useEffect(() => {
    const data = arrayState;
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
  }, [arrayState]);

  useEffect(() => {
    if (parsedArrayState) {
      setArrayState(parsedArrayState);
      setIsChecked(parsedArrayState[0]);
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
      setCheckBox({ value: Number(e.target.value) });
      setIsChecked({ ...isChecked, [e.target.name]: true });
    } else {
      setCheckBox({ value: 0 });
      setIsChecked({ ...isChecked, [e.target.name]: false });
    }
  };

  return {
    handleCheckBoxAds,
    handleCheckBoxSeo,
    handleCheckBoxWebsite,
    arrayState,
    isChecked,
    isClicked,
    numberOfPages,
  
    totalPrice,
    setNumberOfLanguages,
    setNumberOfPages,
    numberOfLanguages
  };
};

export default useCheckboxes;
