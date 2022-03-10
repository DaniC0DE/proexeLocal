import "./App.css";
import Home from "./Home.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "./redux.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
