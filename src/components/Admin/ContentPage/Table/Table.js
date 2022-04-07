import React, { useEffect, useState } from "react";
import BCPTapi from "../../../../api/BCPTapi";
import { useRecoilState } from "recoil";
import { BCPTData } from "../../../../store/DanhSachBCPT";

function Table({ optionSearch, textSearch }) {
  const [DanhSachBCPT, setDanhSachBCPT] = useRecoilState(BCPTData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDanhSachBCPT = async () => {
      try {
        const response = await BCPTapi.getAll();
        setDanhSachBCPT(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchDanhSachBCPT();
  }, []);

  const handleDelete = (id) => {
    const deleteDanhSachBCPT = async () => {
      try {
        const response = await BCPTapi.delete(id).then((response) => {
          const cloneDanhSachBCPT = [...DanhSachBCPT];
          cloneDanhSachBCPT.splice(findIndex(DanhSachBCPT, id), 1);
          setDanhSachBCPT(cloneDanhSachBCPT);
        });
      } catch (error) {
        console.error(error);
      }
    };
    deleteDanhSachBCPT();
  };

  const findIndex = (list, id) => {
    var result = -1;
    list.forEach((listItem, index) => {
      if (listItem.id == id) {
        result = index;
      }
    });
    return result;
  };

  let showDSBCPT = [];

  if (DanhSachBCPT.length !== 0) {
    let FilltedDanhSachBCPT = DanhSachBCPT;

    switch (optionSearch) {
      case "MaChungKhoan": {
        FilltedDanhSachBCPT = DanhSachBCPT.filter((BCPT) => {
          return BCPT.MaCk.toLowerCase().includes(textSearch);
        });
        break;
      }
      case "Nguon": {
        FilltedDanhSachBCPT = DanhSachBCPT.filter((BCPT) => {
          return BCPT.Nguon.toLowerCase().includes(textSearch);
        });
        break;
      }
      case "TenBaoCao": {
        FilltedDanhSachBCPT = DanhSachBCPT.filter((BCPT) => {
          return BCPT.TenBaoCao.toLowerCase().includes(textSearch);
        });
        break;
      }
      case "LoaiBaoCao": {
        FilltedDanhSachBCPT = DanhSachBCPT.filter((BCPT) => {
          return BCPT.LoaiBaoCao.toLowerCase().includes(textSearch);
        });
        break;
      }
      default: {
        break;
      }
    }

    showDSBCPT = FilltedDanhSachBCPT.map((BCPT, index) => {
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
          <td className="px-6 py-4 text-right">
            {new Date(BCPT.NgayKhuyenNghi).toUTCString()}
          </td>
          <td className="px-6 py-4 text-right">
            {new Date(BCPT.NgayCapNhat).toUTCString()}
          </td>
          <td className="px-6 py-4 text-right">
            <button
              className="bg-blue-500 px-[12px] py-[8px] rounded-[4px]"
              onClick={() => handleDelete(BCPT.id)}
            >
              <span className="text-yellow-50">Xóa</span>
            </button>
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
                Xóa
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
                  <svg
                    role="status"
                    class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
            {showDSBCPT}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
