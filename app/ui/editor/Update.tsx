"use client";

import { Article, updateArticle } from "@/lib/article/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Update({ article }: { article: Article }) {
  const router = useRouter()
  const [title, setTitle] = useState<string>(article.title);
  const [description, setDescription] = useState<string>(article.description);
  const [body, setBody] = useState<string>(article.body);

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ul className="error-messages">
              {/* <li>That title is required</li> */}
            </ul>

            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                  ></textarea>
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  onClick={() => updateArticle(article.slug, title, description, body, router)}
                >
                  Update Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
