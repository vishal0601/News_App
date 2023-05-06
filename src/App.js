import './App.css';
 
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as 
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  // const removeClasses = () => {
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-secondary');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  // }
  const toggleMode = () => {
    // removeClasses();
    // document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(12 15 46)';
      showAlert('Dark Mode', 'Success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode', 'Success');
    }
  }

  return (
    <>
     
      <Router>
        <Navbar title="TextUtils" About="AboutTextutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          <Switch>
            <Route path="/about">
              <About mode={mode}/>
            </Route>
            <Route path="/">
              <TextForm mode={mode} showAlert={showAlert} heading="Enter the text to Analyze" />
            </Route>
          </Switch>
          
        </div>
      </Router>
       

    </>
  );
}

export default App;
