import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type SocialLinksType = {
  linkedin?: string;
  github?: string;
  twitter?: string;

  /** Style props */
  socialLinksPosition?: Property.Position;
  socialLinksGap?: Property.Gap;
  linkedinIconWidth?: Property.Width;
  linkedinIconHeight?: Property.Height;
  githubIconWidth?: Property.Width;
  githubIconHeight?: Property.Height;
  twitterIconWidth?: Property.Width;
  twitterIconHeight?: Property.Height;

  /** Action props */
  onLinkedinIconClick?: () => void;
  onGithubIconClick?: () => void;
  onTwitterIconClick?: () => void;
};

const SocialLinks: NextPage<SocialLinksType> = ({
  linkedin,
  github,
  twitter,
  socialLinksPosition,
  socialLinksGap,
  linkedinIconWidth,
  linkedinIconHeight,
  githubIconWidth,
  githubIconHeight,
  twitterIconWidth,
  twitterIconHeight,
  onLinkedinIconClick,
  onGithubIconClick,
  onTwitterIconClick,
}) => {
  const socialLinksStyle: CSS.Properties = useMemo(() => {
    return {
      position: socialLinksPosition,
      gap: socialLinksGap,
    };
  }, [socialLinksPosition, socialLinksGap]);

  const linkedinIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: linkedinIconWidth,
      height: linkedinIconHeight,
    };
  }, [linkedinIconWidth, linkedinIconHeight]);

  const githubIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: githubIconWidth,
      height: githubIconHeight,
    };
  }, [githubIconWidth, githubIconHeight]);

  const twitterIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: twitterIconWidth,
      height: twitterIconHeight,
    };
  }, [twitterIconWidth, twitterIconHeight]);

  return (
    <div
      className="relative flex flex-row items-start justify-start gap-[20px]"
      style={socialLinksStyle}
    >
      <img
        className="relative w-8 h-8 cursor-pointer"
        alt=""
        src={linkedin}
        onClick={onLinkedinIconClick}
        style={linkedinIconStyle}
      />
      <img
        className="relative w-8 h-8 cursor-pointer"
        alt=""
        src={github}
        onClick={onGithubIconClick}
        style={githubIconStyle}
      />
      <img
        className="relative w-8 h-8 cursor-pointer"
        alt=""
        src={twitter}
        onClick={onTwitterIconClick}
        style={twitterIconStyle}
      />
    </div>
  );
};

export default SocialLinks;
