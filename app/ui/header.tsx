"use client";

import { linkSync } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import editorIcon from "./icon/editorIcon";
import settingIcon from "./icon/setteingIcon";

const selectIcon = (href: string) => {
  if (href === "/") {
    return "";
  } else if (href === "/editor") {
    return editorIcon();
  } else {
    return settingIcon();
  }
};

export default function AuthenticatedHeader() {
  const pathName = usePathname();
  const links = [
    { key: "Home", href: "/", value: "Home" },
    {
      key: "Editor",
      href: "/editor",
      value: " Editor",
    },
    {
      key: "Settings",
      href: "/settings",
      value: " Setting",
    },
  ];

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          {links.map((links) => {
            return (
              <li key={links.key} className="nav-item">
                <Link
                  className={
                    pathName === links.href ? "nav-link active" : "nav-link"
                  }
                  href={links.href}
                >
                  {selectIcon(links.href)}
                  {links.value}
                </Link>
              </li>
            );
          })}
          <li className="nav-item">
            <Link
              className={
                pathName.startsWith("/profile") ? "nav-link active" : "nav-link"
              }
              href="/profile/eric-simons"
            >
              <img src="http://i.imgur.com/Qr71crq.jpg" className="user-pic" />
              Eric Simons
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
