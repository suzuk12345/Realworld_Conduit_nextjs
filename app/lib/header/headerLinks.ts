
export type Links = {
  key: string,
  href: string,
  value: string,
}[]

export const authenticatedLinks: Links = [
  { key: "Home", href: "/", value: "Home" },
  {
    key: "Editor",
    href: "/editor",
    value: " New Article",
  },
  {
    key: "Settings",
    href: "#",
    value: " Settings",
  },
];

export const unauthenticatedLinks: Links = [
  { key: "Home", href: "/", value: "Home" },
  {
    key: "Sign in",
    href: "/login",
    value: " Sign in",
  },
  {
    key: "Sign up",
    href: "#",
    value: " Sign up",
  },
];
