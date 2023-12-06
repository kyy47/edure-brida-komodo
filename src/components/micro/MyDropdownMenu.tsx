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

type MyDropdownMenuProps = {
  children: React.ReactNode;
  list_menu: MyMenuType[];
  onClickLogout: () => void;
};

function MyDropdownMenu({
  children,
  list_menu,
  onClickLogout,
}: MyDropdownMenuProps) {
  const router = useRouter();

  const handleToLogin = () => {
    router.push("/login");
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
          <ButtonPrimary
            variant="small-solid"
            className="w-full"
            onClick={onClickLogout}
          >
            Logout
          </ButtonPrimary>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MyDropdownMenu;
