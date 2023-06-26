import React, { useState } from 'react';
import AddUser from './components/User/AddUser'
import UsersList from './components/User/UsersLists';

function App() {

  const [usersList, setUsersList] = useState([]); 

  const addUserOnList = (username, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: username, age: userAge, id: Math.random().toString() }]
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserOnList} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
