import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function HeaderTitle({ title }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex justify-center items-center w-full h-[8vh] relative">
      <AiOutlineLeft onClick={goBack} className="absolute left-5 w-7 h-7" />
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );
}

export default HeaderTitle;
