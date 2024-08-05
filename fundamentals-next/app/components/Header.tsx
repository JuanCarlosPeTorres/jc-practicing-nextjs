"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <header>
          <ul className="flex justify-center space-x-12 py-4">
            <li>
              <Link
                href="/welcome"
                className={
                  isActive("/welcome") ? "btn-green-active" : "btn-green"
                }
              >
                Welcome
              </Link>
            </li>
            <li>
              <Link
                href="/task"
                className={isActive("/task") ? "btn-green-active" : "btn-green"}
              >
                Exercise
              </Link>
            </li>
          </ul>
        </header>
    )
}