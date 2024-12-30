"use client";

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
import { Avatar } from "@nextui-org/avatar";

import { siteConfig } from "@/src/config/site";

export const Navbar = () => {
  return (
    <NextUINavbar className="mt-8" maxWidth="2xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link href={"/"}>
            <Avatar
              className="w-20 h-20 text-large"
              src="https://i.ibb.co.com/XWhj4vF/DALL-E-2024-12-31-00-23-47-A-professional-and-creative-logo-for-a-software-engineer-named-Anik-Roy-T.webp"
            />
          </Link>
        </NavbarBrand>
        <NavbarItem className="hidden lg:block">
          <Button
            className="font-semibold hover:bg-gray-200"
            color="primary"
            radius="full"
            size="md"
            onClick={() => {
              const target = document.getElementById("about");

              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            About
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:block">
          <Button
            className="font-semibold hover:bg-gray-200"
            color="primary"
            radius="full"
            size="md"
            onClick={() => {
              const target = document.getElementById("experience");

              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Experience
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:block">
          <Button
            className="font-semibold hover:bg-gray-200"
            color="primary"
            radius="full"
            size="md"
            onClick={() => {
              const target = document.getElementById("skills");

              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Skills
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:block">
          <Button
            className="font-semibold hover:bg-gray-200"
            color="primary"
            radius="full"
            size="md"
            onClick={() => {
              const target = document.getElementById("projects");

              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Projects
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:block">
          <Button
            className="font-semibold hover:bg-gray-200"
            color="primary"
            radius="full"
            size="md"
            onClick={() => {
              const target = document.getElementById("contact");

              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact
          </Button>
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
          <span className="hover:underline cursor-pointer mr-2">Linkedin </span>
          /
        </NavbarItem>
        <NavbarItem className="hidden sm:flex  ml-2 hover:underline">
          <span className="hover:underline cursor-pointer mr-2">Github </span>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex ml-6">
          {/* <ThemeSwitch /> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-10 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="text-black" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
