import { useState } from 'react';
import Alert from './Components/Alert.js';
import Navbar from './Components/Navbar.js'
import TextForm from './Components/TextForm.js';
export default function App() {
    const [alert , setAlert] = useState(null);
    const showAlert = (message , type) => {
      setAlert({
        msg: message,
        type: type,
      });
    }
    return (
      <>
        <Navbar name = {"TextUtils"}/>
        <Alert alert = {alert}/>
        <TextForm showAlert = {showAlert}/>
      </>
    );
}



