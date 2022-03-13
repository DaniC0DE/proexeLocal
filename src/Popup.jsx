import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { deleteUserAPI } from "./redux";
import "./popup.css";

export default function PopupDelete(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (user) => {
    dispatch(deleteUserAPI(user));
  };
  return (
    <Popup
      className="popup-background"
      trigger={<button className="delete-btn"> Delete </button>}
      modal
    >
      {(close) => (
        <div className="modal-container">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="popup-text">
            Are you sure you want to delete this user?
          </div>
          <div className="popup-btn-container">
            <button
              className="popup-btn"
              onClick={() => {
                close();
                navigate("/");
              }}
            >
              Cancel
            </button>
            <button
              className="popup-btn"
              onClick={() => {
                handleDelete(props.user);
                close();
                navigate("/");
              }}
            >
              Yes
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
