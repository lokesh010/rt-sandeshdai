import React, { useState, useEffect } from 'react';
import './App.css';
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setUserList, userList } from './redux/slice/user'
import axios from 'axios';

function App() {

  const dispatch = useDispatch();

  // selectors
  const user = useSelector(userList);

  useEffect(() => {
    (async function () {

      const getUserList = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch(setUserList(getUserList.data));

    })()

  }, [])

  return (
    <div className="App">
      <ul>
        {user.length ? user.map(userObj =>
          <li key={userObj.id}>{userObj.name}</li>
        ) : null}
      </ul>
    </div>
  );
}

export default App;

/**

CallStack 1 thread
----------

IIFE()
()=>{}
useEffect()
App()
GLobal Execution


Event Loop
----------

Callback queue Browser API
-------------

    await axios.get('https://jsonplaceholder.typicode.com/users');
 */


/**
  lokesh =>  1 thread
  sandesh => 2 thread
 */