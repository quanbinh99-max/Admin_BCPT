import React, { useEffect, useState } from "react";
import BCPTapi from "../../../../api/BCPTapi";
import { useRecoilState } from "recoil";
import { BCPTData } from "../../../../store/DanhSachBCPT";

function Table({ optionSearch, textSearch }) {
  const [DanhSachBCPT, setDanhSachBCPT] = useRecoilState(BCPTData);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDanhSachBCPT = async () => {
      try {
        setLoading(true);
        const response = await BCPTapi.getAll();
        setDanhSachBCPT(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDanhSachBCPT();
  }, []);

  let showDSBCPT = [];

  if (DanhSachBCPT.length !== 0) {
    let ShowDanhSachBCPT = DanhSachBCPT;

    switch (optionSearch) {
      case "MaChungKhoan": {
        ShowDanhSachBCPT = DanhSachBCPT.filter((BCPT) => {
          return BCPT.MaCk.toLowerCase().includes(textSearch);
        });
        break;
      }
      case "Nguon": {
        ShowDanhSachBCPT = DanhSachBCPT.filter((BCPT) => {
          return BCPT.Nguon.toLowerCase().includes(textSearch);
        });
        break;
      }
      case "TenBaoCao": {
        ShowDanhSachBCPT = DanhSachBCPT.filter((BCPT) => {
          return BCPT.TenBaoCao.toLowerCase().includes(textSearch);
        });
        break;
      }
      case "LoaiBaoCao": {
        ShowDanhSachBCPT = DanhSachBCPT.filter((BCPT) => {
          return BCPT.LoaiBaoCao.toLowerCase().includes(textSearch);
        });
        break;
      }
      default: {
        break;
      }
    }

    showDSBCPT = ShowDanhSachBCPT.map((BCPT, index) => {
      return (
        <tr
          key={index}
          className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {BCPT.id}
          </th>
          <td className="px-6 py-4">{BCPT.MaCk}</td>
          <td className="px-6 py-4">{BCPT.Nguon}</td>
          <td className="px-6 py-4">
            <a href="#" className="">
              {BCPT.TenBaoCao}
            </a>
          </td>
          <td className="px-6 py-4 text-right">{BCPT.GiaMucTieu}</td>
          <td className="px-6 py-4 text-right">{BCPT.LNDuPhong}</td>
          <td className="px-6 py-4 text-right">{BCPT.DTDuPhong}</td>
          <td className="px-6 py-4 text-right">{BCPT.KhuyenNghi}</td>
          <td className="px-6 py-4 text-right">{BCPT.LoaiBaoCao}</td>
          <td className="px-6 py-4 text-right">{BCPT.NgayKhuyenNghi}</td>
          <td className="px-6 py-4 text-right">{BCPT.NgayCapNhat}</td>
          <td className="px-6 py-4 text-right">
            <button>Xóa</button>
          </td>
        </tr>
      );
    });
  }

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
            {loading && (
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Loading...
                </th>
              </tr>
            )}
            {showDSBCPT}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
