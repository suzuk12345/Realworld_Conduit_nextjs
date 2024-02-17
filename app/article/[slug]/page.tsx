import { Article, getArticle } from "@/lib/article/utils";
import ArticleContent from "@/ui/article/ArticleContent";
import ArticleMeta from "@/ui/article/ArticleMeta";
import Header from "@/ui/header/Header";

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug)
  console.log(article)
  return (
  <>
    <Header />
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <ArticleMeta article={article}/>
        </div>
      </div>

      <div className="container page">
        <ArticleContent article={article}/>
        <hr />
        <div className="article-actions">
          <ArticleMeta article={article}/>
        </div>
      </div>
    </div>
    </>
  )
}
