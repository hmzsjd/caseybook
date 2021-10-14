import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
      <h1>CaseyBook</h1>
      <h2>Like Facebook</h2>
      <p>Coming Soon...</p>
    </div>
  );
}

export default App;
