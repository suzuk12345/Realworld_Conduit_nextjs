# 目次

- [目次](#目次)
- [Conduit](#conduit)
- [使用技術](#使用技術)
- [機能](#機能)
    - [実装済み](#実装済み)
    - [未実装](#未実装)
- [セットアップ](#セットアップ)
- [主要ディレクトリ/ファイル](#主要ディレクトリファイル)
- [認証について](#認証について)
- [Vercel](#vercel)

# Conduit

ブログプラットフォームを作る [RealWorld](https://github.com/gothinkster/realworld/tree/main) という OSS のプロジェクトがあります。RealWorld は実世界と同じ機能を持つプラットフォームを作ることで、学習したいフレームワークの技術を習得することを目的としたプロジェクトです。

Conduit は [RealWorld](https://demo.realworld.io/#/) で作成する Medium.com のクローンサイトです。
詳細な仕様については [Specs/Backend Specs](https://realworld-docs.netlify.app/docs/specs/backend-specs/introduction), [Specs/Frontend Specs](https://realworld-docs.netlify.app/docs/specs/frontend-specs/templates)で確認できます。

今回は Conduit と同じ見た目・機能のサイトを `Next.js` で実装しています。

バックエンドAPIのディレクトリは[こちら](https://github.com/suzuk12345/RealWorld_Conduit)

# 使用技術
- Next.js 14.1.0
- Node.js 20.11.1
- TypeScript 5.2.2

# 機能

### 実装済み

-   JWT 認証
-   ユーザー CRU-
-   記事 CRUD
-   タグ機能
-   ダミー生成
-   記事一覧ページネーション

### 未実装

-   記事へのコメント CR-D
-   記事お気に入り
-   記事マークダウン反映
-   ユーザーフォロー
-   テスト
-   バリデーション
-   CookieのHttpOnly,Secure,SameSite属性付与

# セットアップ

リポジトリのクローンを作成し、プロジェクトフォルダーに移動

```bash
git clone https://github.com/suzuk12345/realworld_conduit_nextjs.git
cd realworld_conduit_nextjs
```

コンテナ起動

```bash
docker-compose build
docker-compose up -d
```

バックエンドAPIのコンテナが起動しているのを確認してください。

バックエンドAPIのディレクトリは[こちら](https://github.com/suzuk12345/RealWorld_Conduit)

セットアップ完了 アプリにアクセスできます。
- http://localhost:3000/

# 主要ディレクトリ/ファイル

- ホーム 記事一覧(全体・ログインユーザーのみ)
  - [app/page.tsx](https://github.com/suzuk12345/realworld_conduit_nextjs/blob/main/app/page.tsx)
- 記事閲覧ページ
  - [app/article/[slug]/page.tsx](https://github.com/suzuk12345/realworld_conduit_nextjs/tree/main/app/article/%5Bslug%5D)
- 記事新規作成ページ
  - [app/editor/page.tsx](https://github.com/suzuk12345/realworld_conduit_nextjs/tree/main/app/editor)
- 記事編集ページ
  - [app/editor/\[slug\]/page.tsx](https://github.com/suzuk12345/realworld_conduit_nextjs/tree/main/app/editor/%5Bslug%5D)
- ログインページ
  - [app/login](https://github.com/suzuk12345/realworld_conduit_nextjs/tree/main/app/login)
- 関数や型定義置き場
  - [app/lib](https://github.com/suzuk12345/realworld_conduit_nextjs/tree/main/app/lib)
- jsxを返すUIコンポーネント置き場
  - [app/ui](https://github.com/suzuk12345/realworld_conduit_nextjs/tree/main/app/ui)

# 認証について
ログインでJWTトークン発行
↓
期限付きでCookieに保存
↓
Cookieの有無をMiddlewareで確認してUIの出し分け(ヘッダー、記事の編集・削除ボタン、ログイン中ユーザーの記事一覧取得)・ページへのアクセス認可
↓
HTTPヘッダーにトークンを付与してリクエスト送信
↓
バックエンドのMiddlewareで認証・ユーザー識別処理

# Vercel

アプリはVercelにデプロイ済みです。以下URLからアクセスできます。
- https://realworld-conduit-nextjs.vercel.app/
