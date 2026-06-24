import { Metadata } from "next";
import Link from "next/link";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Accounts",
};
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto flex max-w-5xl gap-8 px-6 pb-10">
      {/* Sidebar */}
      <aside className="w-40 shrink-0">
        <nav className="flex flex-col gap-1">
          <h2 className="mb-4 text-sm font-semibold tracking-wide text-gray-500 uppercase">
            Settings
          </h2>

          <Link
            href="/accounts"
            className="rounded-md py-2 text-sm font-medium hover:bg-gray-100"
          >
            Accounts
          </Link>

          <Link
            href="/accounts/authentication"
            className="rounded-md py-2 text-sm font-medium hover:bg-gray-100"
          >
            Authentication
          </Link>

          <Link
            href="#"
            className="rounded-md py-2 text-sm font-medium hover:bg-gray-100"
          >
            Billing
          </Link>

          <Link
            href="#"
            className="rounded-md py-2 text-sm font-medium hover:bg-gray-100"
          >
            API
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
