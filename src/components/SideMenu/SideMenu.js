import React from "react";

function SideMenu(props) {
  return (
    <div className="absolute w-[250px] top-[70px]">
      <ul>
        <li className="text-[13px] px-[12px] py-[20px] leading-[1] tracking-[0.035em] text-[#818a91]">
          Trình quản lí
        </li>
        <li>
          <div className="flex justify-between px-[20px] py-[14px]">
            <div>
              <i class="fa-brands fa-dashcube ml-[3px] mr-[20px] text-[18px] leading-[17px] text-center font-[500] text-[#2B3D51CC]"></i>
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
          <a href="#" className="">
            <i className="fa-solid fa-book ml-[3px]  mr-[20px] text-[18px] leading-[17px] text-center text-[#2B3D51CC]"></i>
            <span className="text-[#2B3D51CC] font-[500]">Quản lí</span>
          </a>
          <ul>
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
  );
}

export default SideMenu;
