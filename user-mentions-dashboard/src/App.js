import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.js';
import UserGenerator from './components/UserGenerator';
import LastCreatedUsers from './components/LastCreatedUsers';
import MentionsTextBox from './components/MentionsTextBox';
import { Context } from './Context.jsx';

const serverURL = 'https://ai-users.onrender.com';

export async function getLastCreatedUsers() {
  const result = await fetch(`${serverURL}/users`)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err.message);
    });
  return result;
}

export async function searchUsers(term) {
  const result = await fetch(`${serverURL}/users?searchTerm=${term}`)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err.message);
    });
  return result;
}

export async function generateUsers() {
  const result = await fetch(`${serverURL}/generate/users`)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err.message);
    });
  return result;
}

function App() {
  const [users, setUsers] = useState(null);

  return (
    <div className="app">
      <Context.Provider value={{ users, setUsers }}>
        <Header />
        <UserGenerator />
        <LastCreatedUsers />
        <MentionsTextBox />
      </Context.Provider>
    </div>
  );
}

export default App;
