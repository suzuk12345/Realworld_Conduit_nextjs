'use client'

import { Article, deleteArticle } from "@/lib/article/utils";
import { imageUrl } from "@/lib/imageUrl";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ArticleMeta({ article }: { article: Article }) {
  const router = useRouter()
  const author = article.author;
  return (
    <div className="article-meta">
      <Link href={`#`}>
        <img src={`${imageUrl}${author.image}`} />
      </Link>
      <div className="info">
        <Link href={`#`} className="author">
        {author.username}
        </Link>
        <span className="date">{article.updated_at}</span>
      </div>
      { getCookie('username') == author.username && (
        <>
          <button className="btn btn-sm btn-outline-secondary" onClick={() => router.push(`/editor/${article.slug}`)}>
            <i className="ion-edit"></i> Edit Article
          </button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => deleteArticle(article.slug, router)}>
            <i className="ion-trash-a"></i> Delete Article
          </button>
        </>
      )}
    </div>
  )
}
