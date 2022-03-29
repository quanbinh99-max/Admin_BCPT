import React, { useEffect, useState } from "react";
import Sortable from "sortablejs";
import { showState } from "../../../store/showData";
import { useRecoilState } from "recoil";
import Form from "./Form/Form";
import Form2 from "./Form/Form2";
import Form3 from "./Form/Form3";
import Table from "./Table/Table";

function ContentPage(props) {
  useEffect(() => {
    var el = document.getElementById("items");
    var sortable = Sortable.create(el);
  }, []);

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
        <div className="title flex justify-between p-[20px]">
          <span className="text-[19.2px] text-[#212529] font-[500]">
            Báo cáo phân tích
          </span>

          <nav className="flex " aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-[#007BFF] hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="mr-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Trang chủ
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <a
                    href="#"
                    className="ml-1 text-sm font-medium text-[#007BFF] hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Quản lí
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                    Báo cáo phân tích
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

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

          <div className="relative">
            <input
              className="border-[1px] rounded-[30px] w-[200px] h-[34px] pl-[20px] pr-[40px] "
              placeholder="Search"
            />
            <i className="fa-solid fa-magnifying-glass text-slate-200 absolute ml-[-28px] mt-[10px]"></i>
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
