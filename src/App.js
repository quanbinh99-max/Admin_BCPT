import "./App.css";
import Admin from "./components/Admin/Admin";
import Form from "./components/Form/Form";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { access_token } from "./store/login";
import Cookies from "js-cookie";

function App() {
  const [accessToken, setAccessToken] = useRecoilState(access_token);
  setAccessToken(Cookies.get("token") || "");

  return (
    <div className="wrapper ">
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin"
            element={
              accessToken !== "" ? <Admin></Admin> : <Navigate to="/dangnhap" />
            }
          />
          <Route path="/dangnhap" element={<Form />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
