import React, {useEffect, useState} from 'react';
import './styles/app.css';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./context";

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth') === 'true') {
      setIsAuth(true);
    }
    setLoading(false);
  }, [])

  return (

      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading
      }}>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
  )
}

export default App;
