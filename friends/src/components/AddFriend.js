import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = props => {
  const [usersInfo, setUsersInfo] = useState({
    name: "",
    age: "",
    email: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", usersInfo)
      .then(res => props.setFriends(res.data))
      .catch(err => console.log(err));
  };

  const handleChanges = e => {
    let name = e.target.name;

    setUsersInfo({ ...usersInfo, [name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit} className="forms">
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder=""
        value={usersInfo.name}
        onChange={handleChanges}
      />
      <label>Age</label>
      <input
        type="text"
        name="age"
        placeholder=" "
        value={usersInfo.age}
        onChange={handleChanges}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder=""
        value={usersInfo.email}
        onChange={handleChanges}
      />
      <div>
        <button type="submit">Add Friend</button>
      </div>
    </form>
  );
};
export default AddFriend;
