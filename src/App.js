import { useState } from "react";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";



function App() {
  const [mode, setMode] = useState('light');
  const [toggleText, setToggleText] = useState('Dark');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setToggleText('Light');
      showAlert("Dark Mode Enable", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setToggleText('Dark');
      showAlert("Light Mode Enable", "success")
    }
  }
  return (
    <>

      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleText={toggleText} />
      <Alert alert={alert} />
      <div className="container my-5">

        <TextForm headline="Enter The Text To Analyze Below" mode={mode} showAlert={showAlert} />


      </div>

    </>
  );
}

export default App;
