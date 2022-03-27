import React, { useState } from "react";
import "./index.css";
import { showState } from "../../../store/showData";
import { useRecoilState } from "recoil";

function SideMenu(props) {
  const [dataShow, setDataShow] = useRecoilState(showState);
  const { isShow } = dataShow;
  const [isShowUser, setIsShowUser] = useState(true);
  const handleShow = () => {
    setIsShowUser(!isShowUser);
  };
  return (
    <div>
      {isShow === true ? (
        <div className="absolute w-[250px] top-[70px] ">
          <ul className="fixed w-[250px]">
            <li className="text-[13px] px-[12px] py-[20px] leading-[1] tracking-[0.035em] text-[#818a91]">
              Trình quản lí
            </li>
            <li>
              <div className="flex justify-between px-[20px] py-[14px]">
                <div>
                  <i className="fa-brands fa-dashcube ml-[3px] mr-[20px] text-[18px] leading-[17px] text-center font-[500] text-[#2B3D51CC]"></i>
                  <span className="text-[#2B3D51CC] font-[500]">DashBoard</span>
                </div>
                <div className="h-[20px] w-[20px] bg-[#007bff] flex rounded-[10px] leading-[20px]">
                  <span className="m-auto text-white text-[11.4px] font-[700]">
                    1
                  </span>
                </div>
              </div>
            </li>
            <li className="px-[20px] py-[14px]">
              <a href="#" className="" onClick={handleShow}>
                <i className="fa-solid fa-book ml-[3px]  mr-[20px] text-[18px] leading-[17px] text-center text-[#2B3D51CC]"></i>
                <span className="text-[#2B3D51CC] font-[500]">Quản lí</span>
              </a>
              <ul className={`${isShowUser === true ? "" : "hidden"}`}>
                <li className="py-[10px] pl-[40px] pr-[20px] text-[14.4px] text-[#2B3D51CC]">
                  User
                </li>
                <li className="py-[10px] pl-[40px] pr-[20px] text-[14.4px] text-[#2B3D51CC]">
                  Báo Cáo Phân Tích
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ) : (
        <div className="absolute w-[70px] top-[70px]">
          <ul className="nav">
            <li className="px-[20px] py-[15px] relative">
              <i className="fa-brands fa-dashcube ml-[3px] mr-[20px] text-[18px] leading-[17px] text-center font-[500] text-[#2B3D51CC]"></i>
              <ul className="subnav_dashboard hidden">
                <span className="dashboard absolute text-[16px] top-[0px] left-[70px] bg-[#64b0f2] py-[15px] pl-[4px] pr-[100px] text-[white] font-[500] ">
                  DashBoard
                </span>
              </ul>
            </li>
            <li className="quanLi px-[20px] py-[15px] relative">
              <i className="fa-solid fa-book ml-[3px]  mr-[20px] text-[18px] leading-[17px] text-center text-[#2B3D51CC]"></i>
              <ul className="subnav_quanli absolute top-0 left-[70px] w-[182.85px] h-[162px] hidden">
                <li className="text-[16px]   bg-[#64b0f2] py-[15px] pl-[4px] pr-[100px] text-[white] font-[500]">
                  Quản lí
                </li>
                <li className="text-[14px] py-[15px] pl-[8px] pr-[100px] hover:text-[bg-[#64b0f2] bg-white">
                  Users
                </li>
                <li className="text-[14px] py-[15px] pl-[8px] pr-[50px] hover:text-[bg-[#64b0f2] bg-white">
                  Báo cáo phân tích
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SideMenu;
