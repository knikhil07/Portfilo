import { useState } from "react";
import "./App.css";
import AppContext from "./context/AppContext";
import Home from "./Home";
import Openai from "./Openai/openai";
import run from "./Openai/OpenaiIntegrated";

function App() {
  const [isNavMenu, setNavMenu] = useState(false);
  const [isChat, setChat] = useState(false);
  const [promt, setPromt] = useState("");
  const [fckpromt, setfckPromt] = useState("");
  const [resultData, setResultData] = useState(null);
  const [isResult, setRes] = useState(false);
  const [isload, setload] = useState(!true);
  const onPromt = async (promt) => {
    document.title="Nikhil : portfilo : my AI"
    console.log(promt);
    setload(true);

    let result = "";

    result = await run(promt);
    setRes(true);
    let r = result.split("**");
    let r1 = "";
    for (let i = 0; i < r.length; i++) {
      if (i === 0 || i % 2 === 0) {
        r1 += r[i];
      } else {
        r1 += "<br></br><b >" + r[i] + "&nbsp;</b>";
      }
    }
    let r2 = r1.split("*").join("");
    setload(!true); 
    setResultData(r2);
    
    setfckPromt(promt);
    setPromt("");
  };
  const values = {
    isNavMenu,
    setNavMenu,
    isChat,
    setChat,
    promt,
    setPromt,
    resultData,
    setResultData,
    isResult,
    onPromt,
    fckpromt,
    isload,
    setload,
  };

  return (
    <>
      <AppContext.Provider value={values}>
        <Home />
        {isChat ? <Openai /> : ""}
      </AppContext.Provider>
    </>
  );
}

export default App;
