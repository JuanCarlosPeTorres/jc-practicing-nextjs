"use client"

import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <header>
          <ul className="flex justify-center space-x-12 py-4">
            <li>
              <a
                href="/welcome"
                className={
                  isActive("/welcome") ? "btn-green-active" : "btn-green"
                }
              >
                Welcome
              </a>
            </li>
            <li>
              <a
                href="/task"
                className={isActive("/task") ? "btn-green-active" : "btn-green"}
              >
                Exercise
              </a>
            </li>
          </ul>
        </header>
    )
}