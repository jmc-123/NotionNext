# 最新版本与更新日志

> 当前主线：**4.10.3**（见根目录 `package.json`）

## 4.10.3 发布要点

本版本重点优化 Magzine 主题首页与字体资源加载，降低首屏阻塞、减少布局抖动，并补齐构建缓存与 changelog 提醒相关的维护能力。

### Magzine 主题性能与稳定性

- 优化 Magzine 首页首屏图片加载策略，减少 LCP 图片延迟。
- 调整 Magzine 首页图片、广告位与文章卡片布局，降低图片、广告和卡片内容加载时的布局抖动。
- 补齐 Magzine 多个组件的稳定尺寸约束，让列表、信息卡、页脚和文章信息区在资源加载前后更稳定。

### 字体与图标加载优化

- Font Awesome 样式改为延后加载，避免阻塞首屏关键渲染。
- 在用户有交互意图后再加载 Font Awesome，减少非必要首屏资源。
- 预留 Font Awesome 图标布局空间，修复延迟加载期间图标可见性和页面跳动问题。
- 将 Font Awesome 字体文件改为本地自托管，减少第三方字体 CDN 依赖。
- Web Font 仅在配置启用时加载，未配置自定义字体的站点不再请求额外字体资源。

### 构建缓存与数据过滤

- 稳定本地构建缓存文件锁，降低并发构建或重复读取缓存时的异常风险。
- 优化 filtered collection 数据处理，减少无关 Notion collection 数据进入页面数据。
- 补充缓存锁、内部链接转换与 Notion 数据格式相关测试，覆盖本轮缓存和数据过滤调整。

### 文档与维护体验

- 文档站首页和导航加入最近更新提示能力，方便维护者发现新 changelog 与重要文档更新。
- 更新开发者首页、愿景路线图与性能优化计划，记录本轮性能优化和后续维护方向。

### 参与者

- [@tangly1024](https://github.com/tangly1024)：本版本 12 个提交。

### 提交范围

从 `v4.10.2` 到 `v4.10.3`：

- `8f685096` docs: surface changelog unread updates
- `9922643f` Optimize Font Awesome stylesheet loading
- `35f332d5` Improve magzine homepage performance
- `560d04e2` Optimize magzine LCP image loading
- `1e34875b` Stabilize build cache locks and filtered collection data
- `941cf310` Improve magzine image and ad layout stability
- `a9525fff` Defer Font Awesome from critical path
- `2362c9c2` Load web fonts only when configured
- `ff2c5073` Load Font Awesome after user intent
- `1e4e2de4` Reserve Font Awesome icon layout
- `2a1dda67` Fix delayed Font Awesome visibility
- `df71ae22` Self-host Font Awesome for menu icons

### 适用场景

- 使用 Magzine 主题，首页图片、广告位或文章卡片较多的站点。
- 希望减少 Font Awesome / Web Font 对首屏渲染影响的站点。
- Cloudflare Pages、Netlify、Vercel 或自托管 CI 中依赖构建缓存的站点。

### 升级说明

- 正常升级无需新增环境变量。
- 如果站点依赖 Font Awesome 图标，请升级后确认图标显示正常。
- 如果使用自定义 Web Font，请确认相关字体配置仍按预期启用。

### 验证

- `git diff --check`：通过。
- `node -e "const p=require('./package.json'); if (p.version !== '4.10.3') process.exit(1)"`：通过。

## 如何升级

- 站长升级：见 [版本升级指引](../update.md)。
- 构建性能与 Notion API 限流：见 [构建性能与 Notion API 限流](../deploy/build-tuning.md)。
- GitHub Release：[NotionNext Releases](https://github.com/notionnext-org/NotionNext/releases)。

## 历史版本全文

- [V4 历史](./v4-history.md)
- 源站：https://docs.tangly1024.com/article/latest
