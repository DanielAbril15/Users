import axios from "axios";
import React from "react";
import "./css/usersList.css";

const UsersList = ({ user, getAllUsers, setUpdateInfo, handleOpenForm }) => {
  const deleteUser = () => {
    const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`;
    axios
      .delete(URL)
      .then((res) => getAllUsers())
      .catch((err) => console.log(err));
  };
  const handleUpdateInfo = () => {
    handleOpenForm();
    setUpdateInfo(user);
  };

  return (
    <article className="user__card">
      <p className="user__name">
        {user["first_name"]} {user["last_name"]}
      </p>

      <div className="user__info">
        <div className="info">
          <p className="info__title">EMAIL</p>
          <p>{user.email}</p>
        </div>
        <div className="info">
          <p className="info__title">BIRTHDAY</p>
          <p>{user.birthday}</p>
        </div>
      </div>

      <div className="user__btns">
        <button onClick={deleteUser} className="btn btn__trash">
          <img src="/imgs/trash.png" alt="trash button" />
        </button>
        <button onClick={handleUpdateInfo} className="btn btn__edit">
          <img src="/imgs/edit.png" alt="edit button" />
        </button>
      </div>
    </article>
  );
};

export default UsersList;
