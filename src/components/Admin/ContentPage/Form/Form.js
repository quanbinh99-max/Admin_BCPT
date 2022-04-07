// Báo Cáo Doanh Nghiệp

import React, { useEffect, useState } from "react";
import Sortable from "sortablejs";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { DataInput } from "../../../../store/DataInput";

function Form({ handleValueSelect }) {
  useEffect(() => {
    var el = document.getElementById("items");
    var sortable = Sortable.create(el);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [valueInput, setValueInput] = useState("");

  const [dataInput, setDataInput] = useRecoilState(DataInput);

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
              onChange={handleValueSelect}
            >
              <option value="">---Loại Báo Cáo---</option>
              <option value="BaoCaoDoanhNghiep">Báo cáo doanh nghiệp</option>
              <option value="BaoCaoNganh">Báo cáo ngành</option>
              <option value="BaoCaoViMo">Báo cáo vĩ mô</option>
              <option value="BaoCaoChienLuoc">Báo cáo chiến lược</option>
            </select>
          </li>
          <li>
            {" "}
            <input
              type="text"
              placeholder="Mã chứng khoán"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              {...register("MaCk", { required: true })}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              placeholder="Nguồn (công ty chứng khoán)"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              {...register("Nguon", { required: true })}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              placeholder="Tên báo cáo"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              {...register("TenBaoCao", { required: true })}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Giá mục tiêu"
              {...register("GiaMucTieu", { required: true })}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="LNST dự phóng năm"
              {...register("LNSTDuPhongNam", { required: true })}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="LNST năm n+1"
              {...register("LNSTNam_n+1", { required: true })}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="LNST năm n+2"
              {...register("LNSTNam_n+2", { required: true })}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Doanh thu dự phóng"
              {...register("DoanThuDuPhong", { required: true })}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Khuyến nghị (mua/bán)"
              {...register("KhuyenNghi", { required: true })}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Ngày cập nhật"
              {...register("NgayCapNhat", { required: true })}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px]"
              placeholder="Ngày Khuyến Nghị"
              {...register("NgayKhuyenNghi", { required: true })}
            />
          </li>

          <li>
            {" "}
            <input
              type="file"
              className="w-[100%] h-[38px] px-[12px] py-[6px] border-[1px] rounded-[6px] bg-white"
              {...register("file")}
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
