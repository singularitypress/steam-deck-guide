import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: IProps) => {
  return (
    <div className={`container mx-auto my-0 ${className}`}>{children}</div>
  );
};
