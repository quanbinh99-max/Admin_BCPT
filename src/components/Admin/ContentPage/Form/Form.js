// Báo Cáo Doanh Nghiệp

import React, { useEffect, useState } from "react";
import Sortable from "sortablejs";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import BCPTapi from "../../../../api/BCPTapi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRecoilState } from "recoil";
import { BCPTData } from "../../../../store/DanhSachBCPT";

const schema = yup
  .object({
    giamuctieu: yup.number().positive().integer().required(),
    lnst_duphong: yup.number().positive().integer().required(),
    lnst_duphong_n1: yup.number().positive().integer().required(),
    lnst_duphong_n2: yup.number().positive().integer().required(),
    doanhthu_duphong: yup.number().positive().integer().required(),
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

  const [DanhSachBCPT, setDanhSachBCPT] = useRecoilState(BCPTData);

  const date = new Date();
  const [today, setToday] = useState(date.toISOString().substring(0, 10));

  const handleDay = (e) => {
    setToday(e.target.value);
  };

  const onSubmit = (data) => {
    const {
      doanhthu_duphong,
      file,
      giamuctieu,
      khuyennghi,
      lnst_duphong,
      lnst_duphong_n1,
      lnst_duphong_n2,
      loaibaocao,
      mack,
      ngaykn,
      ngay_congbo,
      nguon,
      tenbaocao,
    } = data;

    const formDataBCPT = new FormData();
    formDataBCPT.append("file", file[0]);
    formDataBCPT.append("doanhthu_duphong", doanhthu_duphong);
    formDataBCPT.append("giamuctieu", giamuctieu);
    formDataBCPT.append("khuyennghi", khuyennghi.toUpperCase());
    formDataBCPT.append("lnst_duphong", lnst_duphong);
    formDataBCPT.append("lnst_duphong_n1", lnst_duphong_n1);
    formDataBCPT.append("lnst_duphong_n2", lnst_duphong_n2);
    formDataBCPT.append("loaibaocao", loaibaocao);
    formDataBCPT.append("mack", mack);
    formDataBCPT.append("ngaykn", ngaykn);
    formDataBCPT.append("ngay_congbo", ngay_congbo);
    formDataBCPT.append("nguon", nguon);
    formDataBCPT.append("tenbaocao", tenbaocao);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:
          "Bearer " + (Cookies.get("token") || sessionStorage.getItem("token")),
      },
    };
    const insertBCPT = async () => {
      try {
        const url = "https://beta.wichart.vn/wichartapi/admin/bcpt";
        const response = await BCPTapi.insertBCPT(url, formDataBCPT, config);
        const fetchDanhSachBCPT = await BCPTapi.getAll(
          `${url}?limit=10`,
          config
        );
        setDanhSachBCPT(fetchDanhSachBCPT.content.data);
        alert("Thêm Thành Công!!!");
      } catch (error) {
        console.log(error);
      }
    };
    insertBCPT();
  };

  var onFocus = (e) => {
    e.currentTarget.type = "date";
  };

  var onBlur = (e) => {
    e.currentTarget.type = "text";
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
            <p>{errors.lnst_duphong?.message}</p>
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
          <p>{errors.lnst_duphong_n1?.message}</p>
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
            <p>{errors.doanhthu_duphong?.message}</p>
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
              placeholder="Ngày khuyến nghị"
              onFocus={onFocus}
              {...register("ngay_congbo", {
                required: true,
                onBlur: onBlur,
              })}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Ngày cập nhật"
              onFocus={onFocus}
              value={today}
              {...register("ngaykn", {
                required: true,
                onBlur: onBlur,
                onChange: handleDay,
              })}
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
