import React, { useState } from "react";
import { showState } from "../../../store/showData";
import { useRecoilState } from "recoil";
import Cookies from "js-cookie";
import { access_token } from "../../../store/login";

function TopBar(props) {
  const [dataShow, setDataShow] = useRecoilState(showState);
  const { isShow } = dataShow;
  const handleShow = () => {
    setDataShow({
      isShow: !isShow,
    });
  };

  const [isShowNavUser, setIsShowNavUser] = useState(false);
  const handleNavUser = () => {
    setIsShowNavUser(!isShowNavUser);
  };

  const [accessToken, setAccessToken] = useRecoilState(access_token);

  const handleLogout = () => {
    Cookies.remove("token");
    sessionStorage.removeItem("token");
    setAccessToken("");
  };

  return (
    <div className=" h-[70px] fixed left-0 right-0 top-0 z-10 flex ">
      {isShow === true ? (
        <div className="w-[250px]">
          <a
            href="#"
            className="leading-[70px] text-[20px] text-[#2b3d51] font-[700] flex justify-center "
          >
            <i className="fa-solid fa-user-tie flex self-center mr-[5px]"></i>
            <span className="">ADMIN</span>
          </a>
        </div>
      ) : (
        <div className="w-[70px] flex self-center justify-center">
          <i className="fa-solid fa-user-tie flex self-center "></i>
        </div>
      )}

      <div className="flex justify-between bg-[#2b3d51] flex-1">
        <div className="relative">
          <i
            className="fa-solid fa-bars text-white text-[21px] leading-[70px] px-[25px]"
            onClick={handleShow}
          ></i>
        </div>
        <div className="flex ">
          <div className="relative">
            <img
              className="h-[36px] w-[36px] rounded-[18px] mr-[20px] mt-[16px]"
              src="https://media.defense.gov/2020/Feb/19/2002251686/700/465/0/200219-A-QY194-002.JPG"
              alt=""
              onClick={handleNavUser}
            />
            <div
              className={`absolute top-[70px] right-0 w-[168px] bg-[white] border-[2px] rounded-[4px] ${
                isShowNavUser === false ? "hidden" : ""
              }`}
            >
              <div className="px-[20px] py-[12px] text-[16px]">
                Welcome ! John
              </div>
              <div className="px-[20px] py-[12px]">
                <i className="fa-solid fa-user mr-[5px]"></i>
                <span>Profile</span>
              </div>
              <div className="px-[20px] py-[12px] text-[14.4px]">
                <i className="fa-solid fa-gear mr-[5px]"></i>
                <span>Settings</span>
              </div>
              <div className="px-[20px] py-[12px] text-[14.4px]">
                <i className="fa-solid fa-lock mr-[5px]"></i>
                <span>Lock Screen</span>
              </div>
              <div
                className="px-[20px] py-[12px] text-[14.4px] cursor-pointer"
                onClick={handleLogout}
              >
                <i className="fa-solid fa-power-off mr-[5px]"></i>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
