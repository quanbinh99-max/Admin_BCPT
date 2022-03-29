import React, { useState } from "react";
import Sortable from "sortablejs";
import { showState } from "../../../store/showData";
import { useRecoilState } from "recoil";
import Form from "./Form/Form";
import Form2 from "./Form/Form2";
import Form3 from "./Form/Form3";
import ContentHeader from "./ContentHeader/ContentHeader";
import Table from "./Table/Table";

function ContentPage(props) {
  const [dataShow, setDataShow] = useRecoilState(showState);
  const { isShow } = dataShow;

  const [valueSelect, setvalueSelect] = useState("BaoCaoDoanhNghiep");

  const handleValueSelect = (e) => {
    setvalueSelect(e.target.value);
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
              <span className="font-[500]">Tìm kiếm theo ô :</span>
              <div className="text-[11px] flex">
                <span className="text-red-500 flex self-center mr-[4px]">
                  *{" "}
                </span>
                <span>Vui lòng chọn ô trước khi nhập</span>
              </div>
              <div className="mt-1">
                <input
                  className="border-[1px] rounded-[30px] w-[200px] h-[34px] pl-[20px] pr-[40px] "
                  placeholder="Search"
                />
                <i className="fa-solid fa-magnifying-glass text-slate-200 absolute ml-[-28px] mt-[10px]"></i>
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

          <Table></Table>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
