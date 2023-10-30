# Taro Issue

## @tarojs/cli@3.6.18 热部署模式下（npm run dev:weapp）dist/app.js中的require函数中存在文件路径错误 

执行顺序

```
npm install

npm run dev:weapp
```

微信开发工具中的执行结果

```
VM678:9 app.js错误:
 Error: module 'vendors-node_modules_taro_weapp_prebundle_chunk-ZE6TFWGD_js.js' is not defined, require args is './vendors-node_modules_taro_weapp_prebundle_chunk-ZE6TFWGD_js.js'
    at q (WASubContext.js?t=wechat&s=1698674484898&v=3.1.5:1)
    at n (WASubContext.js?t=wechat&s=1698674484898&v=3.1.5:1)
    at app.js:3
    at WASubContext.js?t=wechat&s=1698674484898&v=3.1.5:1
    at p.runWith (WASubContext.js?t=wechat&s=1698674484898&v=3.1.5:1)
    at q (WASubContext.js?t=wechat&s=1698674484898&v=3.1.5:1)
    at <anonymous>:7:9
    at doWhenAllScriptLoaded (<anonymous>:6400:21)
    at Object.scriptLoaded (<anonymous>:6428:5)
    at Object.<anonymous> (<anonymous>:6453:22)(env: Windows,mp,1.06.2308310; lib: 3.1.5)
```

app.js 文件内容 **问题是require函数里的路径名不正确导致错误出现，原因是这些文件全在prebundle文件夹中，热部署出来的结果应该是../prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-ZE6TFWGD_js.js**

```
"use strict";
require("./vendors-node_modules_taro_weapp_prebundle_chunk-ZE6TFWGD_js.js");
require("./vendors-node_modules_taro_weapp_prebundle_chunk-5BXSJPXD_js.js");
require("./vendors-node_modules_taro_weapp_prebundle_pinia_js.js");
require("./vendors-node_modules_taro_weapp_prebundle_chunk-IK3U7XPA_js.js");
require("./vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-framework-vue3_dist_runtime_js.js");
require("./vendors-node_modules_taro_weapp_prebundle_tarojs_taro_js.js");
require("./vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-platform-weapp_dist_runtime_js.js");
require("./node_modules_taro_weapp_prebundle_tarojs_runtime_js.js");
require("./remoteEntry.js");
require("./node_modules_taro_weapp_prebundle_vue_js.js");

require("./common");
require("./vendors");
require("./taro");
require("./runtime");
…………
```
