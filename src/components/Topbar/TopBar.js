import React from "react";

function TopBar(props) {
  return (
    <div className=" h-[70px] fixed left-0 right-0 top-0 z-10 flex ">
      <div className="w-[250px]">
        <a
          href="#"
          className="leading-[70px] text-[20px] text-[#2b3d51] font-[700] flex justify-center "
        >
          <i className="fa-solid fa-user-tie flex self-center"></i>
          <span className="">ADMIN</span>
        </a>
      </div>
      <div className="flex justify-between bg-[#2b3d51] flex-1">
        <div className="">
          <i className="fa-solid fa-bars text-white text-[21px] leading-[70px] px-[25px]"></i>
          <input
            className="border-[1px] rounded-[30px] w-[200px] h-[34px] pl-[20px] pr-[40px] bg-[#818A911A]"
            placeholder="Search"
          />
        </div>
        <div className="flex ">
          <i class="fa-solid fa-bell leading-[70px] text-[white] text-[22px] px-[16px] mr-[8px]"></i>
          <i class="fa-solid fa-envelope leading-[70px] text-[white] text-[22px] px-[16px] mr-[8px]"></i>
          <i class="fa-solid fa-bars-staggered leading-[70px] text-[white] text-[22px] px-[16px] mr-[8px]"></i>
          <a className="">
            <img
              className="h-[36px] w-[36px] rounded-[18px] mr-[20px] mt-[16px]"
              src="https://media.defense.gov/2020/Feb/19/2002251686/700/465/0/200219-A-QY194-002.JPG"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
