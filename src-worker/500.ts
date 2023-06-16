export const InternalServerErrorPage = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport"
    content="initial-scale=1,maximum-scale=1, minimum-scale=1, user-scalable=no, width=device-width">
  <meta name="keywords" content="回形针PaperClip,回形针,PaperClip,归档,大象公会,视频,ICU,回形针重症监护室,重症监护室">
  <meta name="description" content="回形针PaperClip重症监护室">
  <!-- Card -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="回形针重症监护室">
  <meta property="og:url" content="https://ipaperclip.icu/">
  <meta property="og:site_name" content="ipaperclip.icu">
  <meta property="og:description" content="He, 这里归档了 回形针PaperClip&混乱博物馆 的视频">
  <meta property="og:locale" content="zh_CN">
  <link rel="icon" href="/favicon.png" />
  <title>回形针重症监护室 | ipaperclip.icu | 500 服务器错误</title>

  <script src="https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.prod.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/naive-ui@2.34.4/dist/index.prod.min.js"></script>
  <!-- <script src="https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/naive-ui@2.34.4/dist/index.min.js"></script> -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.min.css">
</head>

<body>
  <div id="app">
    <div style="max-width: 1055px; padding: 72px 0 15px 0; margin: 0 auto">
      <div style="text-align: center">
        <n-icon size="46" color="#dc3545">
          <i class="bi bi-emoji-frown"></i>
        </n-icon>
        <n-h1 style="font-weight: 700; font-size: 46px; margin: 8px 0">500 服务器错误</n-h1>
        <div class="message">
          <n-p>
            您可通过
            <n-a href="mailto:hi@ipaperclip.icu">hi@ipaperclip.icu</n-a> |
            <n-a href="https://t.me/iPaperClipICUChatBot">Telegram</n-a> |
            <n-a href="https://github.com/iPaperClipICU/ipaperclip.icu/">Github</n-a>
            联系到我们
          </n-p>
        </div>
        <n-button type="primary" ghost size="large" @click="refreshPage">
          <template #icon>
            <n-icon size="18">
              <i class="bi bi-arrow-clockwise"></i>
            </n-icon>
          </template>
          刷新当前页面
        </n-button>
      </div>
    </div>
  </div>
  <style>
    a {
      text-decoration: none !important;
    }

    .message p {
      margin: 0;
      font-size: 16px;
    }

    .message p:last-child {
      margin-bottom: 8px;
    }
  </style>
  <script>
    const App = {
      setup() {
        return {
          refreshPage: () => {
            location.reload();
          }
        }
      }
    }
    const app = Vue.createApp(App);
    app.use(naive);
    app.mount('#app');
  </script>
</body>

</html>
`;