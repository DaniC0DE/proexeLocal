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

const URL_BASE =
  "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

export function addUserAPI(user) {
  return (dispatch) => {
    fetch(URL_BASE, {
      method: "POST",
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        username: user.username,
        address: {
          city: user.address.city,
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        dispatch(addUser(user));
      });
  };
}

export function editUserAPI(user) {
  return (dispatch) => {
    fetch(`${URL_BASE}/${user.id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        username: user.username,
        address: {
          city: user.address.city,
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        dispatch(editUser(user));
      });
  };
}

export function deleteUserAPI(user) {
  let { id } = user;
  return (dispatch) => {
    fetch(`${URL_BASE}/${user.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        dispatch(deleteUser(id));
      });
  };
}
