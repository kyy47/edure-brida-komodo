import React from "react";
import { Quicksand } from "next/font/google";
import NavbarAdmin from "../navbar/NavbarAdmin";

const quickdsand = Quicksand({ subsets: ["latin"] });
type LayoutProps = {
  children: React.ReactNode;
};
function LayoutAdmin({ children }: LayoutProps) {
  return (
    <div className={` ${quickdsand.className} `}>
      <NavbarAdmin />
      <main>{children}</main>
    </div>
  );
}

export default LayoutAdmin;
