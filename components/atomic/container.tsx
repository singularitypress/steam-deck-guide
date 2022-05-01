import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Container = ({ children }: IProps) => {
  return <div className="container">{children}</div>;
};
