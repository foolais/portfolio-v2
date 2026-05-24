"use client";

import { CodeXml, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { dataHeader } from "@/lib/data";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const ContentHeader = () => {
  const pathname = usePathname();

  return (
    <header className="py-4 border-dashed border-b-2 border-primary-foreground bg-background sticky top-0 isolate z-10">
      <div className="content-container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <CodeXml />
          <h1 className="text-2xl font-bold">WahyuEN</h1>
        </div>
        <ul className="items-center justify-between gap-8 hidden md:flex">
          {dataHeader.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Button
                key={item.href}
                size="sm"
                variant={isActive ? "default" : "outline"}
                asChild
              >
                <Link href={item.href}>{item.title}</Link>
              </Button>
            );
          })}
        </ul>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" className="md:hidden block cursor-pointer">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="space-y-2">
            {dataHeader.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <DropdownMenuItem
                  key={item.href}
                  asChild
                  className="cursor-pointer"
                  variant={isActive ? "active" : "default"}
                >
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default ContentHeader;
