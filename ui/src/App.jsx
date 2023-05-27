import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div className="content"> */}
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/signup" Component={Register} />
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
