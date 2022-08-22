import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import UsersList from "./components/UsersList";
import PostUsers from "./components/PostUsers";

function App() {
  const [users, setUsers] = useState();

  const getAllUsers = () => {
    const URL = "https://users-crud1.herokuapp.com/users/";
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <PostUsers getAllUsers={getAllUsers} />
      <h1>USERS</h1>
      <section className="cards__container">
        {users?.map((user) => (
          <UsersList user={user} key={user.id} getAllUsers={getAllUsers} />
        ))}
      </section>
      <button className="btn__create">+</button>
    </div>
  );
}

export default App;
