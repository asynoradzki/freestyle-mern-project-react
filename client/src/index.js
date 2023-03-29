import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserContext from './authHelpers/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppWrapper = () => {
  const [loggedUser, setLoggedUser] = useState(null)


  return (
    <UserContext.Provider value={{ loggedUser: loggedUser, setLoggedUser: setLoggedUser }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
     </UserContext.Provider>
    )
}

root.render(<AppWrapper />);

