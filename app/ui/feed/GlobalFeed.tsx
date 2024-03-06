import { apiUrl } from '@/lib/apiUrl';
import { Article } from '@/lib/article/utils';
import { imageUrl } from '@/lib/imageUrl';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

export default function GlobalFeed() {
  const url: string = `${apiUrl}articles/globalFeed`
  const [currentPage, setCurrentPage] = useState<string>(url)
  const fetcher = async (page:string) => {
    const res = await fetch(`${url}?page=${page}`)
    const json = await res.json()
    return json;
  }
  const { data } = useSWR(currentPage, fetcher)
  return (
    <>
      {data && data.data.map((data: Article) => (
        <div key={data.id} className="article-preview">
          <div className="article-meta">
            <Link href={`#`}>
              <img src={`${imageUrl}${data.author.image}`} />
            </Link>
            <div className="info">
              <Link href={`#`} className="author">
                {data.author.username}
              </Link>
              <span className="date">{data.updated_at}</span>
            </div>
          </div>
          <Link
            href={`/article/${data.slug}`}
            className="preview-link"
          >
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <span>Read more...</span>
            <ul className="tag-list">
              {data.tagList && data.tagList.map((tag: string) => (
                  <li key={`${data.slug} ${tag}`} className="tag-default tag-pill tag-outline">
                  {tag}
                  </li>
              ))}
            </ul>
          </Link>
        </div>
      ))}

      <ul className="pagination">
        {data && data.meta.links.map((link: {"url": null | string, "label": string, "active":string}, index: number) => {
          if (link.label == "&laquo; 前" || link.label == "次 &raquo;") {
            return null
          }

          if (link.label == '...') {
            return (
              <li key={`${link.label} ${index}`} className="page-item">
                <div className="page-link">
                  {link.label}
                </div>
              </li>
            )
          } else if (link.url == null || link.active){
            return (
              <li key={`${link.label} ${index}`} className="page-item active">
                <div className="page-link">
                  {link.label}
                </div>
              </li>
            )
          } else {
            return (
              <li key={`${link.label} ${index}`} className="page-item">
                <div className="page-link" onClick={() => setCurrentPage(link.label)}>
                  {link.label}
                </div>
              </li>
            )
          }
        })}
      </ul>
    </>
  )
}
