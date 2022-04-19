import React, { useState } from "react";
import { showState } from "../../../store/showData";
import { useRecoilState } from "recoil";
import Form from "./Form/Form";
import Form2 from "./Form/Form2";
import Form3 from "./Form/Form3";
import ContentHeader from "./ContentHeader/ContentHeader";
import Table from "./Table/Table";
import BCPTapi from "../../../api/BCPTapi";
import Cookies from "js-cookie";

function ContentPage(props) {
  const [dataShow, setDataShow] = useRecoilState(showState);
  const { isShow } = dataShow;

  const [valueSelect, setvalueSelect] = useState("Báo cáo doanh nghiệp");

  const handleValueSelect = (e) => {
    setvalueSelect(e.target.value);
  };

  const [optionSearch, setoptionSearch] = useState("");
  const [textSearch, setTextSearch] = useState("");
  const [optionDaySearch, setOptionDaySearch] = useState("");
  const [nameDaySearchFrom, setNameDaySearchFrom] = useState("");
  const [nameDaySearchTo, setNameDaySearchTo] = useState("");
  const [daySearchFrom, setDaySearchFrom] = useState("");
  const [daySearchTo, setDaySearchTo] = useState("");
  const valueOptionSearch = (e) => {
    setoptionSearch(e.target.value);
  };
  const valueOptionDaySearch = (e) => {
    setOptionDaySearch(e.target.value);
  };

  const handleTextSearch = (e) => {
    setTextSearch(e.target.value);
  };

  const handleDaySearchFrom = (e) => {
    setDaySearchFrom(e.target.value);
    setNameDaySearchFrom(e.target.name);
  };

  const handleDaySearchTo = (e) => {
    setDaySearchTo(e.target.value);
    setNameDaySearchTo(e.target.name);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleCalculate = () => {
    const config = {
      headers: {
        Authorization:
          "Bearer " + (Cookies.get("token") || sessionStorage.getItem("token")),
      },
    };
    const caculateBCPT = async () => {
      try {
        setIsLoading(true);
        const url = "https://beta.wichart.vn/wichartapi/admin/bcpt/calculate";
        const response = await BCPTapi.caculateBCPT(url, config);
        setIsLoading(false);
        alert("Tính toán báo cáo phân tích thành công !!!");
      } catch (error) {
        console.error(error);
      }
    };
    caculateBCPT();
  };

  return (
    <div
      className={`content-page ${isShow === true ? "ml-[250px]" : "ml-[70px]"}`}
    >
      <div className="content mt-[70px] ">
        <ContentHeader></ContentHeader>
        {/* ==================================== */}

        <div className="content-main bg-slate-100 py-[20px] px-[12px]">
          {valueSelect === "Báo cáo doanh nghiệp" && (
            <Form
              handleValueSelect={handleValueSelect}
              valueSelect={valueSelect}
            ></Form>
          )}
          {valueSelect === "Báo cáo ngành" && (
            <Form2
              handleValueSelect={handleValueSelect}
              valueSelect={valueSelect}
            ></Form2>
          )}
          {valueSelect === "Báo cáo vĩ mô" && (
            <Form3
              handleValueSelect={handleValueSelect}
              valueSelect={valueSelect}
            ></Form3>
          )}
          {valueSelect === "Báo cáo chiến lược" && (
            <Form3
              handleValueSelect={handleValueSelect}
              valueSelect={valueSelect}
            ></Form3>
          )}
          <button
            className="bg-[#1bb99a] py-[6px] px-[12px] rounded-[4px] text-white flex"
            onClick={handleCalculate}
          >
            <span className="mr-1"> Tính toán báo cáo phân tích</span>
            {isLoading === true && (
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-[#1bb99a] odd:dark:bg-gray-800 even:dark:bg-gray-700 w-[26px] h-[26px]">
                <th
                  scope="row"
                  className="px-[3px] py-[2px] font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <svg
                    role="status"
                    className="mr-2 w-[20px] h-[20px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </th>
              </tr>
            )}
          </button>

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
                  <option value="mack">Mã chứng khoán</option>
                  <option value="nguon">Nguồn </option>
                  <option value="tenbaocao">Tên báo cáo</option>
                  <option value="loaibaocao">Loại báo cáo</option>
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
              <select
                className="rounded-[16px] text-[12px] font-[500]"
                onChange={valueOptionDaySearch}
              >
                <option value="">---Tìm kiếm theo---</option>
                <option value="ngaykn"> Ngày Khuyến Nghị </option>
                <option value="ngay_congbo">Ngày Công Bố </option>
              </select>

              <div className="mt-1">
                <span className="font-[500]">Form: </span>
                <input
                  type="date"
                  className="border-[1px] rounded-[30px] w-[210px] h-[34px] pl-[20px] pr-[40px] "
                  onChange={handleDaySearchFrom}
                  disabled={optionDaySearch === "" ? true : false}
                  name={optionDaySearch + "_from"}
                  value={optionDaySearch === "" ? "" : daySearchFrom}
                />
                <span className="font-[500]"> To: </span>
                <input
                  type="date"
                  className="border-[1px] rounded-[30px] w-[210px] h-[34px] pl-[20px] pr-[40px] "
                  onChange={handleDaySearchTo}
                  disabled={optionDaySearch === "" ? true : false}
                  name={optionDaySearch + "_to"}
                  value={optionDaySearch === "" ? "" : daySearchTo}
                />
              </div>
            </div>
          </div>

          <h4 className="text-[24px] font-[500] text-[#212529] mb-[8px]">
            Danh sách báo cáo phân tích
          </h4>

          <hr></hr>

          <Table
            optionSearch={optionSearch}
            textSearch={textSearch}
            optionDaySearch={optionDaySearch}
            daySearchFrom={daySearchFrom}
            nameDaySearchFrom={nameDaySearchFrom}
            daySearchTo={daySearchTo}
            nameDaySearchTo={nameDaySearchTo}
          ></Table>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
