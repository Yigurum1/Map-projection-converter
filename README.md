# Atlas — 地図投影法変換 / Map Projection Converter

GitHub Pages 公開先 / Deployment target: https://yigurum1.github.io/Map-projection-converter/

## GitHub Pages

Repository Settings → Pages → Build and deployment → Source を GitHub Actions に設定してください。
初回設定後は Actions → Deploy site to GitHub Pages → Run workflow で公開できます。
以降は main ブランチの dist/ への変更で自動更新します。配信対象は dist/ のみです。
Set Settings → Pages → Source to GitHub Actions, then run the deployment workflow once. Future changes to dist/ on main deploy automatically.

## 起動方法 / Run locally

Python 3 がある環境で、このフォルダー内から実行してください。

    python3 -m http.server 8000 --directory dist

ブラウザーで http://localhost:8000 を開きます。ビルドやnpm installは不要です。
Web Workerとサンプルデータの読み込みのため、HTMLを直接開くのではなくHTTPサーバーを使用してください。
Serve the dist directory with any static HTTP server. No build step is required.

## 内容 / Contents

- dist/: HTML、CSS、JavaScript、投影計算、翻訳、同梱素材。静的Webホスティングではこの内容を配信します。
- test.cjs / test-worker.cjs: Node.jsから node test.cjs および node test-worker.cjs で実行する投影変換検証。

84投影法、中央経線・中心緯度、標準緯線、切り抜き範囲、PNG出力、設定JSON保存・復元、経緯線表示、ライト／ダーク、12言語の主要UIに対応しています。
詳しい説明と一部のエラー文は日本語以外では英語表示です。画像処理はブラウザー内で行います。
入力投影法とパラメーターは手動で指定します。元画像にない地域は復元できません。

## 第三者の素材・ライセンス / Third-party notices

- D3: dist/vendor/d3-LICENSE
- d3-geo-projection: dist/licenses.txt
- Lucide icons: dist/vendor/lucide/LICENSE
- Sample map: Natural Earth (public domain), distributed via world-atlas.

同梱の第三者ライセンスを保持してください。
開発環境のGit履歴・認証情報・配信用の内部設定は含みません。
