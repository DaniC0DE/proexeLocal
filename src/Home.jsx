import { Link } from "react-router-dom";
import "./home.css";
import Card from "./Card";

export default function Home() {
  return (
    <div className="app-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-container">
        <div className="header">
          <h1 className="list-title">User list</h1>
          <Link className="add-btn" to="/form" state={{ edit: false }}>
            Add new
          </Link>
        </div>
        <div>
          <div className="titles">
            <span>Id</span>
            <span>Name</span>
            <span>Username</span>
            <span>Email</span>
            <span>City</span>
            <span> Edit </span>
            <span> Delete </span>
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
