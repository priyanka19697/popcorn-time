import "antd/dist/antd.css";
import AppRouter from './AppRouter';
import { UserContext } from './context/UserContext'
import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [loggedInUsr, setLoggedInUsr] = useState('');
  const [authToken, setAuthToken] = useState('')
  const [loggedInUserId, setLoggedInUserId] = useState('')

  return (
    <div className="App">
       <UserContext.Provider value={
        {
          loggedInUser: loggedInUsr || localStorage.getItem('loggedInUser') ,
          setLoggedInUser: setLoggedInUsr,
          authToken: authToken || localStorage.getItem('authToken'),
          setAuthToken: setAuthToken,
          loggedInUserId: loggedInUserId || localStorage.getItem('loggedInUser'),
          setLoggedInUserId: setLoggedInUserId
          }
          }>
        <AppRouter/>
        </UserContext.Provider>
    </div>

  );
};

export default App;