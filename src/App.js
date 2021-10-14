import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Users from './Components/Users'
import HomePage from './Components/HomePage'

import { Route, Link } from 'react-router-dom';
import reactDom from 'react-dom';




const admin = {
  location: {state: "NY"},
  uuid: "12345",
  picture: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
  name: {
    first: "Test User"},
  email: "test@tester.com"
}

function App() {

  const [users, setUsers] = useState([admin]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5")
    .then(res => {
      console.log(res.data.results);
      setUsers([...users, ...res.data.results]);
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


      <Route  path="/users">

      <Users users={users}/>

      {/* 1st User is component import
      2nd User is the way we will reference the prop inside the User component
      3rd User is the data we are pulling from inside this file */}
      </Route>

      <Route exact path="/">
      <HomePage />
      </Route>


  
      
      

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