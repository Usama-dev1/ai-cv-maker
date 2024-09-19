import { cvContext } from "../context/cvContext.jsx";
import { useContext } from "react";
const useCvHook = () => {
  const context = useContext(cvContext);
  if (!context) {
    throw new Error("useCvContext must be used within a CvProvider");
  }
  return context;
};

export {useCvHook };
