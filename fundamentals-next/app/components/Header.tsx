"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header>
      <nav>
        <ul className="flex justify-center space-x-12 py-4">
          <li>
            <Link
              href="/"
              className={`btn-green ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/welcome"
              className={`btn-green ${isActive("/welcome") ? "active" : ""}`}
            >
              Welcome
            </Link>
          </li>
          <li>
            <Link
              href="/task"
              className={`btn-green ${isActive("/task") ? "active" : ""}`}
            >
              Exercise
            </Link>
          </li>
          <li>
            <Link
              href="/info"
              className={`btn-green ${isActive("/info") ? "active" : ""}`}
            >
              Suppliers
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
