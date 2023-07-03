import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import ErrorPage from './components/ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type })
    setTimeout(() => { setAlert(null) }, 2000)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.background = isDarkMode ? 'white' : 'grey';
    showAlert("Mode is Activated", "success")
  };

  const TextForms = createBrowserRouter([
    {
      path: "/",
      element: <TextForm showAlert={showAlert} heading="Enter the TexT to Analyze Below" isDarkMode={isDarkMode} />,
      errorElement: <ErrorPage />,

    }, {
      path: "/about",
      element: <About />, errorElement: <ErrorPage />,

    }
  ]);
  // const Abouts = createBrowserRouter([
  //   {

  //     errorElement: <ErrorPage />,

  //   },
  // ]);

  return (
    <>
      <Navbar title="Serendipia" isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Alert alert={alert} />
      <div className={`container my-3 ${isDarkMode ? 'dark-mode' : ''}`}>
        <RouterProvider router={TextForms} />


      </div>
    </>
  );
}

export default App;
