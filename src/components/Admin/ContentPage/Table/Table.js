import React from "react";

function Table(props) {
  return (
    <div>
      {" "}
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
                Ngày Cập Nhật
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
              <td className="px-6 py-4 text-right">2022-03-25</td>
              <td className="px-6 py-4 text-right">
                <button>Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
