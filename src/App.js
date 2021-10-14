import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Users from './Components/Users';

import { Route, Link } from 'react-router-dom';
import reactDom from 'react-dom';




const admin = {
  location: "NY",
  uiud: "12345",
  picture: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
  name: "Test User",
  email: "test@tester.com"
}

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5")
    .then(res => {
      console.log(res.data.results);
    })
    .catch(err => console.error(err));
  }, [])





  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Friends Page</Link>
          
          
        </nav>
      </header>


      <Route path="/users">

      <Users />
      </Route>
      <h1>CaseyBook</h1>
      <h2>Like Facebook</h2>
      
      

    </div>
  );
}

export default App;


/**
 * 
 * API DATA:
 * user.location -> state
 * user.username.uuid
 * user.picture.medium
 * user.name -> user.first + user.last
 * user.email
 * 
 * user.posts -> stretch
 * likes -> stretch
 * 
 */