import { useState } from 'react';
import Alert from './Components/Alert.js';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';
import About from './Components/About.js';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';

export default function App() {    
    const [alert , setAlert] = useState(null);
    const showAlert = (message , type) => {
      setAlert({
        msg: message,
        type: type,
      });
    }
    const router = createBrowserRouter([
      {
          path: "/",
          element: <TextForm showAlert={showAlert} />
      },
      {
          path: "/about",
          element: <About />
      }
    ]);
    return (
      <>
        <Navbar />
        <Alert alert = {alert}/>
        <RouterProvider router = {router}></RouterProvider>        
      </>
    );
}



