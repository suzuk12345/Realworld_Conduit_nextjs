import { unstable_noStore as noStore } from "next/cache";
import { apiUrl } from "@/lib/apiUrl";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

export type Article = {
  id: number,
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

export const createArticle = async (title: string, description: string, body: string, tagList: string[], router: any) => {
  try {
    const res = await fetch(`${apiUrl}articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        article: {
          title: title,
          description: description,
          body: body,
          tagList: tagList,
        },
      }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      throw new Error(`${res.status}`)
    }
  } catch (error) {
    console.log(error);
  }
};

export const getArticle = async (slug: string): Promise<Article> => {
    noStore();
    const article = await fetch(`${apiUrl}articles/${slug}`);
    const articleObj = await article.json();
    return articleObj.article;
};

export const updateArticle = async (slug: string, title: string, description: string, body: string, router: any) => {
  try {
    const res = await fetch(`${apiUrl}articles/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        article: {
          title: title,
          description: description,
          body: body,
        },
      }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      throw new Error(`${res.status}`)
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteArticle = async (slug: string,  router: any) => {
  const ans = window.confirm('本当に記事を削除しますか?')

  if (ans) {
    try {
      const res = await fetch(`${apiUrl}articles/${slug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      })
      if (res.ok) {
        console.log('削除に成功しました')
        router.push('/')
      } else {
        throw new Error(`${res.status}`)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
