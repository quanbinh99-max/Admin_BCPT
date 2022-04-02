import React, { useState } from "react";
import { showState } from "../../../store/showData";
import { useRecoilState } from "recoil";
import Form from "./Form/Form";
import Form2 from "./Form/Form2";
import Form3 from "./Form/Form3";
import ContentHeader from "./ContentHeader/ContentHeader";
import Table from "./Table/Table";
import { BCPTData } from "../../../store/DanhSachBCPT";

function ContentPage(props) {
  const [dataShow, setDataShow] = useRecoilState(showState);
  const { isShow } = dataShow;

  const [valueSelect, setvalueSelect] = useState("BaoCaoDoanhNghiep");

  const handleValueSelect = (e) => {
    setvalueSelect(e.target.value);
  };

  const [optionSearch, setoptionSearch] = useState("");
  const [textSearch, setTextSearch] = useState("");
  const valueOptionSearch = (e) => {
    setoptionSearch(e.target.value);
  };
  const handleTextSearch = (e) => {
    setTextSearch(e.target.value);
  };

  return (
    <div
      className={`content-page ${isShow === true ? "ml-[250px]" : "ml-[70px]"}`}
    >
      <div className="content mt-[70px] ">
        <ContentHeader></ContentHeader>
        {/* ==================================== */}

        <div className="content-main bg-slate-100 py-[20px] px-[12px]">
          {valueSelect === "BaoCaoDoanhNghiep" && (
            <Form handleValueSelect={handleValueSelect}></Form>
          )}
          {valueSelect === "BaoCaoNganh" && (
            <Form2 handleValueSelect={handleValueSelect}></Form2>
          )}
          {valueSelect === "BaoCaoViMo" && (
            <Form3 handleValueSelect={handleValueSelect}></Form3>
          )}
          {valueSelect === "BaoCaoChienLuoc" && (
            <Form3 handleValueSelect={handleValueSelect}></Form3>
          )}
          <a
            href="#"
            className="bg-[#1bb99a] py-[6px] px-[12px] rounded-[4px] text-white"
          >
            Tính toán báo cáo phân tích
          </a>

          <hr className="mt-[16px] mb-[16px]"></hr>

          {/* ===================================================== */}

          <div className="flex justify-between">
            <div className="relative flex flex-col">
              <span className="font-[500]">Tìm kiếm</span>
              <div className="mt-1 flex ">
                <select
                  className="rounded-[16px] text-[12px] font-[500]"
                  onChange={valueOptionSearch}
                >
                  <option value="">---Tìm kiếm theo---</option>
                  <option value="MaChungKhoan">Mã chứng khoán</option>
                  <option value="Nguon">Nguồn </option>
                  <option value="TenBaoCao">Tên báo cáo</option>
                  <option value="LoaiBaoCao">Loại báo cáo</option>
                </select>
                <div className="ml-[5px]">
                  <input
                    className="border-[1px] rounded-[30px] w-[200px] h-[34px] pl-[20px] pr-[40px] "
                    placeholder="Search"
                    onChange={handleTextSearch}
                    disabled={optionSearch === "" ? true : false}
                  />
                  <i className="fa-solid fa-magnifying-glass text-slate-200 absolute ml-[-28px] mt-[10px]"></i>
                </div>
              </div>
            </div>
            <div className="relative ">
              <span className="font-[500]">Tìm kiếm theo ngày:</span>
              <div className="mt-1">
                <span className="font-[500]">Form: </span>
                <input
                  type="date"
                  className="border-[1px] rounded-[30px] w-[210px] h-[34px] pl-[20px] pr-[40px] "
                  placeholder="Search"
                />
                <span className="font-[500]"> To: </span>
                <input
                  type="date"
                  className="border-[1px] rounded-[30px] w-[210px] h-[34px] pl-[20px] pr-[40px] "
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          <h4 className="text-[24px] font-[500] text-[#212529] mb-[8px]">
            Danh sách báo cáo phân tích
          </h4>

          <hr></hr>

          <Table optionSearch={optionSearch} textSearch={textSearch}></Table>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
