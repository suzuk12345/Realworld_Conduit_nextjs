"use client";

import { apiUrl } from "@/lib/apiUrl";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateEditor() {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [tagList, setTagList] = useState<string[]>([]);

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (!e.nativeEvent.isComposing && e.key === "Enter") {
      setTagList([...tagList, tag]);
      setTag("");
    }
  };

  const deleteTag = (deleteTag: string): void => {
    setTagList(tagList.filter((tag) => tag !== deleteTag));
  };

  const submitArticle = async () => {
    try {
      const response = await fetch(`${apiUrl}/articles`, {
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

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    onChange={(e) => setBody(e.target.value)}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    onKeyDown={addTag}
                  />
                  <div className="tag-list">
                    {tagList.map((tag: string): JSX.Element => {
                      return (
                        <span key={tag} className="tag-default tag-pill">
                          <i
                            className="ion-close-round"
                            onClick={() => deleteTag(tag)}
                          ></i>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  onClick={submitArticle}
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
