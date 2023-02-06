import { ReactNode } from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

type LayoutRootProps = {
  children: ReactNode;
};

export default function LayoutRoot({ children }: LayoutRootProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
