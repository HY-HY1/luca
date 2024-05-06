"use client";
import { Menu, Search, User } from "lucide-react";
import React from "react";
import Navigation from "./navigation";
import Link from "next/link";
import { useMediaQuery } from "@react-hook/media-query";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return <>{isDesktop ? <DesktopNavbar /> : <MobileNavbar />}</>;
};

const DesktopNavbar = () => {
  return (
    <div className="h-[75px] w-full border-b border-black border-opacity-30">
      <div className="w-[100vw] m-auto">
        <div className="w-full h-full place-content-center m-auto grid grid-cols-3 gap-10">
          <div className="m-auto ">
            <h1 className="m-auto text-2xl py-4">RYZENS</h1>
          </div>
          <div className="m-auto py-4 w-full flex    min-w-[500px] ">
            <Navigation />
          </div>
          <div className="m-auto flex flex-row justify-between w-[80px]">
            <div>
              <Link href={"/login"}>
                <User />
              </Link>
            </div>
            <div>
              <Search />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileNavbar = () => {
  return (
    <div className="h-[75px] w-full border-b border-black border-opacity-30">
      <div className="w-[90vw] m-auto">
        <div className="grid grid-cols-3 gap-4  py-3 ">
          <div className="">
            <Sheet >
              <div className="flex w-full justify-start h-full  50 ">
                <SheetTrigger asChild>
                  <Menu size={48} strokeWidth={1} />
                </SheetTrigger>
              </div>
              <SheetContent  side={"bottom"}>
                <div className="min-h-[70vh]">
                
                  <div className="w-[95vw] m-auto">
                    <div className="grid grid-cols-1">
                      <Link href={'/'}><div className="py-6 border-b border-black border-opacity-30 cursor-pointer">Home</div></Link>
                      <Link href={'/products'}><div className="py-6 border-b border-black border-opacity-30 cursor-pointer">Products</div></Link>
                      <Link href={'/contact'}><div className="py-6 border-b border-black border-opacity-30 cursor-pointer">Contact</div></Link>
                      <Link href={'/About'}><div className="py-6 border-b border-black border-opacity-30 cursor-pointer">About</div></Link>
                      <div></div>
                    </div>
                  </div>
               
                <SheetFooter>
                </SheetFooter>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className=" text-center m-auto">
            <h1 className="text-2xl">
              <Link href={"/"}>RYZENS</Link>
            </h1>
          </div>
          <div className="w-full flex justify-end m-auto ">
           <Link href={'/login'}><User size={32} strokeWidth={2} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
