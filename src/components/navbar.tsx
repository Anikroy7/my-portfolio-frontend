"use client";

import dynamic from "next/dynamic";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import Image from "next/image";



import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";

const DynamicLoading = dynamic(() => import("./ui/shared/Loading"), {
  ssr: false,
});

export const Navbar = () => {


  return (
    <NextUINavbar maxWidth="2xl" position="sticky" className="mt-8">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <h2>anikkumeroy7@gmail.com</h2>
        </NavbarBrand>
        <NavbarItem >
          <Button size="md" className="font-semibold" color="primary" radius="full">DOWNLOAD CV</Button>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full gap-0"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex ml-2  ">
         <span className="hover:underline cursor-pointer mr-2">Blogs </span>/
        </NavbarItem>
        <NavbarItem className="hidden sm:flex  ml-2 hover:underline">
        <span className="hover:underline cursor-pointer mr-2">Linkedin </span>/
        </NavbarItem>
        <NavbarItem className="hidden sm:flex  ml-2 hover:underline">
        <span className="hover:underline cursor-pointer mr-2">Github </span>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex ml-6">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>  

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
