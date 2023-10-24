import React from "react";

import { list_menu } from "@/constant/list_menu";
import Link from "next/link";
function NavMenu() {
  return (
    <ul className="flex gap-16 text-lg items-center">
      {list_menu.map((menu) => (
        <li key={menu.id}>
          <Link
            href={`/#${menu.id}`}
            className="hover:text-cranberry-500 transition-colors duration-300 ease-linear"
          >
            {menu.value}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavMenu;
