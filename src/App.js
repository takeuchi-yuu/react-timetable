import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import Timetable from "./pages/Timetable";
import Classes from "./pages/Classes";
import ClassEdit from "./pages/ClassEdit";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/timetable" element={<Timetable />}></Route>
        <Route path="/classes" element={<Classes />}></Route>
        <Route path="/class-edit" element={<ClassEdit />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, World!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter initialValue={0} />
      </header>
    </div>
  );
}

export default App;
