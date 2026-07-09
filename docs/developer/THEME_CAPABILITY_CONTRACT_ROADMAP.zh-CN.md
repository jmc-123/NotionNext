# NotionNext 主题能力契约与接口化路线图

本文是主题系统接口化的设计规划文档。目标不是立刻重写主题系统，而是先定义一套稳定的架构机制，让框架能力、主题能力和迁移规范有统一入口。

## 1. 背景与目标

NotionNext 当前已经有统一的主题目录和动态布局加载机制：

- `themes/<theme>/index.js` 暴露 `LayoutBase`、`LayoutSlug`、`LayoutIndex` 等页面布局。
- `themes/<theme>/config.js` 放主题级开关。
- `components/` 与 `lib/utils/` 已经沉淀出部分跨主题能力，例如 `NotionPage`、`ShareBar`、`Comment`、`resolveArticleCopyrightText`。

问题在于：公共能力虽然存在，但每个主题自行决定在哪里引入、如何命名开关、是否支持默认行为。随着主题增多，迁移和维护会遇到三类成本：

1. 新主题作者不知道哪些能力必须接入，哪些可选。
2. 框架能力升级时，需要逐个主题找实现点。
3. 用户看到同一功能在不同主题下表现不一致，例如文章版权声明、分享、评论、目录、相邻文章。

本文目标：

- 定义一套“主题能力契约”，把公共能力从主题实现细节中抽出来。
- 给每类能力定义框架入口、主题声明、默认实现、可覆盖方式和验收标准。
- 形成可分阶段执行的 roadmap，避免一次性大重构。

## 2. 设计原则

1. **能力契约优先，不做重型插件系统**
   主题仍然是 React/Next.js 主题，不引入新的插件运行时、生命周期管理器或大型抽象层。

2. **默认实现放框架，自定义外观留主题**
   框架负责数据解析、开关判断、默认渲染和空态处理；主题只在需要视觉差异时覆盖组件。

3. **声明式接入，主题自己选择支持范围**
   主题通过能力清单声明支持哪些能力，不支持的能力不强制渲染。

4. **先文章页，后全站能力**
   文章页功能重复最多、用户感知最强，优先抽象；首页、侧栏、营销页和特殊主题后置。

5. **兼容现有主题，不破坏已有布局**
   第一阶段只新增入口和文档，不要求所有主题立即迁移。

6. **一个能力只保留一个框架级数据契约**
   例如文章版权字段统一使用 `post.copyright`，不同主题可以换展示样式，但不要发明主题私有字段。

## 推荐长期架构

长期最稳妥的方向不是把所有主题改造成统一 `ThemeInterface`，而是采用：

```text
Core Data Contract
  -> Core Feature Registry
  -> Theme Capability Manifest
  -> ThemeFeature / Slot
  -> Default Component 或 Theme Override
  -> Theme Layout
```

这套结构把职责拆开：

| 层级 | 归属 | 职责 | 不负责 |
| --- | --- | --- | --- |
| Core Data Contract | 框架 | 定义 `post`、`siteInfo`、`notice`、`prev`、`next`、`toc` 等稳定数据字段 | 不定义主题视觉 |
| Core Feature Registry | 框架 | 定义能力名、默认开关、默认组件、所需数据 | 不绑定某个主题 |
| Theme Capability Manifest | 主题 | 声明本主题支持哪些能力、使用哪个配置键、是否覆盖组件 | 不重写公共业务规则 |
| ThemeFeature / Slot | 框架 + 主题布局 | 在主题布局中放置能力入口 | 不强行规定入口位置 |
| Default Component | 框架 | 提供可工作的默认渲染和空态 | 不追求所有主题的最佳视觉 |
| Theme Override | 主题 | 覆盖视觉和局部交互 | 不改变字段语义和开关规则 |

这种架构比“完整接口化主题”更适合 NotionNext：

- 主题数量多，视觉差异大，布局不应该被统一接口束缚。
- 公共能力重复多，业务规则应该由框架统一维护。
- 新主题可以先用默认组件跑通，再逐步替换视觉组件。
- 老主题可以渐进迁移，不需要一次性大改。

