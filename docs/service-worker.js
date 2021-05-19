const CACHE_NAME = 'my-test-cache';
const URLS_TO_CACHE = [
  './assets/for-cache.js',
  './assets/for-cache.css',
  './not-exist.css',
]

addEventListener('install', e => {
  // 2. サービスワーカーをインストール
  // 初回のみ呼ばれる
  console.log('install event');
  console.log(e);
  console.log(Object.keys(e));
  console.log(e.waitUntil);

  // ファイルとキャッシュしてみる
  e.waitUntil(async () => {
    console.log('キャッシュを開く');
    const cache = await caches.open(CACHE_NAME);
    console.log('キャッシュを登録');
    await cache.addAll(URLS_TO_CACHE);
  })
})