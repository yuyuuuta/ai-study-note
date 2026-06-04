# AI学習ノート（生成AIパスポート対策）

自分専用のAI学習サイト。本質理解を重視し、自分の気づき・たとえを織り込んだ教科書。

## いまの状態
- index.html（トップ）、chapter1/2.html（章目次）が完成
- c1-02-shikumi.html が「図入り・説明増量版の完成見本」
- 残りの記事は Claude Code で拡充予定（CLAUDE.md のTODO参照）

## Claude Codeへの引き継ぎ方
1. このフォルダごとローカルに置く
2. フォルダ内で `claude` を起動（CLAUDE.md が自動で読まれる）
3. 「残りの記事を図入り・説明増量版で作って」と指示

## ローカルで見る
index.html をダブルクリックするだけ（フォルダごと開くこと。CSSが隣にいないとデザインが効かない）

## ネット公開
GITHUB_PAGES_手順.md を参照。Claude Codeに「GitHub Pagesで公開して」と頼むのが最速。

## ファイル構成
- index.html ... トップ
- chapter1.html / chapter2.html ... 章目次
- c1-*.html / c2-*.html ... 各記事
- style.css ... デザイン（編集不要、クラスを使い回す）
- script.js ... アコーディオン・タブ・スクロール演出
- assets/ ... キャラクター画像・図SVG
- CLAUDE.md ... Claude Code用の指示書
- GITHUB_PAGES_手順.md ... 公開手順
