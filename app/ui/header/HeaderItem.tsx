import { usePathname } from "next/navigation";
import Link from "next/link";
import { Links } from "@/lib/header/headerLinks";
import { selectIcon } from "@/lib/header/selectIcon";

export default function HeaderItem({ links }: { links: Links}) {
  const pathName = usePathname();

  return (
    links.map((link) => {
      return (
        <li key={link.key} className="nav-item">
          <Link
            className={
              pathName === link.href ? "nav-link active" : "nav-link"
            }
            href={link.href}
          >
            {selectIcon(link.href)}
            {link.value}
          </Link>
        </li>
      );
    })
  )
}
