import { Article } from "@/lib/article/utils";

export default function ArticleContent({ article }: { article: Article }) {
  return (
    <div className="row article-content">
      <div className="col-md-12">
        <p>{article.body}</p>
        <ul className="tag-list">
          {article.tagList && article.tagList.map((tag) => (
            <li key={tag} className="tag-default tag-pill tag-outline">{tag}</li>
          ) )}
        </ul>
      </div>
    </div>
  )
}
