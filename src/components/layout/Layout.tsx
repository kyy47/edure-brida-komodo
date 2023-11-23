import React from "react";
import { Quicksand } from "next/font/google";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const quickdsand = Quicksand({ subsets: ["latin"] });
type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps) {
  return (
    <div className={` ${quickdsand.className} `}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
