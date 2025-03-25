import { createContext, useState, useContext } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "./globalloader.css"; 

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && (
        <div className="loading-overlay">
          <PulseLoader size={15} color="red" />
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};


export const useLoading = () => useContext(LoadingContext);
