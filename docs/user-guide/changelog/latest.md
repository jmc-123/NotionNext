# 最新版本与更新日志

> 当前主线：**4.10.7**（见根目录 `package.json`）

## 4.10.7 发布要点

本版本将主题颜色定制从 Tailwind 类名覆盖，过渡到主题语义色变量与调色板方案。早期使用 TailwindCSS 是为了快速开发；现在主题框架已经成熟，后续更适合通过 `*_COLOR_*` 配置项表达主色、背景、文字、边框等语义色，便于用户在 Notion Config 中快速调色，也避免 `.bg-indigo-600` 这类工具类被覆盖后产生语义混淆。

### 主题调色板

- 全局主题工具新增当前主题调色板，展示每个主题可覆盖的色号变量、CSS 变量名、默认色值和复制入口。
- 25 个内置主题均已在 `conf/themeSwitch.manifest.js` 声明 palette；切换主题后即可查看该主题的可配置色号。
- Fuwari 保留原有色相模型，调色板显示 `FUWARI_THEME_COLOR_HUE`，复制值为数字色相，避免破坏现有配置。
- Endspace、Heo、Claude 等多色主题提供更完整的背景、文字、深色模式主色、辅助强调色、边框等变量；Fuwari、Hexo、Medium 等单主色主题保持轻量色板。

### 配置与兼容

- 新增或整理各主题的 `*_COLOR_*` 配置项，用户可在 Notion Config 表、环境变量或主题 `config.js` 中覆盖。
- 保留既有 TailwindCSS 与旧配置的渲染路径，不要求用户立即迁移；推荐新调色优先使用主题色变量。
- 补充主题迁移指南与主题色 token roadmap，后续新增主题必须首版声明 `*_COLOR_*` 与 manifest 调色板。
- 各主题文档补充调色说明，说明如何从全局主题工具复制配置项并在 Notion Config 中覆盖。

### 验证

- Babel parser 定向解析：通过。
- `npx eslint` 定向检查主题色相关文件：通过。
- manifest smoke check：25 个内置主题 palette 覆盖率 100%。
- `yarn docs:site:build`：通过。
- `git diff --check`：通过，仅保留 Windows 工作区 LF/CRLF 提示。

## 4.10.6 发布要点

本版本继续收敛 `v4.10.5` 之后主线上的主题修复、NotionComments 体验增强、SEO/robots 稳定性、文档 AI 助手和贡献文档更新。

### 主题与页面修复

- 改进 NotionComments 评论体验。
- 修复 Magzine 首页首屏加载稳定性。
- 修复 Starter 主题配置默认值和第四个功能按钮文案。
- 修复 Hexo 主题 AOS 动画在初次加载和路由切换后的刷新问题。
- 修复 Endspace 自定义菜单图标和二级菜单展开。
- 修复 GitBook 返回顶部按钮对齐。
- 移除错误的 theme microdata，减少 SEO 结构化数据误报。
- 保留 synced block 子内容，避免公告等内容丢失。

### 部署、文档与站点数据

- 避免覆盖用户自定义 `robots.txt`。
- 稳定 docs chat 的消息结构、fallback、legacy embed 和版本展示。
- 修复隐藏文章仍参与 tag 计数的问题。
- 替换 README 中失效的 Star History 图表。
- 增加 Cloudflare Pages chat endpoint 文档。
- 补充 AI 助手回答约束、AI 辅助 bug 贡献流程和主题切换入门说明。

### 自 v4.10.5 以来的提交

- `feat: improve Notion comments experience`
- `fix(magzine): stabilize first viewport loading (#4250)`
- `docs: replace broken star history chart`
- `docs: clarify theme switch setup for beginners`
- `docs: normalize migrated callout blocks`
- `docs: add vitepress ai assistant widget`
- `docs: add cloudflare pages chat endpoint`
- `fix(starter): use theme config defaults`
- `fix hexo aos refresh after route change`
- `docs: fix cloudflare docs chat deployment`
- `fix: preserve synced block children in notice content (#4253)`
- `docs: stabilize ai assistant chat requests`
- `docs: constrain ai assistant answers`
- `fix docs chat fallback and legacy embeds`
- `chore: show docs chat version`
- `chore(release): bump package.json to 4.10.6 [skip-version] (#4258)`
- `fix: guard docs chat message parts`
- `fix: avoid overwriting custom robots.txt (#4260)`
- `fix(endspace): support submenu expansion`
- `fix(gitbook): align jump to top button`
- `fix aos refresh after initial load (#4263)`
- `docs: guide ai-assisted bug contributions (#4264)`
- `docs: clarify ai agent bug workflow (#4265)`
- `fix: stabilize robots, docs chat, and hidden tag counts (#4266)`
- `fix(seo): remove incorrect theme microdata (#4276)`
- `fix: hexo theme aos refresh (#4274)`
- `fix(starter): use fourth feature button text (#4275)`

### 验证

- `git diff --check`

## 如何升级

- 站长升级：见 [版本升级指引](../update.md)。
- 构建性能与 Notion API 限流：见 [构建性能与 Notion API 限流](../deploy/build-tuning.md)。
- GitHub Release：[NotionNext Releases](https://github.com/notionnext-org/NotionNext/releases)。

## 历史版本全文

- [V4 历史](./v4-history.md)
- 源站：https://docs.tangly1024.com/article/latest
