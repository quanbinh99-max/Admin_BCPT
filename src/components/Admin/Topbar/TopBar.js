import React, { useState } from "react";
import { showState } from "../../../store/showData";
import { useRecoilState } from "recoil";
import "./index.css";

function TopBar(props) {
  const [dataShow, setDataShow] = useRecoilState(showState);
  const { isShow } = dataShow;
  const handleShow = () => {
    setDataShow({
      isShow: !isShow,
    });
  };

  const [isShowSettings, setIsShowSettings] = useState(false);
  const [isShowNofitication, setIsShowNofitication] = useState(false);
  const [isShowMail, setIsShowMail] = useState(false);

  const [isActive, setIsActive] = useState(true);

  const handleNotification = () => {
    setIsShowNofitication(!isShowNofitication);
  };

  const handleShowMail = () => {
    setIsShowMail(!isShowMail);
  };

  const handleShowSettings = () => {
    setIsShowSettings(!isShowSettings);
  };

  const clickActive = () => {
    setIsActive(true);
  };

  const clickSettings = () => {
    setIsActive(false);
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
          <input
            className="border-[1px] rounded-[30px] w-[200px] h-[34px] pl-[20px] pr-[40px] bg-[#818A911A]"
            placeholder="Search"
          />
          <i className="fa-solid fa-magnifying-glass text-slate-200 absolute mt-[28px] ml-[-28px]"></i>
        </div>
        <div className="flex ">
          <div className="relative">
            <i
              className="fa-solid fa-bell leading-[70px] text-[white] text-[22px] px-[16px] mr-[8px]"
              onClick={handleNotification}
            ></i>
            <div
              className={`w-[278px] absolute top-[70px] right-0 bg-slate-50 py-[8px] rounded-8px border-[2px] ${
                isShowNofitication === false ? "hidden" : ""
              }`}
            >
              <div className="px-[20px] py-[12px] bg-[#64B0F2] flex justify-between text-white">
                <span className="text-[16px]">Notification</span>
                <span className="bg-[#FF5D48] text-[14px] px-[12px]  rounded-[8px]">
                  7
                </span>
              </div>
              <div>
                <ul>
                  <li>
                    <div className="flex py-[10px] px-[20px] ">
                      {" "}
                      <i className="fa-solid fa-comment text-[36px] mr-[10px] text-green-400"></i>
                      <div className="flex flex-col">
                        <span className="text-[#212529]">
                          Huy Giáp commented
                        </span>
                        <span className="text-[#6C757D] text-[11px]">
                          1min ago
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex py-[10px] px-[20px] ">
                      {" "}
                      <i class="fa-solid fa-user text-[36px] mr-[10px] text-blue-400"></i>
                      <div className="flex flex-col">
                        <span className="text-[#212529]">
                          New User Registered
                        </span>
                        <span className="text-[#6C757D] text-[11px]">
                          1min ago
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex py-[10px] px-[20px] ">
                      {" "}
                      <i className="fa-solid fa-thumbs-up text-[36px] mr-[10px] text-[#ff5d48]"></i>
                      <div className="flex flex-col">
                        <span className="text-[#212529]">Nguyễn Huy Giáp</span>
                        <span className="text-[#6C757D] text-[11px]">
                          1min ago
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="px-[20px] py-[10px] bg-[#ECEEEF]">
                <span className="">View All</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <i
              className="fa-solid fa-envelope leading-[70px] text-[white] text-[22px] px-[16px] mr-[8px]"
              onClick={handleShowMail}
            ></i>
            <div
              className={`w-[278px] absolute top-[70px] right-0 bg-slate-50 py-[8px] rounded-8px border-[2px] ${
                isShowMail === false ? "hidden" : ""
              }`}
            >
              <div className="px-[20px] py-[12px] bg-[#64B0F2] flex justify-between text-white">
                <span className="text-[16px]">Messages</span>
                <span className="bg-[#FF5D48] text-[14px] px-[12px]  rounded-[8px]">
                  7
                </span>
              </div>
              <div>
                <ul>
                  <li>
                    <div className="flex py-[10px] px-[20px] ">
                      {" "}
                      <img
                        className="h-[36px] w-[36px] rounded-[18px] flex self-center mr-[10px]"
                        src="https://static.tuoitre.vn/tto/i/s626/2014/11/25/aNaGVYbT.jpg"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <span className="text-[#212529]">Huy Giáp</span>
                        <span className="text-[#212529] text-[13px]">
                          New tasks needs to be done
                        </span>
                        <span className="text-[#6C757D] text-[11px]">
                          1min ago
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex py-[10px] px-[20px] ">
                      {" "}
                      <img
                        className="h-[36px] w-[36px] rounded-[18px] flex self-center mr-[10px]"
                        src="https://static.tuoitre.vn/tto/i/s626/2014/11/25/aNaGVYbT.jpg"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <span className="text-[#212529]">Huy Giáp</span>
                        <span className="text-[#212529] text-[13px]">
                          New tasks needs to be done
                        </span>
                        <span className="text-[#6C757D] text-[11px]">
                          1min ago
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex py-[10px] px-[20px] ">
                      {" "}
                      <img
                        className="h-[36px] w-[36px] rounded-[18px] flex self-center mr-[10px]"
                        src="https://static.tuoitre.vn/tto/i/s626/2014/11/25/aNaGVYbT.jpg"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <span className="text-[#212529]">Huy Giáp</span>
                        <span className="text-[#212529] text-[13px]">
                          New tasks needs to be done
                        </span>
                        <span className="text-[#6C757D] text-[11px]">
                          1min ago
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="px-[20px] py-[10px] bg-[#ECEEEF]">
                <span className="">View All</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <i
              className="fa-solid fa-bars-staggered leading-[70px] text-[white] text-[22px] px-[16px] mr-[8px]"
              onClick={handleShowSettings}
            ></i>
            <div
              className={`w-[240px] absolute top-[70px] right-0 bg-[white] border-[2px] rounded-[4px] ${
                isShowSettings === false ? "hidden" : ""
              }`}
            >
              <ul className="flex">
                <li className="flex-1">
                  <button
                    className={
                      isActive === true
                        ? "text-white text-[14.4px] py-[8px] px-[16px] w-[100%] bg-[#007BFF] rounded-[4px]"
                        : "text-[#007BFF] text-[14.4px] py-[8px] px-[16px] w-[100%] rounded-[4px]"
                    }
                    onClick={clickActive}
                  >
                    Active
                  </button>
                </li>
                <li className="flex-1">
                  <button
                    className={
                      isActive === false
                        ? "text-white text-[14.4px] py-[8px] px-[16px] w-[100%] bg-[#007BFF] rounded-[4px]"
                        : "text-[#007BFF] text-[14.4px] py-[8px] px-[16px] w-[100%] rounded-[4px]"
                    }
                    onClick={clickSettings}
                  >
                    Settings
                  </button>
                </li>
              </ul>

              {/* =======================Active============================== */}
              {isActive === true ? (
                <div className="w-[240px] p-[20px] overflow-y-scroll h-[100vh] ">
                  <div className="pb-[15px] pl-[15px] border-l-2 border-[#64b0f2] relative">
                    <span className="text-[#6C757D] text-[11.52px]">
                      30 minutes ago
                    </span>
                    <div>
                      <a href="#" className="text-[#212529] text-[13px]">
                        {" "}
                        Lorem{" "}
                      </a>
                      <p>commented your post</p>
                    </div>
                    <span className="text-[#212529] text-[13px]">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam laoreet tellus ut tincidunt euismod.
                    </span>
                    <i class="fa-solid fa-circle text-[10px] absolute top-[11px] left-[-6px] text-[#64b0f2]"></i>
                  </div>

                  <div className="pb-[15px] pl-[15px] border-l-2 border-[#64b0f2] relative">
                    <span className="text-[#6C757D] text-[11.52px]">
                      30 minutes ago
                    </span>
                    <div>
                      <a href="#" className="text-[#212529] text-[13px]">
                        {" "}
                        Lorem{" "}
                      </a>
                      <p>commented your post</p>
                    </div>
                    <span className="text-[#212529] text-[13px]">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam laoreet tellus ut tincidunt euismod.
                    </span>
                    <i class="fa-solid fa-circle text-[10px] absolute top-[11px] left-[-6px] text-[#64b0f2]"></i>
                  </div>

                  <div className="pb-[15px] pl-[15px] border-l-2 border-[#64b0f2] relative">
                    <span className="text-[#6C757D] text-[11.52px]">
                      30 minutes ago
                    </span>
                    <div>
                      <a href="#" className="text-[#212529] text-[13px]">
                        {" "}
                        Lorem{" "}
                      </a>
                      <p>commented your post</p>
                    </div>
                    <span className="text-[#212529] text-[13px]">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam laoreet tellus ut tincidunt euismod.
                    </span>
                    <i class="fa-solid fa-circle text-[10px] absolute top-[11px] left-[-6px] text-[#64b0f2]"></i>
                  </div>

                  <div className="pb-[15px] pl-[15px] border-l-2 border-[#64b0f2] relative">
                    <span className="text-[#6C757D] text-[11.52px]">
                      30 minutes ago
                    </span>
                    <div>
                      <a href="#" className="text-[#212529] text-[13px]">
                        {" "}
                        Lorem{" "}
                      </a>
                      <p>commented your post</p>
                    </div>
                    <span className="text-[#212529] text-[13px]">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam laoreet tellus ut tincidunt euismod.
                    </span>
                    <i class="fa-solid fa-circle text-[10px] absolute top-[11px] left-[-6px] text-[#64b0f2]"></i>
                  </div>

                  <div className="pb-[15px] pl-[15px] border-l-2 border-[#64b0f2] relative">
                    <span className="text-[#6C757D] text-[11.52px]">
                      30 minutes ago
                    </span>
                    <div>
                      <a href="#" className="text-[#212529] text-[13px]">
                        {" "}
                        Lorem{" "}
                      </a>
                      <p>commented your post</p>
                    </div>
                    <span className="text-[#212529] text-[13px]">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam laoreet tellus ut tincidunt euismod.
                    </span>
                    <i class="fa-solid fa-circle text-[10px] absolute top-[11px] left-[-6px] text-[#64b0f2]"></i>
                  </div>
                </div>
              ) : (
                <div className="">
                  <div className="flex justify-between p-[20px] ">
                    <div className="flex flex-col">
                      <span className="text-[15px] text-[#212529] font-[500] ">
                        Notifications
                      </span>
                      <span className="text-[#6C757D] text-[11px]">
                        Do you need them?
                      </span>
                    </div>
                    <div>
                      <div class="flex items-center justify-center w-full mb-0">
                        <label
                          for="toggleA"
                          class="flex items-center cursor-pointer"
                        >
                          <div class="relative">
                            <input
                              type="checkbox"
                              id="toggleA"
                              class="sr-only"
                            />
                            <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                            <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between p-[20px]">
                    <div className="flex flex-col">
                      <span className="text-[15px] text-[#212529] font-[500] ">
                        API Access
                      </span>
                      <span className="text-[#6C757D] text-[11px]">
                        Enable/Disable access
                      </span>
                    </div>
                    <div>
                      <div class="flex items-center justify-center w-full mb-0">
                        <label
                          for="toggleB"
                          class="flex items-center cursor-pointer"
                        >
                          <div class="relative">
                            <input
                              type="checkbox"
                              id="toggleB"
                              class="sr-only"
                            />
                            <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                            <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between p-[20px]">
                    <div className="flex flex-col">
                      <span className="text-[15px] text-[#212529] font-[500] ">
                        Auto Updates
                      </span>
                      <span className="text-[#6C757D] text-[11px]">
                        Keep up to date
                      </span>
                    </div>
                    <div>
                      <div class="flex items-center justify-center w-full mb-0">
                        <label
                          for="toggleC"
                          class="flex items-center cursor-pointer"
                        >
                          <div class="relative">
                            <input
                              type="checkbox"
                              id="toggleC"
                              class="sr-only"
                            />
                            <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                            <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between p-[20px]">
                    <div className="flex flex-col">
                      <span className="text-[15px] text-[#212529] font-[500] ">
                        Online Status
                      </span>
                      <span className="text-[#6C757D] text-[11px]">
                        Show your status to all
                      </span>
                    </div>
                    <div>
                      <div class="flex items-center justify-center w-full mb-0">
                        <label
                          for="toggleD"
                          class="flex items-center cursor-pointer"
                        >
                          <div class="relative">
                            <input
                              type="checkbox"
                              id="toggleD"
                              class="sr-only"
                            />
                            <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                            <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ======================================Setings============================== */}
            </div>
          </div>
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
