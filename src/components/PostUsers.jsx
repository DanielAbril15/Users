import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const PostUsers = ({ getAllUsers }) => {
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

  const submit = (data) => {
    createUsers(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>New User</h2>
      <section>
        <div>
          <label htmlFor="name"></label>
          <input
            {...register("first_name")}
            type="text"
            placeholder="Name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="lastName"></label>
          <input
            {...register("last_name")}
            type="text"
            placeholder="Last Name"
            id="lastName"
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="pass"></label>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            id="pass"
          />
        </div>
        <div>
          <label htmlFor="birthday"></label>
          <input
            {...register("birthday")}
            type="date"
            placeholder="Birthday"
            id="birthday"
          />
        </div>
      </section>
      <button>Create new user</button>
      <img src="../../public/imgs/x.png" alt="close icon" />
    </form>
  );
};

export default PostUsers;
