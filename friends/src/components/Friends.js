import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";
const Friends = () => {
  const [friends, setFriends] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => setFriends(res.data))
      .catch(err => console.log(err.response));
  }, [friends]);

  return (
    <div>
      <AddFriend />
      {friends &&
        friends.map(friend => {
          return (
            <div>
              <h1>{friend.name}</h1>
              <h1>{friend.age}</h1>
              <h1>{friend.email}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default Friends;
