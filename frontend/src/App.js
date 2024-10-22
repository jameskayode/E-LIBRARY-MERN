import React,{useState} from 'react'
import './App.css';
import Login from './Login/Login';
import AdminHome from './AdminHome/AdminHome';
import UserHome from './UserHome/UserHome';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {

  const [user,setUser]=useState(''); 
  const [isUser,setIsUser]=useState(localStorage.getItem("email")||'')

  const [admin,setAdmin]=useState('');

  return (
    <div className="App">

      {
      !user?<Login setUser={setUser} />:<><Router>{admin?<AdminHome user={user} />:<UserHome user={user}/>}</Router></>
      }
    </div>
  );
}

export default App;
