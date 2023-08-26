import React, { useEffect, useState } from "react";

import "./style.css";

function App() {
  const [displayValue, setDisplayValue] = useState("");


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown= (event)=>{
    
     let key = event.key;
    
     console.log(key);
       if(key==='0'||key==='1'||key==='2'||key==='3'||key==='4'||key==='5'||key==='6'||key==='7'||key==='8'||key==='9'||key==='.'||key==='+'||key==='-'||key==='*'||key==='/'||key==='='||key==='Enter'||key==='Delete'||key==='Backspace'){
        if(key==='Delete'||key==='Backspace') {handleDelete(); return;}

        if(key==='='||key==='Enter') {handleEqual(); return}
        else {handleButtonClick(key)}
       }
  }

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
   // console.log(displayValue);
  };

  const handleDelete = () => {
    setDisplayValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleClear = () => {
    setDisplayValue("");
  };

  const handleEqual = () => {
    
    try {
      // Safely evaluate the expression
      setDisplayValue((prev)=> eval(prev).toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  return (
    <div className="container">
      
  

      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" name="display" value={displayValue} readOnly />
          </div>
          <div>
            <input
              type="button"
              value="AC"
              onClick={handleClear}
              className="operator"
            />
            <input
              type="button"
              value="DE"
              onClick={handleDelete}
              className="operator"
            />
            <input
              type="button"
              value="."
              onClick={() => handleButtonClick(".")}
              className="operator"
            />
            <input
              type="button"
              value="/"
              onClick={() => handleButtonClick("/")}
              className="operator"
            />
          </div>

          <div>
            <input
              type="button"
              value="7"
              onClick={() => handleButtonClick("7")}
            />
            <input
              type="button"
              value="8"
              onClick={() => handleButtonClick("8")}
            />
            <input
              type="button"
              value="9"
              onClick={() => handleButtonClick("9")}
            />
            <input
              type="button"
              value="*"
              onClick={() => handleButtonClick("*")}
              className="operator"
            />
          </div>

          <div>
            <input
              type="button"
              value="4"
              onClick={() => handleButtonClick("4")}
            />
            <input
              type="button"
              value="5"
              onClick={() => handleButtonClick("5")}
            />
            <input
              type="button"
              value="6"
              onClick={() => handleButtonClick("6")}
            />
            <input
              type="button"
              value="-"
              onClick={() => handleButtonClick("-")}
              className="operator"
            />
          </div>

          <div>
            <input
              type="button"
              value="1"
              onClick={() => handleButtonClick("1")}
            />
            <input
              type="button"
              value="2"
              onClick={() => handleButtonClick("2")}
            />
            <input
              type="button"
              value="3"
              onClick={() => handleButtonClick("3")}
            />
            <input
              type="button"
              value="+"
              onClick={() => handleButtonClick("+")}
              className="operator"
            />
          </div>

        
          <div>
            <input
              type="button"
              value="00"
              onClick={() => handleButtonClick("00")}
            />
            <input
              type="button"
              value="0"
              onClick={() => handleButtonClick("0")}
            />
            <input
              type="button"
              value="="
              onClick={handleEqual}
              className="equal operator"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
