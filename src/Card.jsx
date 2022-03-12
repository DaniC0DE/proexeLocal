import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./card.css";

export default function Card() {
  const users = useSelector((state) => {
    return state.users;
  });
  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => {
          return (
            <div key={user.id} className="card-container">
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.username}</div>
              <div>{user.email}</div>
              <div>{user.address.city}</div>
              <div>
                <Link className="edit-btn" to="/form">
                  Edit
                </Link>
              </div>
              <div>
                <button className="delete-btn">delete</button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="nousers-container">
          <h1 className="nousers-text">There are no users in the database</h1>
        </div>
      )}
    </div>
  );
}
