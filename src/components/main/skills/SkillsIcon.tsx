import React from "react";

type SkillsIconProps = {
  children: React.ReactNode;
  skillName: string;
};

const SkillsIcon: React.FC<SkillsIconProps> = ({ children, skillName }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className=" rounded-full bg-neutral-800 border border-gray-100 hover:border-gray-200 size-14 flex items-center justify-center">
        {children}
      </div>
      <span className="text-xs">{skillName}</span>
    </div>
  );
};

export default SkillsIcon;
