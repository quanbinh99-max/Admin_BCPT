import React from "react";

function Form(props) {
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
            <form className="mt-[20px]">
              <input
                className="py-[6px] px-[12px] w-[100%] border-[2px] rounded-[4px] mb-[16px]"
                type="text"
                placeholder="Username"
              />
              <input
                className="py-[6px] px-[12px] w-[100%] border-[2px] rounded-[4px] mb-[16px]"
                type="password"
                placeholder="Password"
              />
              <div className="mb-[16px]">
                <input type="checkbox" />
                <span className="pl-[5px] text-[#212529] text-[14.4px] font-[500]">
                  Ghi nhớ thông tin đăng nhập
                </span>
              </div>
              <button className="w-[100%] px-[12px] py-[6px] bg-[#1BB99A] text-white rounded-[4px] text-[16px] font-[400]">
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
