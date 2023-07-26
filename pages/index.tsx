import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";
import Section from "../components/section";

const InspectSomeLayers: NextPage = () => {
  const onLinkedinIconClick = useCallback(() => {
    window.open("https://www.linkedin.com/company/anima-app");
  }, []);

  const onGithubIconClick = useCallback(() => {
    window.open("https://github.com/AnimaApp");
  }, []);

  const onTwitterIconClick = useCallback(() => {
    window.open("https://twitter.com/animaapp");
  }, []);

  return (
    <div className="relative bg-oldlace w-full flex flex-row items-start justify-start text-left text-[2rem] text-white-color font-mulish lg:h-auto md:w-auto md:[align-self:unset] md:h-auto md:flex-col md:items-start md:justify-start sm:h-full">
      <div className="self-stretch bg-primary-color overflow-hidden flex flex-col py-[6rem] px-[2.75rem] items-start justify-start gap-[2.25rem] md:gap-[4rem] md:items-center md:justify-start sm:bg-teal sm:h-[37.5rem]">
        <div className="w-[18.75rem] flex flex-col items-start justify-start gap-[2.5rem] max-w-[18.75rem] md:items-center md:justify-start sm:w-auto sm:[align-self:unset] sm:h-auto">
          <b className="self-stretch relative leading-[120%]">
            Select a layer to inspect code
          </b>
          <div className="self-stretch relative text-[1rem] leading-[150%]">
            <p className="m-0">
              Select any layer in Figma to translate it into code.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Click the assets on the right to see how they turn into code.
            </p>
          </div>
        </div>
        <img
          className="relative w-[4.94rem] h-[1.28rem] md:[transform:rotate(90deg)] sm:self-stretch sm:w-auto sm:flex-1 sm:[transform:rotate(90deg)]"
          alt=""
          src="/arrow-12.svg"
        />
      </div>
      <div className="self-stretch flex-1 bg-whitesmoke overflow-hidden flex flex-col p-[4rem] items-start justify-start gap-[8rem] text-[2.75rem] text-primary-color font-caveat lg:gap-[6rem] md:gap-[2.25rem] md:items-center md:justify-center md:flex-[unset] md:self-stretch sm:self-stretch sm:w-auto sm:h-auto sm:gap-[1.5rem] sm:items-center sm:justify-between">
        <div className="relative leading-[120%]">Try it out</div>
        <Section />
      </div>
    </div>
  );
};

export default InspectSomeLayers;
