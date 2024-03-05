import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react'
import About from './Components/About';
import {
  BrowserRouter as Router, Routes, Route,  Link
} from "react-router-dom";

function App() {
  const [mode, setmode]=useState('light')
  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    
    setAlert({message:message,
      type:type})
      setTimeout(()=>{
        setAlert(null);
      },1500)
    
      }
  const enableGre=()=> {
      document.body.style.backgroundColor='green';
      showAlert("Green mode has been set","success");
    }
    const enableRed=()=> {
      document.body.style.backgroundColor='Red';
      showAlert("Red mode has been set","success");
    }
    const enableYellow=()=> {
      document.body.style.backgroundColor='Yellow';
      showAlert("Yellow mode has been set","success");
    }
    const enableBlue=()=> {
      document.body.style.backgroundColor='Blue';
      showAlert("Blue mode has been set","success");
    }
  const toggleMode=()=>{
        if(mode === "light")
        {
          setmode('dark');
          document.body.style.backgroundColor='grey';
          showAlert("Dark mode has been set","success");
          }
        else
        {
          setmode('light');
          document.body.style.backgroundColor='white';
          showAlert("Light mode has been set","success");

        }
  }
  
  return (
    <>
     <NavBar title='TextUtils' abouttitle='About US' mode={mode} toggleMode={toggleMode} enableGre={enableGre} enableRed={enableRed} enableBlue={enableBlue} enableYellow={enableYellow}/>
      <Alert alert={alert}/>
    <div className='container my-3'>
      
    <Router>
       <Routes>
       <Route path="/TextForm" element={<TextForm heading="Enter the text to analysis" mode={mode}></TextForm>} />
       <Route path="/about" element={<About/>} />
        </Routes></Router></div>   
     
     
      
</>
  );
}

export default App;
