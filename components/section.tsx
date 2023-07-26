import type { NextPage } from "next";
import { useCallback } from "react";
import PrimaryButton from "./Primary Button";
import SocialLinks from "./social-links";

const Section: NextPage = () => {
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
    <div className="w-[37.5rem] h-[13.07rem] overflow-hidden shrink-0 flex flex-row items-center justify-between min-w-[37.5rem] max-w-[37.5rem] lg:flex-row lg:gap-[6rem] lg:items-center lg:justify-between md:flex-col md:gap-[2.75rem] md:items-center md:justify-center sm:h-auto sm:flex-col sm:gap-[1.5rem]">
      <PrimaryButton />
      <div className="relative rounded-[88.24px] w-[9.38rem] h-[9.38rem] overflow-hidden shrink-0">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/sebastian@2x.png"
        />
      </div>
      <SocialLinks
        linkedin="/linkedin.svg"
        github="/github.svg"
        twitter="/twitter.svg"
        socialLinksPosition="unset"
        socialLinksGap="1.25rem"
        linkedinIconWidth="2rem"
        linkedinIconHeight="2rem"
        githubIconWidth="2rem"
        githubIconHeight="2rem"
        twitterIconWidth="2rem"
        twitterIconHeight="2rem"
        onLinkedinIconClick={onLinkedinIconClick}
        onGithubIconClick={onGithubIconClick}
        onTwitterIconClick={onTwitterIconClick}
      />
    </div>
  );
};

export default Section;