不推荐的方向：

- 为所有主题定义一个巨大 `ThemeInterface`。
- 要求每个主题实现所有方法。
- 为单个主题场景抽象框架能力。
- 把主题系统升级成独立插件平台后再解决现有重复问题。

## 3. 架构机制

建议新增一层“主题能力层”，位于现有主题动态加载层和主题布局之间。

```text
Notion 数据层
  -> pages 路由数据组装
  -> themes/theme.js 动态选择主题布局
  -> 主题能力契约层
  -> 框架默认能力组件 / 主题自定义能力组件
  -> themes/<theme>/index.js 页面布局
```

### 3.1 核心文件建议

```text
lib/theme/
  capabilityRegistry.js        # 框架内置能力定义
  resolveThemeCapability.js    # 合并框架默认值与主题声明
  ThemeFeature.js              # 统一渲染入口

components/theme-features/
  ArticleCopyright.js
  ArticleShare.js
  ArticleComment.js
  ArticleAdjacent.js
  ArticleToc.js
  Announcement.js

themes/<theme>/
  capabilities.js              # 主题能力声明，可选
```

第一阶段可以更小：只新增 `ThemeFeature.js`、`capabilityRegistry.js` 和 `themes/<theme>/capabilities.js`，默认组件先复用现有全局组件。

### 3.2 主题能力声明

示例：

```js
// themes/fuwari/capabilities.js
import ArticleCopyright from './components/ArticleCopyright'

const capabilities = {
  articleCopyright: {
    enabled: true,
    configKey: 'FUWARI_ARTICLE_COPYRIGHT',
    component: ArticleCopyright
  },
  articleShare: {
    enabled: true,
    configKey: 'FUWARI_ARTICLE_SHARE'
  },
  articleComment: {
    enabled: true,
    configKey: 'FUWARI_ARTICLE_COMMENT'
  },
  articleAdjacent: {
    enabled: true,
    configKey: 'FUWARI_ARTICLE_ADJACENT'
  },
  articleToc: {
    enabled: true,
    configKey: 'FUWARI_ARTICLE_TOC'
  }
}

export default capabilities
```

约定：

- `enabled`: 主题是否支持该能力。
- `configKey`: 读取开关的配置键，仍通过 `siteConfig(key, defaultValue, CONFIG)` 走现有配置系统。
- `component`: 主题自定义组件；缺省时使用框架默认组件。
- `mode`: 可选，用于 `true | false | custom` 这类能力模式。

### 3.3 框架能力注册

示例：

```js
const capabilityRegistry = {
  articleCopyright: {
    defaultEnabled: false,
    defaultConfigKey: 'ARTICLE_COPYRIGHT',
    defaultComponent: DefaultArticleCopyright,
    props: ['post', 'locale'],
    dataContract: ['post.copyright', 'locale.COMMON.COPYRIGHT_NOTICE']
  }
}
```

框架注册表只定义“这个能力是什么”，不定义主题视觉。

### 3.4 统一渲染入口

示例：

```jsx
<ThemeFeature
  name='articleCopyright'
  theme='fuwari'
  themeConfig={CONFIG}
  post={post}
  locale={locale}
/>
```

`ThemeFeature` 负责：

1. 读取当前主题能力声明。
2. 合并框架默认能力定义。
3. 根据 `enabled`、`configKey`、`mode` 判断是否渲染。
4. 优先渲染主题自定义组件，否则渲染框架默认组件。
5. 空数据时返回 `null`。

## 4. 能力分类

### 4.1 P0：文章页基础能力

这些能力最适合第一批接口化。

| 能力 | 框架入口 | 数据契约 | 默认实现 | 主题是否可覆盖 |
| --- | --- | --- | --- | --- |
| Notion 正文 | `articleBody` | `post`, `blockMap` | `NotionPage` | 一般不建议 |
| 文章锁 | `articleLock` | `lock`, `validPassword` | 默认锁定提示 | 是 |
| 文章版权 | `articleCopyright` | `post.copyright`, `locale.COMMON.COPYRIGHT_NOTICE` | 默认版权声明 | 是 |
| 分享栏 | `articleShare` | `post` | `ShareBar` | 是 |
| 评论区 | `articleComment` | `post`, 评论配置 | `Comment` | 是 |
| 上下篇 | `articleAdjacent` | `prev`, `next` | 默认相邻文章 | 是 |
| 目录 | `articleToc` | `post.toc` | 默认 TOC / Drawer | 是 |

