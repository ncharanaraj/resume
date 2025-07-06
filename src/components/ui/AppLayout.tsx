import React from "react";

const AppLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div className="max-w-4xl mx-auto px-4 bg-gray-950">{children}</div>;
};

export default AppLayout;
