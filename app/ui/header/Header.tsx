"use client";

import { hasCookie } from "cookies-next";
import Link from "next/link";
import HeaderItem from "./HeaderItem";
import { authenticatedLinks, unauthenticatedLinks } from "../../lib/header/headerLinks";
import { useState } from "react";
import HeaderProfile from "./HeaderProfile";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(hasCookie('username'))

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          {isAuthenticated && <HeaderItem links={authenticatedLinks}/>}
          {!isAuthenticated && <HeaderItem links={unauthenticatedLinks}/>}
          <li className="nav-item">
            {isAuthenticated && <HeaderProfile />}
          </li>
        </ul>
      </div>
    </nav>
  );
}