### 4.2 P1：内容列表与页面能力

| 能力 | 数据契约 | 说明 |
| --- | --- | --- |
| 文章卡片 | `post` | 用于首页、分类、标签、搜索结果 |
| 分页 | `page`, `postCount`, `POSTS_PER_PAGE` | 支持 page 和 scroll 两种模式 |
| 归档 | `archivePosts` | 年月分组或普通列表 |
| 分类页 | `category`, `posts` | 统一空态和标题 |
| 标签页 | `tag`, `posts` | 统一空态和标题 |
| 搜索结果高亮 | `keyword`, `posts` | 统一高亮入口 |

### 4.3 P2：站点外壳与运营能力

| 能力 | 数据契约 | 说明 |
| --- | --- | --- |
| 菜单 | `customNav`, `customMenu` | 主题必须支持数据驱动菜单 |
| 公告 | `notice` | 默认用 `NotionPage` 渲染 |
| 侧栏插槽 | `rightAreaSlot` | 插件、广告、统计等复用入口 |
| 最新文章 | `latestPosts` | 列表渲染可主题化 |
| 分类/标签小组件 | `categoryOptions`, `tagOptions` | 侧栏或抽屉使用 |
| 统计组件 | 站点统计配置 | Busuanzi、Analytics 等 |
| 广告位 | 广告配置 | 默认空态，不强制启用 |

### 4.4 P3：特殊主题能力

这些能力暂不进入第一批契约，只保留文档约定：

- Landing / Starter / Proxio 等营销页模块。
- Game / Commerce / Nav / Photo 等场景化布局。
- 主题专属动效、播放器、背景特效。
- 主题色自定义面板。
- 高度定制的 Hero、产品卡、导航站卡片。

这些能力变化大，先用主题私有实现，等多个主题反复复用后再抽象。

## 5. 功能接入规范

### 5.1 配置命名

短期兼容现有主题前缀：

```text
HEO_ARTICLE_COPYRIGHT
HEXO_ARTICLE_COPYRIGHT
FUWARI_ARTICLE_COPYRIGHT
```

长期新增框架级默认键：

```text
ARTICLE_COPYRIGHT
ARTICLE_SHARE
ARTICLE_COMMENT
ARTICLE_ADJACENT
ARTICLE_TOC
```

读取优先级：

1. 主题能力声明中的 `configKey`。
2. 框架默认配置键。
3. 能力注册表的 `defaultEnabled`。

### 5.2 数据字段

公共能力必须复用统一字段：

| 能力 | 字段 |
| --- | --- |
| 版权声明 | `post.copyright` |
| 标题 | `post.title` |
| 链接 | `post.href` / `post.slug` |
| 封面 | `post.pageCover` / `post.pageCoverThumbnail` |
| 分类 | `post.category` |
| 标签 | `post.tagItems` |
| 目录 | `post.toc` |
| 上下篇 | `prev`, `next` |

禁止为同一框架能力新增主题私有字段，除非是主题视觉配置。

### 5.3 默认组件要求

框架默认组件必须满足：

- 没有数据时返回 `null`。
- 不依赖特定主题 CSS。
- 接受 `className` 或 `slotClassName`。
- 支持 `locale`。
- 不读取主题私有配置。

### 5.4 主题覆盖要求

主题自定义组件必须满足：

- 接收与默认组件相同的核心 props。
- 不改变数据语义。
- 不绕过框架开关。
- 不直接依赖其它主题目录下的组件。

## 6. 文章版权声明设计样例

文章版权是第一批最小落地样例。

### 6.1 当前能力

框架已有 `resolveArticleCopyrightText({ post, locale, mode })`：

