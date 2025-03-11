"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function MainNav({
  items,
  children,
}: {
  items?: {
    title: string;
    href: string;
    disabled?: boolean;
    exact?: boolean;
  }[];
  children?: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    {
                      "text-foreground font-semibold": item.exact
                        ? pathname === item.href
                        : pathname === item.href ||
                          pathname.startsWith(`${item.href}/`),
                      "text-foreground/60": item.exact
                        ? pathname !== item.href
                        : !pathname.startsWith(`${item.href}`),
                      "cursor-not-allowed opacity-80": item.disabled,
                    }
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      {children}
    </div>
  );
}
