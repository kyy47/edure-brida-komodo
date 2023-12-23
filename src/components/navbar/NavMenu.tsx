import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { MyMenuType } from "@/constant/list_menu";

type NavMenuProps = {
  list_menu: MyMenuType[];
};
function NavMenu({ list_menu }: NavMenuProps) {
  const { asPath } = useRouter();

  return (
    <div
      id="navbar-alignment"
      className="hs-collapse hidden overflow-hidden transition-all duration-300 grow sm:block "
    >
      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5  bg-slate-400flex justify-center">
        {list_menu.map((item) => (
          <Link
            key={item.id}
            className={`font-medium text-base  hover:text-gray-400 ${
              asPath == "/" + item.id ? "text-cranberry-600" : "text-gray-600"
            }`}
            href={`/${item.id}`}
          >
            {item.value}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavMenu;
