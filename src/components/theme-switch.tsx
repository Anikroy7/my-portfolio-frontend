"use client";

import { FC } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/src/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base,
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper,
          ),
        })}
      >
        {!isSelected || isSSR ? (
          <SunFilledIcon size={22} />
        ) : (
          <MoonFilledIcon size={22} />
        )}
      </div>
    </Component>
  );
};

/* 




 <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link href={'/'}>
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
              const target = document.getElementById('about');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
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
              const target = document.getElementById('experience');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
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
              const target = document.getElementById('skills');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
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
              const target = document.getElementById('projects');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
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
              const target = document.getElementById('contact');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
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
          <Link href="/allBlogs" className="hover:underline text-black cursor-pointer mr-2">Blogs </Link>/
        </NavbarItem>
        <NavbarItem className="hidden sm:flex  ml-2 hover:underline">
          <Link target="_blank" href={'https://www.linkedin.com/in/anik-roy-a14185241'} className="hover:underline cursor-pointer mr-2">Linkedin </Link>
          /
        </NavbarItem>
        <NavbarItem className="hidden sm:flex  ml-2 hover:underline">
          <Link target="_blank" href={'https://github.com/Anikroy7'} className="hover:underline cursor-pointer mr-2">Github </Link>
        </NavbarItem>

      </NavbarContent>
*/

/* 


"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/src/config/site";
import Link from "next/link";
import { Avatar } from "@nextui-org/avatar";

export const Navbar = () => {
  return (
    <NextUINavbar className="mt-8" maxWidth="2xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link href={'/'}>
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
              const target = document.getElementById('about');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
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
              const target = document.getElementById('experience');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
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
              const target = document.getElementById('skills');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
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
              const target = document.getElementById('projects');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
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
              const target = document.getElementById('contact');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
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
          <Link href="/allBlogs" className="hover:underline text-black cursor-pointer mr-2">Blogs </Link>/
        </NavbarItem>
        <NavbarItem className="hidden sm:flex  ml-2 hover:underline">
          <Link target="_blank" href={'https://www.linkedin.com/in/anik-roy-a14185241'} className="hover:underline cursor-pointer mr-2">Linkedin </Link>
          /
        </NavbarItem>
        <NavbarItem className="hidden sm:flex  ml-2 hover:underline">
          <Link target="_blank" href={'https://github.com/Anikroy7'} className="hover:underline cursor-pointer mr-2">Github </Link>
        </NavbarItem>

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


*/
