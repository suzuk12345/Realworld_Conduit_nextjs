import { unstable_noStore as noStore } from "next/cache";
import { apiUrl } from "@/lib/apiUrl";

export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  created_at: string;
  updated_at: string;
  author: {
    username: string;
    bio: string;
    image: string;
  };
};

export const getArticle = async (slug: string): Promise<Article> => {
  noStore();
  const article: Response = await fetch(`${apiUrl}/articles/${slug}`);
  const articleObj = await article.json();
  console.log(typeof articleObj.article);
  return articleObj.article;
};
