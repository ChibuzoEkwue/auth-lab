import { HugeiconsIcon } from "@hugeicons/react";
import { LockPasswordIcon, UserIcon } from "@hugeicons/core-free-icons";
import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="w-full border bg-white">
        <nav className="container mx-auto flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2">
            <HugeiconsIcon
              icon={LockPasswordIcon}
              size={24}
              color="currentColor"
              strokeWidth={1.5}
            />
            <h2 className="text-lg font-semibold">Auth Lab</h2>
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-3">
            <li>
              <Button variant="secondary" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </li>
            <li>
              <Link href="/accounts">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>
                    <HugeiconsIcon
                      icon={UserIcon}
                      size={24}
                      color="currentColor"
                      strokeWidth={1.5}
                    />
                  </AvatarFallback>
                </Avatar>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Page Content */}
      <div className="container mx-auto flex-1 mt-8">{children}</div>
    </main>
  );
};

export default Layout;
