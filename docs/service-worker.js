const CACHE_NAME = 'my-test-cache';
const URLS_TO_CACHE = [
  '/service-worker-demo/assets/for-cache.js',
  // './assets/for-cache.css',
  // './not-exist.css',
]

addEventListener('install', function (event) {
  // 2. サービスワーカーをインストール
  // 初回のみ呼ばれる
  console.log('install event');

  // ファイルとキャッシュしてみる
  // event.waitUntil(async () => {
  //   console.log('キャッシュを開く');
  //   const cache = await caches.open(CACHE_NAME);
  //   console.log('キャッシュを登録');
  //   await cache.addAll(URLS_TO_CACHE);
  // })
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        console.log('URLS_TO_CACHE', URLS_TO_CACHE);
        return cache.addAll(URLS_TO_CACHE);
      })
  );
})