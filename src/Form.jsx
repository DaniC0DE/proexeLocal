import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import "./form.css";

export default function Form() {
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
              <input type="text" placeholder="please enter your name" />
              <span>*Required</span>
            </span>
          </div>
          <div>
            <p>Email</p>
            <span className="input-container">
              <input type="text" placeholder="please enter your email" />
              <span>*Required</span>
            </span>
          </div>
          <div>
            <p>Username</p>
            <span className="input-container">
              <input
                className="input"
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
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}
