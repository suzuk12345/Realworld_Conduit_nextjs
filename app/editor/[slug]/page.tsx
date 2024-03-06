'use client'

import { getArticle } from "@/lib/article/utils";
import Update from "@/ui/editor/Update";
import Header from "@/ui/header/Header";

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  return (
    <>
      <Header />
      <Update article={article} />
    </>
  )
}
