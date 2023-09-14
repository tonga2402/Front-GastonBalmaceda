import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import "./App.css";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import NotFound from "./Routes/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dentist/:id" element={<Detail />} />
        <Route path="favs" element={<Favs />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
