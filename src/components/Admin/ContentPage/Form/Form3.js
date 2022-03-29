// Báo Cáo Chiến Lược + Báo Cáo Vĩ Mô

import React, { useEffect } from "react";
import Sortable from "sortablejs";

function Form3({ handleValueSelect }) {
  useEffect(() => {
    var el = document.getElementById("items");
    var sortable = Sortable.create(el);
  }, []);

  return (
    <div>
      {" "}
      <form className="flex flex-col">
        <ul className="" id="items">
          <li>
            {" "}
            <select
              name=""
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]
        required"
              onChange={handleValueSelect}
            >
              <option value="">---Loại Báo Cáo---</option>
              <option value="BaoCaoDoanhNghiep">Báo cáo doanh nghiệp</option>
              <option value="BaoCaoNganh">Báo cáo ngành</option>
              <option value="BaoCaoViMo">Báo cáo vĩ mô</option>
              <option value="BaoCaoChienLuoc">Báo cáo chiến lược</option>
            </select>
          </li>
          <li>
            {" "}
            <input
              type="text"
              placeholder="Mã chứng khoán"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              disabled
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              placeholder="Nguồn (công ty chứng khoán)"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              placeholder="Tên báo cáo"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Giá mục tiêu"
              disabled
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="LNST dự phóng năm"
              disabled
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Doanh thu dự phóng"
              disabled
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Khuyến nghị (mua/bán)"
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Ngày cập nhật"
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Ngày Khuyến Nghị"
            />
          </li>

          <li>
            {" "}
            <input
              type="file"
              name="file"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px] bg-white"
            ></input>
          </li>
        </ul>
        <hr className="mt-[16px] mb-[16px]"></hr>
        <button className=" w-[64px] h-[38px] bg-[#039cfd] rounded-[4px] text-white">
          Nhập
        </button>
        <hr className="mt-[16px] mb-[16px]"></hr>
      </form>
    </div>
  );
}

export default Form3;
