import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { loginApi } from "../../api/loginApi";
import Cookies from "js-cookie";
import { access_token } from "../../store/login";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

function Form(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useRecoilState(access_token);
  const [rememberPassword, setRememberPassword] = useState(false);

  const onSubmit = (data) => {
    const getToken = async () => {
      try {
        const response = await loginApi.getToken(data);
        rememberPassword === true
          ? Cookies.set("token", response.content.token)
          : sessionStorage.setItem("token", response.content.token);
        setAccessToken(response.content.token);
        navigate("/admin");
      } catch (error) {
        alert("Sai tên đăng nhập hoặc mật khẩu");
      }
    };
    getToken();
  };

  const [dataLogin, setDataLogin] = useState({});

  return (
    <div className="h-[100vh] flex justify-center bg-[#64B0F2] relative">
      <div className="absolute border-[8px] border-[white] w-[436px] bg-[white] rounded-[8px] mt-[90px]">
        <div className="border-[5px] border-[#64b0f2] p-[20px] rounded-[8px]">
          <div className="mt-[20px] flex justify-center">
            <i className="fa-solid fa-user-tie text-[24px] text-[#1BB99A] flex self-center mr-[5px]"></i>
            <span className="text-[24px] text-[#1BB99A] font-[700]">
              WICHART
            </span>
          </div>
          <div className="p-[20px] mt-[10px] flex flex-col">
            <span className="text-[16px] text-[#6c757d] font-[500] mb-[8px] text-center">
              ADMIN SIGN IN
            </span>
            <span className="text-[14.4px] text-[#212529] font-[400]">
              Bạn phải đăng nhập để sử dụng chức năng này
            </span>
            <form className="mt-[20px]" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="py-[6px] px-[12px] w-[100%] border-[2px] rounded-[4px] mb-[16px]"
                type="text"
                placeholder="Username"
                // name="username
                defaultValue=""
                {...register("username")}
              />
              <input
                className="py-[6px] px-[12px] w-[100%] border-[2px] rounded-[4px] mb-[16px]"
                type="password"
                placeholder="Password"
                // name="password"
                defaultValue=""
                {...register("password")}
              />
              <div className="mb-[16px]">
                <input
                  type="checkbox"
                  onChange={() => setRememberPassword(!rememberPassword)}
                />
                <span className="pl-[5px] text-[#212529] text-[14.4px] font-[500]">
                  Ghi nhớ thông tin đăng nhập
                </span>
              </div>
              <button
                className="w-[100%] px-[12px] py-[6px] bg-[#1BB99A] text-white rounded-[4px] text-[16px] font-[400]"
                onClick={handleSubmit}
              >
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
