import "./App.css";
import Admin from "./components/Admin/Admin";
import Form from "./components/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper ">
      <BrowserRouter>
        <Routes>
          <Route path="/dangnhap" element={<Form />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
