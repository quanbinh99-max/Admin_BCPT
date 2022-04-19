// Báo Cáo Ngành

import React, { useEffect } from "react";
import Sortable from "sortablejs";
import { useForm } from "react-hook-form";
import BCPTapi from "../../../../api/BCPTapi";
import Cookies from "js-cookie";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    ngaykn: yup.date(),
    ngay_congbo: yup.date(),
  })
  .required();

function Form2({ handleValueSelect, valueSelect }) {
  useEffect(() => {
    var el = document.getElementById("items");
    var sortable = Sortable.create(el);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    const config = {
      headers: {
        Authorization:
          "Bearer " + (Cookies.get("token") || sessionStorage.getItem("token")),
      },
    };
    const insertBCPT = async () => {
      try {
        const url = "https://beta.wichart.vn/wichartapi/admin/bcpt";
        const response = await BCPTapi.insertBCPT(url, data, config);
        alert("Thêm Thành Công!!!");
      } catch (error) {
        console.log(error);
      }
    };
    insertBCPT();
  };

  return (
    <div>
      {" "}
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <ul className="" id="items">
          <li>
            {" "}
            <select
              name=""
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]
        required"
              value={valueSelect}
              {...register("loaibaocao", {
                required: true,
                onChange: handleValueSelect,
              })}
            >
              <option value="">---Loại Báo Cáo---</option>
              <option value="Báo cáo doanh nghiệp">Báo cáo doanh nghiệp</option>
              <option value="Báo cáo ngành">Báo cáo ngành</option>
              <option value="Báo cáo vĩ mô">Báo cáo vĩ mô</option>
              <option value="Báo cáo chiến lược">Báo cáo chiến lược</option>
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
              {...register("nguon", { required: true })}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              placeholder="Tên báo cáo"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              {...register("tenbaocao", { required: true })}
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
              {...register("khuyennghi", { required: true })}
            />
            <p>{errors.khuyennghi?.message}</p>
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Ngày cập nhật"
              {...register("ngay_congbo", { required: true })}
            />
            <p>{errors.ngay_congbo?.message}</p>
          </li>
          {/* <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Thuộc Ngành"
              {...register("ThuocNganh", { required: true })}
            />
          </li> */}
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Ngày Khuyến Nghị"
              {...register("ngaykn", { required: true })}
            />
          </li>

          <li>
            {" "}
            <input
              type="file"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px] bg-white"
              {...register("file", { required: true })}
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

export default Form2;
