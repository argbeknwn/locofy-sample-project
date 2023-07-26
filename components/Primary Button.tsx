import type { NextPage } from "next";
import { memo } from "react";

const PrimaryButton: NextPage = memo(() => {
  return (
    <button className="cursor-pointer py-[0.75rem] px-[1.25rem] bg-white-color rounded-lg box-border h-[2.5rem] flex flex-row items-center justify-center gap-[0.5rem] border-[1px] border-solid border-primary-color">
      <div className="relative text-[0.88rem] leading-[1.5rem] font-semibold font-poppins text-primary-color text-center">
        Select Me
      </div>
      <img
        className="relative w-[1.25rem] h-[1.25rem] hidden"
        alt=""
        src="/icon.svg"
      />
    </button>
  );
});

export default PrimaryButton;
