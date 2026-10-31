# ANAゼミ 大学祭メニュー

大学祭のドーナツ・ドリンク販売ブース向けWebメニューです。iPhone・Androidのブラウザーから利用できるレスポンシブWebアプリとして開発します。

## 技術構成

- Next.js App Router / TypeScript
- Tailwind CSS 4（画面スタイルは `app/globals.css`）
- Supabase（売り切れ状態の共有・リアルタイム反映で使用予定）
- Netlify（公開先）

## ローカル起動

Node.js 20.9以降が必要です。

```bash
npm install
npm run dev
```

ブラウザーで <http://localhost:3000> を開きます。スマートフォンから確認する場合は、PCと同じWi-Fiに接続し、次のコマンドで開発サーバーを起動して、PCのローカルIPアドレスとポート3000へアクセスします。必要に応じてWindowsファイアウォールでNode.jsの通信を許可してください。

```bash
npm run dev -- --hostname 0.0.0.0
```

## 現在の実装状況

- 商品マスター: ドーナツ5種類、トッピング9種類、ドリンク8種類
- メニュー画面: 3カテゴリ切り替え、スマートフォン・タブレット・PC向けレイアウト
- 価格設定: 基本価格とホイップ対象ドリンクは未設定のまま管理
- 商品画像、カスタマイズ、カート、スタッフ機能、Supabase連携はこれから実装

## 環境変数

Supabase連携を実装する段階で `.env.local` を作成します。値はREADMEやソースコードへ記載せず、`.env.local` とホスティングサービスの環境変数設定で管理します。

## 確認コマンド

```bash
npm run lint
npm run build
```

## Netlifyへの公開

1. <https://app.netlify.com/> にログインし、「Add new site」からGitHubリポジトリ `kanekane819/zemi.menu` を選びます。
2. ビルドコマンドに `npm run build` を設定します。Next.jsの公開ディレクトリはNetlifyのNext.jsアダプターが処理するため、通常は追加設定不要です。
3. デプロイが完了すると `*.netlify.app` のURLが発行され、リンクを知っている人がアクセスできます。

Netlify Freeは月額0ドルの利用枠付きプランです。利用枠を使い切るとサービスに制限がかかる場合があります。支払いを避ける場合は有料プランやクレジットの自動追加を有効にしないでください。

Supabase連携を実装した後は、その公開用環境変数をNetlifyのサイト設定にも登録します。
