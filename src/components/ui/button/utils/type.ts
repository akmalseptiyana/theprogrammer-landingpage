import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  withIcon?: boolean;
};
