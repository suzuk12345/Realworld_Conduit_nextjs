'use client'

import { imageUrl } from "@/lib/imageUrl";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderProfile() {
  const pathName = usePathname();
  const username = getCookie('username')
  const image = getCookie('image')
  return (
  <Link
    className={
      pathName.startsWith("/profile") ? "nav-link active" : "nav-link"
    }
    href={`#`}
  >
    <img src={`${imageUrl}${image}`} className="user-pic" alt="プロフィール画像"/>
    {username}
  </Link>
  )
}
