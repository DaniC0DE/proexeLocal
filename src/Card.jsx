import "./card.css";
import { useSelector } from "react-redux";

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
                <button className="edit-btn">Edit</button>
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
