import { useState, createContext, useEffect } from "react";
import Form from "./Components/Form";
import Items from "./Components/Items";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";

export const userContext = createContext();

const initialMemo = () => {
  const data = localStorage.getItem("data");
  if(data) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
};

function App() {
  const [memo, setMemo] = useState(initialMemo());
  const [input, setInput] = useState("");
  const [idNumber, setIdNumber] = useState(-1);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(memo));
  }, [memo]);

  return (
    <div className="App p-3">
      <div className="container p-2 bg-light rounded-2 overflow-auto">
        <h4>یادداشت‌های من</h4>
        <userContext.Provider value={[memo, setMemo]}>
          <Form
            input={input} setInput={setInput}
            idNumber={idNumber} setIdNumber={setIdNumber}
          />
          <Items
            input={input} setInput={setInput}
            idNumber={idNumber} setIdNumber={setIdNumber}
          />
        </userContext.Provider>
      </div>
    </div>
  );
}

export default App;
