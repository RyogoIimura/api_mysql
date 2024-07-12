import React, { useState, useEffect } from "react";
import './App.css';
import Axios from "axios";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/user").then((response) => {
      setUserList(response.data);
    });
  }, []);

  console.log(userList);

  return (
    <div className="App">
      <ul>
        {userList.map((val, index) => {
          return (
            <li key={index}>
              <p>{val.id}</p>
              <p>{val.name}</p>
              <p>{val.address}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;