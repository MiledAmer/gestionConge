import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { classNameProps } from "./type";

export default function AppBarDashboard() {
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
          href="/dashboard"
        >
          <LayoutDashboardIcon className="w-6 h-6" />
          <span className="sr-only">Tableau de bord</span>
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="/dashboard/utilisateurs">
          Utilisateurs
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="/dashboard/agenda">
          Agenda
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="/dashboard/demandes">
          Demandes
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="/pages">
          retour
        </Link>
      </nav>
      <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="flex-1 ml-auto sm:flex-initial">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              placeholder="Rechercher..."
              type="search"
            />
          </div>
        </form>
      </div>
    </header>
  );
}

function LayoutDashboardIcon(props: classNameProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function SearchIcon(props: classNameProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
