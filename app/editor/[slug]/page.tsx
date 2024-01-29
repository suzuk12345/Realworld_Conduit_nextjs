import { getArticle } from "@/lib/article/utils";
import UpdateEditor from "@/ui/editor/update";

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  return <UpdateEditor article={article} />;
}
