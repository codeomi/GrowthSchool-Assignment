import "./App.css";
import Form from "./components/Admin/Form";
import Login from "./components/Admin/Login";
import Home from "./components/Dashboard/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/admin/createpost" element={<Form />} />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
