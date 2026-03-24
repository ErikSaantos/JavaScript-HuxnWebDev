import React from 'react'

import { useState } from "react"

const App = () => {
  // =-=-=- COUNTER =-=-=-
  // const counter = useState("right here"); // Initial value as first parameter

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // =-=-=- FRIENDS =-=-=-
  const [friends, setFriends] = useState(["Kluska", "Botana", "Takematsu"]);

  const addFriend = () => setFriends([...friends, "Candido"]);
  const removeFriend = () => setFriends(friends.filter((f) => f != "Botana")) // Will show everyone who's not equal Botana
  const updateFriend = () => setFriends(friends.map((f) => f === "Takematsu" ? "Rafael" : f))
  

  return <section>
    {/* COUNTER */}
    <h1>{count}</h1>
    <button onClick={increment}> + </button>
    <button onClick={decrement}> - </button>


    {/* FRIENDS */}
    <ul>
      { friends.map((f) => (
        <li key={f}> {f} </li>
      )) }
      
    </ul>
    <button onClick={addFriend}>Add Friend</button>
    <button onClick={removeFriend}>Remove Friend</button>
    <button onClick={updateFriend}>Update Friend</button>
  </section>
}

export default App;


// basic counter
// updating arrays
// updating object
// updating array of objects
// sharing state
// sharing arrow function into a state