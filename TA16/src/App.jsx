import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Error from "./pages/Error";
import Protected from "./navigation/Protected";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Protected />}>
          <Route element={<Admin />} path="/admin" exact />
        </Route>
        <Route element={<Contact />} path="/contact" exact />
        <Route element={<About />} path="/about" exact />
        <Route element={<Home />} path="/" exact />
        <Route element={<Error />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
