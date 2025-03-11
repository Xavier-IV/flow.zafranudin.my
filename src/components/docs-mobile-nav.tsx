"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { DocsSidebarNav } from "@/components/docs-sidebar-nav";
import { SidebarNavItem } from "@/types/nav";

interface DocsMobileNavProps {
  items: SidebarNavItem[];
}

export function DocsMobileNav({ items }: DocsMobileNavProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 p-0"
          aria-label="Toggle Menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 sm:max-w-xs">
        <SheetHeader className="px-1">
          <SheetTitle>Documentation</SheetTitle>
        </SheetHeader>
        <div className="px-1 py-4">
          <DocsSidebarNav items={items} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
