import { WelcomeForm } from "../welcome-form";
import { ChromeStorage } from "../../../utilities/chrome-storage";
import { useEffect, useState } from "react";

export const App = () => {
  const chromeStorage = new ChromeStorage();

  const [state, setSate] = useState({
    
  });

  useEffect(() => {
    
  }, []);

  const handelSuccessFormSubmission = async (inputValue: string) => {
    await chromeStorage.setApiKey(inputValue);
  };

  return (
    <WelcomeForm handelSuccessFormSubmission={handelSuccessFormSubmission} />
  );
};