- `mode === false` 或 `'false'`：不显示。
- `mode === 'custom'`：仅 `post.copyright` 有内容时显示。
- 其它情况：优先显示 `post.copyright`，否则显示 `locale.COMMON.COPYRIGHT_NOTICE`。

### 6.2 契约化后

框架定义：

```js
articleCopyright: {
  defaultEnabled: false,
  defaultConfigKey: 'ARTICLE_COPYRIGHT',
  dataContract: ['post.copyright', 'locale.COMMON.COPYRIGHT_NOTICE'],
  modes: [true, false, 'custom']
}
```

主题声明：

```js
articleCopyright: {
  enabled: true,
  configKey: 'FUWARI_ARTICLE_COPYRIGHT',
  component: ArticleCopyright
}
```

布局调用：

```jsx
<ThemeFeature name='articleCopyright' post={post} locale={locale} />
```

这样新增主题只需要声明是否支持版权声明，不需要重新理解版权文本解析规则。

## 7. Roadmap

### Phase 0：文档与能力盘点

目标：不改运行时代码，先统一认知。

任务：

- 完成本文档。
- 在主题迁移指南中引用能力契约。
- 列出现有主题对 P0 能力的支持矩阵。
- 确认第一批试点主题：建议 `fuwari`、`heo`、`hexo`、`matery`。

验收：

- 维护者能根据文档判断一个功能是否应该进入框架能力层。
- 新主题作者能根据能力表补齐文章页功能。

### Phase 1：文章版权能力试点

目标：用最小改动验证机制。

任务：

- 新增 `ThemeFeature` 的最小版本。
- 新增 `articleCopyright` 能力注册。
- 新增默认 `DefaultArticleCopyright`。
- 迁移 1 个主题到能力入口，建议从 `fuwari` 或 `hexo` 开始。
- 保留主题原有视觉组件。

验收：

- 试点主题版权声明行为不变。
- `true / false / custom` 三种模式可验证。
- 未迁移主题不受影响。

### Phase 2：文章页 P0 能力扩展

目标：把文章页重复功能集中到统一入口。

任务：

- 接入 `articleShare`。
- 接入 `articleComment`。
- 接入 `articleAdjacent`。
- 接入 `articleToc`。
- 补一个 P0 能力矩阵文档。

验收：

- 至少 3 个代表主题走能力入口。
- 新主题创建时可以复制能力声明，不必重新拼装文章页基础功能。

### Phase 3：主题迁移规范升级

目标：让新主题默认按能力契约开发。

任务：

- 更新 `THEME_MIGRATION_GUIDE.zh-CN.md` 和英文版。
- 更新 `themes/example` 或新增更轻量的 `themes/example-capability` 示例。
- 增加主题 PR checklist。
- 增加能力声明模板。

验收：

- 新主题 PR 能明确列出支持哪些能力。
- 维护者 review 时不再靠人工记忆检查文章页功能。

### Phase 4：P1/P2 能力按需抽象

目标：只抽象已反复出现的公共能力。

优先候选：

- 公告 `announcement`
- 侧栏插槽 `sideSlot`
- 文章卡片 `postCard`
- 分页 `pagination`
- 分类/标签小组件 `taxonomyWidget`

暂缓：

- Landing 页模块。
- Commerce 产品模块。
- Game 主题游戏模块。
- Photo 图库交互。

验收：

- 每个新增能力至少有两个主题复用需求。
- 没有为单个主题写框架抽象。

### Phase 5：自动化检查与兼容层

目标：降低长期维护成本。

任务：

- 增加能力声明校验脚本。
- 在 CI 中检查主题是否导出必要布局。
- 可选：检查主题能力声明引用的组件是否存在。
- 可选：生成主题能力矩阵文档。

验收：

- 新主题缺少关键声明时能被提示。
- 主题支持能力可以被文档自动汇总。

## 工作拆分清单

