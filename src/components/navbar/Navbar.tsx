import React from "react";
import Edure from "./Edure";
import NavMenu from "./NavMenu";
import ButtonPrimary from "../micro/ButtonPrimary";
import { useRouter } from "next/router";
import { list_menu } from "@/constant/list_menu";
import MyDropdownMenu from "../micro/MyDropdownMenu";
import { useCookies } from "react-cookie";
function Navbar() {
  const [, , removeCookie] = useCookies();
  const router = useRouter();
  const handleClickLogout = () => {
    removeCookie("token");
    router.replace("/login");
  };

  return (
    <header className="flex flex-wrap sm:justify-start  sm:flex-nowrap z-50 w-full bg-white text-sm py-4 shadow-lg fixed top-0 left-0 right-0 lg:px-5">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Edure />
          <div className="sm:hidden">
            <MyDropdownMenu
              list_menu={list_menu}
              onClickLogout={handleClickLogout}
            >
              <div
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                data-hs-collapse="#navbar-alignment"
                aria-controls="navbar-alignment"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </div>
            </MyDropdownMenu>
          </div>
        </div>
        <NavMenu />
        <ButtonPrimary
          variant="medium-outline"
          className="hidden sm:block "
          onClick={handleClickLogout}
        >
          Logout
        </ButtonPrimary>
      </nav>
    </header>
  );
}

export default Navbar;
