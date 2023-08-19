"use client";
import { FC, ReactNode } from "react";

const ClientMainProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <main>{children}</main>;
};

export default ClientMainProvider;