| 编号 | 工作包 | 类型 | 建议范围 | 依赖 | 产出 |
| --- | --- | --- | --- | --- | --- |
| W0 | 能力契约文档确认 | 文档 | 本文档 + 迁移指南引用 | 无 | 讨论基线 |
| W1 | P0 能力矩阵 | 文档/脚本可选 | 统计各主题文章页能力 | W0 | 主题能力矩阵 |
| W2 | `articleCopyright` 最小试点 | 代码 | 1 个主题 | W0 | `ThemeFeature` 最小实现 |
| W3 | 默认文章版权组件 | 代码 | 框架组件 | W2 | 可复用默认 UI |
| W4 | 试点主题迁移 | 代码 | `fuwari` 或 `hexo` | W2/W3 | 行为不变的主题接入 |
| W5 | 分享/评论能力接入 | 代码 | 1-2 个主题 | W4 | P0 能力扩大 |
| W6 | TOC 能力调研 | 文档/代码 | 先不统一视觉 | W4 | TOC 的入口边界 |
| W7 | 新主题模板更新 | 文档/示例 | 主题迁移指南 + example | W4 | 新主题按能力声明开发 |
| W8 | 能力声明校验 | 脚本 | 只检查存在性 | W5 | 低成本 CI 检查 |

建议顺序：

1. 先完成 W0/W1，避免代码先行导致抽象不稳。
2. W2/W3/W4 合成一个小试点 PR。
3. W5 之后再判断 `ThemeFeature` API 是否足够。
4. W6 单独处理，不要和评论/分享混在一个 PR。
5. W8 最后做，等能力声明格式稳定后再写校验。

## 8. 开发改动量评估

### 8.1 最小试点

范围：只做 `articleCopyright`。

预计改动：

- 新增 2-3 个框架文件。
- 新增 1 个默认组件。
- 新增 1 个主题能力声明文件。
- 修改 1 个主题的 `index.js`。
- 补 1 个小测试或页面级手动验证说明。

风险：低。

适合一个小 PR。

### 8.2 文章页 P0 完整接入

范围：版权、分享、评论、相邻文章、目录。

预计改动：

- 新增 4-6 个框架能力文件。
- 修改 3-5 个代表主题。
- 更新迁移指南和 checklist。
- 增加能力矩阵文档。

风险：中。

原因：

- 评论和目录涉及客户端动态组件、抽屉、浮动按钮。
- 不同主题的布局位置差异大，不能强行统一视觉。

建议拆成多个 PR。

### 8.3 全主题迁移

范围：所有主题全部接入能力契约。

预计改动：

- 25 个左右主题需要逐个检查。
- 大量 `index.js` 和主题组件会被触碰。
- 需要主题预览、构建和人工验收。

风险：高。

不建议一次性做。应该在后续主题维护、bug 修复、新主题迁移时逐步接入。

## 9. 建议执行步骤

1. 先合入本文档，作为讨论基线。
2. 用 issue/RFC 确认 `ThemeFeature` 和 `capabilities.js` 的最小 API。
3. 只试点 `articleCopyright`。
4. 试点通过后，再抽 `articleShare` 和 `articleComment`。
5. 把新主题模板更新为能力声明优先。
6. 等 3 个以上主题稳定使用后，再考虑自动生成能力矩阵。

## 10. 不做什么

短期不做：

- 不一次性重写所有主题。
- 不引入插件运行时。
- 不把主题改成 class/interface 体系。
- 不要求所有主题支持所有能力。
- 不把特殊主题的场景模块抽象进框架。
- 不为单个主题的个性化设计创建框架能力。

## 11. 维护者判断清单

一个功能是否应该进入主题能力契约，先问：

1. 是否至少两个主题需要？
2. 是否有统一的数据字段？
3. 是否可以提供无主题依赖的默认组件？
4. 是否允许主题选择不支持？
5. 是否可以通过 `siteConfig` 接入现有配置体系？
6. 是否会降低新主题迁移成本？
7. 是否不会破坏现有主题视觉？

如果以上大多数答案是否定的，先留在主题私有实现。

## 12. 结论

NotionNext 适合做“能力契约式接口化”，不适合做“大一统主题接口重写”。

最好的起点是文章页 P0 能力，尤其是文章版权声明。它已有统一字段和共享解析函数，改动小，收益明确，能验证整个机制是否成立。机制成立后，再逐步扩展到分享、评论、目录、相邻文章和公告等重复能力。
