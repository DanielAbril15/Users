import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import UsersList from "./components/UsersList";
import FormUsers from "./components/FormUsers";

function App() {
  const [users, setUsers] = useState();
  const [updateInfo, setUpdateInfo] = useState();
  const [isFormOpen, setIsFormOpen] = useState();

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

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };
  const handleCloseForm = () => setIsFormOpen(false);

  return (
    <div className="App">
      <section className={isFormOpen ? "form__container" : "form-none"}>
        <FormUsers
          getAllUsers={getAllUsers}
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
          handleCloseForm={handleCloseForm}
        />
      </section>
      <h1>USERS</h1>
      <section className="cards__container">
        {users?.map((user) => (
          <UsersList
            user={user}
            key={user.id}
            getAllUsers={getAllUsers}
            setUpdateInfo={setUpdateInfo}
            handleOpenForm={handleOpenForm}
          />
        ))}
      </section>
      <button onClick={handleOpenForm} className="btn__create">
        +
      </button>
      <button onClick={handleOpenForm} className="btn__create-desktop">
        Create new user
      </button>
    </div>
  );
}

export default App;
