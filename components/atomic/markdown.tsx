import React from "react";

interface IProps {
  content: string;
  className?: string;
}

export const Markdown = ({ content, className = "" }: IProps) => {
  return (
    <div
      className={`markdown ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};
