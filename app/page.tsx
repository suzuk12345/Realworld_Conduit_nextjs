'use client'

import { useState } from "react";
import GlobalFeed from "./ui/feed/GlobalFeed";
import { hasCookie } from "cookies-next";
import Header from "./ui/header/Header";
import UserFeed from "./ui/feed/UserFeed";

export default function Home() {
  const [feed, setFeed] = useState<string>('global');
  return (
    <>
      <Header />
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  {hasCookie('username') && <li className="nav-item">
                    <button className={feed === 'user' ? 'nav-link active' : 'nav-link'}  onClick={() => setFeed('user')}>
                      Your Feed
                    </button>
                  </li>}
                  <li className="nav-item">
                    <button className={feed === 'global' ? 'nav-link active' : 'nav-link'} onClick={() => setFeed('global')}>
                      Global Feed
                    </button>
                  </li>
                </ul>
              </div>
              {feed === 'global' ? <GlobalFeed /> : <UserFeed />}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

