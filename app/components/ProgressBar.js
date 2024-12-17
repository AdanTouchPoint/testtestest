import {React,useEffect,useState} from "react";
import "./progressBar.css";

const ProgressBar = ({ leads, mainData }) => {
  const [progress, setProgress] = useState(0);
  const progressStyle = {
    width:`${(50 + progress) / 10}%`,
  };
  
  useEffect(() => {
      const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= leads) {
          clearInterval(interval);
          return leads;
        }
        return prevProgress + 100 /10;
      });
    }, 5);
    return () => clearInterval(interval);
  }, [leads]);

  return (
    <div className="wrap-bar">
      <h2>{mainData.progressBarTitle}</h2>    
      <div className="progress-container">
        <div className="progress-bar" style={progressStyle}>
          <div className="progress-label">
            <span>{leads}</span>
          </div>
        </div>
      </div>
      <h4> {mainData.progressBarSubtitle} </h4>
    </div>
  );
};
export default ProgressBar;