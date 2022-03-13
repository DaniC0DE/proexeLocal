const initialState = {
  users: [],
};

// Actions
const LOAD = "LOAD";
const ADD = "ADD";
const EDIT = "EDIT";
const DELETE = "DELETE";

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case LOAD:
      return { ...state, users: action.users };
    case ADD:
      return { ...state, users: [...state.users, action.userToAdd] };
    case EDIT:
      const editList = state.users.map((user) => {
        if (user.id === action.userToEdit.id) {
          return action.userToEdit;
        } else {
          return user;
        }
      });
      return { ...state, users: editList };
    case DELETE:
      const newList = state.users.filter((user) => {
        if (user.id !== action.userToDelete.id) {
          return user;
        }
      });
      return { ...state, users: newList };
    default:
      return state;
  }
}

// Action Creators
export function loadingUsers(users) {
  return { type: LOAD, users };
}

export function addUser(userToAdd) {
  return { type: ADD, userToAdd };
}

export function editUser(userToEdit) {
  return { type: EDIT, userToEdit };
}

export function deleteUser(userToDelete) {
  return { type: DELETE, userToDelete };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getUsers() {
  return (dispatch) => {
    fetch(
      "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
    )
      .then((response) => {
        return response.json();
      })
      .then((users) => dispatch(loadingUsers(users)));
  };
}
