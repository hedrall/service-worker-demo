const VERSION = 10;
const CACHE_NAME = 'my-test-cache';
const URLS_TO_CACHE = [
  '/service-worker-demo/assets/for-cache.js',
  // './assets/for-cache.css',
  // './not-exist.css',
];

// 初回のインストール時のイベント
addEventListener('install', function (event) {
  // 2. サービスワーカーをインストール
  // 初回のみ呼ばれる
  console.log('installイベント', `VERSION ${VERSION}`);

  // ファイルをキャッシュしてみる
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('以下をキャッシュします。', URLS_TO_CACHE);
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// インストール後、移動・更新などを行った際に受け取る
addEventListener('fetch', (event) => {
  console.log('fetchイベント');
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.warn('キャッシュから返却', event.request.url)
        return response;
      }
      return fetch(event.request);
    })
  )
});

// 更新後のservice-worker起動時の設定
addEventListener('activate', event => {
  console.log(`new service-worker VERSION ${VERSION} activated`)
});