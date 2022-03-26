import React from "react";

function ContentPage(props) {
  return (
    <div className="content-page ml-[250px]">
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
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
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
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
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
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Mã chứng khoán"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
            />
            <input
              type="text"
              placeholder="Nguồn (công ty chứng khoán)"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
            />
            <input
              type="text"
              placeholder="Tên báo cáo"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
            />
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Giá mục tiêu"
            />
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Lợi nhuận sau thuế phóng"
            />
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Doanh thu dự phóng"
            />
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Khuyến nghị (mua/bán)"
            />
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder=""
            />
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Ngày công bố"
            />
            <select
              name=""
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
            >
              <option value="BaoCaoDoanhNghiep">Báo cáo doanh nghiệp</option>
              <option value="BaoCaoNganh">Báo cáo ngành</option>
            </select>
            <input
              type="file"
              name="file"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px] bg-white"
            ></input>
            <hr className="mt-[16px] mb-[16px]"></hr>
            <button className=" w-[64px] h-[38px] bg-[#039cfd] rounded-[4px] text-white">
              Nhập
            </button>
            <hr className="mt-[16px] mb-[16px]"></hr>
          </form>

          <a
            href="#"
            className="bg-[#1bb99a] py-[6px] px-[12px] rounded-[4px] text-white"
          >
            Tính toán báo cáo phân tích
          </a>

          <hr className="mt-[16px] mb-[16px]"></hr>

          {/* ===================================================== */}

          <h4 className="text-[24px] font-[500] text-[#212529] mb-[8px]">
            Danh sách báo cáo phân tích
          </h4>

          <hr></hr>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    MaCK
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nguồn
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tên báo cáo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Giá mục tiêu
                  </th>
                  <th scope="col" className="px-6 py-3">
                    LN dự phóng
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DT dự phóng
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Khuyến nghị
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Loại BC
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ngày KN
                  </th>
                  <th scope="col" className="px-6 py-3">
                    xóa
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    10636
                  </th>
                  <td className="px-6 py-4">VHM</td>
                  <td className="px-6 py-4">SBSC</td>
                  <td className="px-6 py-4">
                    <a href="#" className="">
                      Doanh nghiệp Bất động sản số 1 Việt Nam
                    </a>
                  </td>
                  <td className="px-6 py-4 text-right">106075</td>
                  <td className="px-6 py-4 text-right">0</td>
                  <td className="px-6 py-4 text-right">0</td>
                  <td className="px-6 py-4 text-right">Mua</td>
                  <td className="px-6 py-4 text-right">Báo Cáo Doanh Nghiệp</td>
                  <td className="px-6 py-4 text-right">2022-03-25</td>
                  <td className="px-6 py-4 text-right">
                    <button>Xóa</button>
                  </td>
                </tr>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    10636
                  </th>
                  <td className="px-6 py-4">VHM</td>
                  <td className="px-6 py-4">SBSC</td>
                  <td className="px-6 py-4">
                    <a href="#" className="">
                      Doanh nghiệp Bất động sản số 1 Việt Nam
                    </a>
                  </td>
                  <td className="px-6 py-4 text-right">106075</td>
                  <td className="px-6 py-4 text-right">0</td>
                  <td className="px-6 py-4 text-right">0</td>
                  <td className="px-6 py-4 text-right">Mua</td>
                  <td className="px-6 py-4 text-right">Báo Cáo Doanh Nghiệp</td>
                  <td className="px-6 py-4 text-right">2022-03-25</td>
                  <td className="px-6 py-4 text-right">
                    <button>Xóa</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
