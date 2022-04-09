import React, { useEffect } from "react";
import "./App.css";
import Admin from "./components/Admin/Admin";
import Form from "./components/Form/Form";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { access_token } from "./store/login";
import Cookies from "js-cookie";

function App() {
  const [accessToken, setAccessToken] = useRecoilState(access_token);

  useEffect(() => {
    setAccessToken(Cookies.get("token") || sessionStorage.getItem("token"));
  }, []);

  return (
    <div className="wrapper ">
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin"
            element={
              accessToken ? <Admin></Admin> : <Navigate to="/dangnhap" />
            }
          />
          <Route
            path="/dangnhap"
            element={accessToken ? <Navigate to="/admin" /> : <Form></Form>}
          />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
