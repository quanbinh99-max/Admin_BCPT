// Báo Cáo Doanh Nghiệp

import React, { useEffect, useState } from "react";
import Sortable from "sortablejs";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import BCPTapi from "../../../../api/BCPTapi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    giamuctieu: yup.number().positive().integer().required(),
    lnst_duphong: yup.number().positive().integer().required(),
    lnst_duphong_n1: yup.number().positive().integer().required(),
    lnst_duphong_n2: yup.number().positive().integer().required(),
    doanhthu_duphong: yup.number().positive().integer().required(),
    ngaykn: yup.date(),
    ngay_congbo: yup.date(),
  })
  .required();

function Form({ handleValueSelect, valueSelect }) {
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
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
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
              {...register("mack", { required: true })}
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
              {...register("giamuctieu", { required: true })}
            />
            <p>{errors.giamuctieu?.message}</p>
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="LNST dự phóng năm"
              {...register("lnst_duphong", { required: true })}
            />
            <p>{errors.giamuctieu?.message}</p>
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="LNST năm n+1"
              {...register("lnst_duphong_n1", { required: true })}
            />
          </li>
          <p>{errors.giamuctieu?.message}</p>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="LNST năm n+2"
              {...register("lnst_duphong_n2", { required: true })}
            />
            <p>{errors.giamuctieu?.message}</p>
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Doanh thu dự phóng"
              {...register("doanhthu_duphong", { required: true })}
            />
            <p>{errors.giamuctieu?.message}</p>
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Khuyến nghị (mua/bán)"
              {...register("khuyennghi", { required: true })}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Ngày cập nhật"
              {...register("ngay_congbo", { required: true })}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Ngày Khuyến Nghị"
              {...register("ngaykn", { required: true })}
            />
            <p>{errors.ngaykn?.message}</p>
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
        <button
          className=" w-[64px] h-[38px] bg-[#039cfd] rounded-[4px] text-white"
          onClick={handleSubmit}
        >
          Nhập
        </button>
        <hr className="mt-[16px] mb-[16px]"></hr>
      </form>
    </div>
  );
}

export default Form;
