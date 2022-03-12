import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "./redux.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
