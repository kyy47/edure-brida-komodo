import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import ButtonPrimary from "./ButtonPrimary";
import type { MyMenuType } from "@/constant/list_menu";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

type MyDropdownMenuProps = {
  children: React.ReactNode;
  list_menu: MyMenuType[];
};

function MyDropdownMenu({ children, list_menu }: MyDropdownMenuProps) {
  const router = useRouter();
  const [cookie, setCookie, removeCookie] = useCookies(["token", "user_id"]);

  const handleClickLogout = () => {
    removeCookie("token");
    removeCookie("user_id");
    router.replace("/login");
  };
  const handleClickLogin = () => {
    router.replace("/login");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{children}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="px-1 flex flex-col">
          {list_menu.map((menu) => (
            <DropdownMenuItem key={menu.id}>
              <Link
                href={`/${menu.id}`}
                className="text-black w-full h-full hover:bg-slate-200 cursor-pointer rounded-md py-3 px-2"
              >
                {menu.value}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="mt-2">
          {cookie.token ? (
            <ButtonPrimary
              variant="small-solid"
              className="w-full"
              onClick={handleClickLogout}
            >
              Logout
            </ButtonPrimary>
          ) : (
            <ButtonPrimary
              variant="small-solid"
              className="w-full"
              onClick={handleClickLogin}
            >
              Login
            </ButtonPrimary>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MyDropdownMenu;
