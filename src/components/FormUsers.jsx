import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./css/formUsers.css";

const FormUsers = ({
  getAllUsers,
  updateInfo,
  setUpdateInfo,
  handleCloseForm,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
  };

  const createUsers = (data) => {
    const URL = "https://users-crud1.herokuapp.com/users/";
    axios
      .post(URL, data)
      .then((res) => {
        getAllUsers();
      })
      .catch((err) => console.log(err));
    reset(defaultValues);
  };
  useEffect(() => {
    if (updateInfo) {
      getAllUsers();
      reset(updateInfo);
    }
  }, [updateInfo]);

  const updateUser = (data) => {
    const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`;
    axios
      .patch(URL, data)
      .then((res) => getAllUsers())
      .catch((err) => console.log(err));
  };

  const submit = (data) => {
    if (updateInfo) {
      updateUser(data);
      setUpdateInfo();
    } else {
      createUsers(data);
    }
    reset(defaultValues);
    handleCloseForm();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="form">
      <h2>{updateInfo ? "Update User" : "Create User"}</h2>
      <section className="form__inputs">
        <div className="form__item">
          <label htmlFor="name">Name</label>
          <input
            {...register("first_name")}
            type="text"
            placeholder="Name"
            id="name"
          />
        </div>
        <div className="form__item">
          <label htmlFor="lastName">Last Name</label>
          <input
            {...register("last_name")}
            type="text"
            placeholder="Last Name"
            id="lastName"
          />
        </div>
        <div className="form__item">
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            id="email"
          />
        </div>
        <div className="form__item">
          <label htmlFor="pass">Password</label>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            id="pass"
          />
        </div>
        <div className="form__item">
          <label htmlFor="birthday">Birthday</label>
          <input
            {...register("birthday")}
            type="date"
            placeholder="Birthday"
            id="birthday"
          />
        </div>
      </section>
      <button>{updateInfo ? "Update" : "Create"}</button>

      <img
        onClick={handleCloseForm}
        className="btn-close"
        src="../../public/imgs/x.png"
        alt="close icon"
      />
    </form>
  );
};

export default FormUsers;
