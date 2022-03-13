import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./redux";
import "./home.css";
import "./form.css";

export default function Form() {
  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    email: "",
    username: "",
    address: { city: "" },
  });
  const [error, setError] = useState(true);

  const users = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (newUser.name.length > 0 && newUser.email.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
  }, [newUser.name, newUser.email]);

  const handleForm = (e) => {
    if (e.target.name === "city") {
      setNewUser({
        ...newUser,
        address: { [e.target.name]: e.target.value },
      });
    } else {
      setNewUser({
        ...newUser,
        id: users.length + 1,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    dispatch(addUser(newUser));
    navigate("/");
  };

  function classNameGenerator(condition) {
    let classNames = ["input"];
    if (condition) {
      classNames.push("red");
    } else {
      classNames.push("green");
    }
    return classNames.join(" ");
  }

  return (
    <div className="app-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-container">
        <div className="header">
          <h1 className="list-title">Form</h1>
        </div>
        <div className="form-container">
          <div>
            <p>Name</p>
            <span className="input-container">
              <input
                className={classNameGenerator(error)}
                name="name"
                onChange={handleForm}
                value={newUser.name}
                type="text"
                placeholder="please enter your name"
              />
              <span>*Required</span>
            </span>
          </div>
          <div>
            <p>Email</p>
            <span className="input-container">
              <input
                className={classNameGenerator(error)}
                name="email"
                onChange={handleForm}
                value={newUser.email}
                type="text"
                placeholder="please enter your email"
              />
              <span>*Required</span>
            </span>
          </div>
          <div>
            <p>Username</p>
            <span className="input-container">
              <input
                className="input"
                name="username"
                onChange={handleForm}
                value={newUser.username}
                type="text"
                placeholder="please enter your username"
              />
            </span>
          </div>
          <div>
            <p>City</p>
            <span className="input-container">
              <input
                className="input"
                name="city"
                onChange={handleForm}
                value={newUser.address.city}
                type="text"
                placeholder="please enter your city"
              />
            </span>
          </div>
        </div>
        <div className="btn-form-container">
          <Link className="cancelform-btn" to="/">
            Cancel
          </Link>
          <button
            className="submit-btn"
            disabled={error}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
