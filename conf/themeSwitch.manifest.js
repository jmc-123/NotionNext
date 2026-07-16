/**
 * 主题切换面板 — 集中配置（与 themes/<id> 目录名对应）
 *
 * 字段说明：
 * - name    展示名称（缺省则自动格式化为目录名的 Title Case）
 * - summary 简短简介，展示在卡片标题下方
 * - cover   预览图 URL（缺省 /images/themes-preview/<id>.png）
 * - coverWebp 可选；缺省 /images/themes-preview/<id>.webp，设为 '' 可跳过 webp 仅用 cover
 * - tier    可选；'free' | 'paid'，缺省为 'free'。面板展示对应标签，为后续付费主题预留。
 */

/** @type {Record<string, { name?: string, summary?: string, cover?: string, coverWebp?: string, rootId?: string, tier?: 'free' | 'paid', palette?: Array<{ key: string, cssVar: string, label: string, defaultValue: string, copyValue?: string }> }>} */
export const THEME_SWITCH_MANIFEST = {
  endspace: {
    name: 'Endspace',
    summary: '轻工业终末风，侧栏导航、悬浮控件与加载动画。',
    palette: [
      { key: 'ENDSPACE_COLOR_BG_BASE', cssVar: '--endspace-bg-base', label: '页面背景', defaultValue: '#fafafa' },
      { key: 'ENDSPACE_COLOR_SURFACE', cssVar: '--endspace-bg-primary', label: '卡片背景', defaultValue: '#ffffff' },
      { key: 'ENDSPACE_COLOR_TEXT', cssVar: '--endspace-text-primary', label: '主文字', defaultValue: '#18181b' },
      { key: 'ENDSPACE_COLOR_TEXT_SECONDARY', cssVar: '--endspace-text-secondary', label: '次级文字', defaultValue: '#52525b' },
      { key: 'ENDSPACE_COLOR_ACCENT', cssVar: '--endspace-accent-yellow', label: '辅助强调色', defaultValue: '#FBFB45' },
      { key: 'ENDSPACE_COLOR_ACCENT_DIM', cssVar: '--endspace-accent-yellow-dim', label: '辅助强调色：弱化', defaultValue: 'rgba(251, 251, 69, 0.15)' },
      { key: 'ENDSPACE_COLOR_BORDER', cssVar: '--endspace-border-base', label: '边框', defaultValue: '#e4e4e7' }
    ]
  },
  next: {
    name: 'Next',
    summary: '经典双栏布局，右侧栏与移动端悬浮目录。',
    palette: [
      { key: 'NEXT_COLOR_PRIMARY', cssVar: '--next-color-primary', label: '主色', defaultValue: '#4e80ee' },
      { key: 'NEXT_COLOR_BG', cssVar: '--next-color-bg', label: '页面背景', defaultValue: '#eeedee' }
    ]
  },
  simple: {
    name: 'Simple',
    summary: '极简清爽，适合文字为主的博客。',
    palette: [
      { key: 'SIMPLE_COLOR_PRIMARY', cssVar: '--simple-color-primary', label: '主色', defaultValue: '#dd3333' },
      { key: 'SIMPLE_COLOR_TITLE', cssVar: '--simple-color-title', label: '标题色', defaultValue: '#276077' }
    ]
  },
  medium: {
    name: 'Medium',
    summary: 'Medium 风格阅读体验与排版。',
    palette: [
      { key: 'MEDIUM_COLOR_PRIMARY', cssVar: '--medium-color-primary', label: '主色', defaultValue: '#4f46e5' }
    ]
  },
  matery: {
    name: 'Matery',
    summary: '卡片式列表与 Material 质感组件。',
    palette: [
      { key: 'MATERY_COLOR_PRIMARY', cssVar: '--matery-color-primary', label: '主色', defaultValue: '#4338ca' },
      { key: 'MATERY_COLOR_PRIMARY_LIGHT', cssVar: '--matery-color-primary-light', label: '主色：浅色', defaultValue: '#818cf8' },
      { key: 'MATERY_COLOR_BG', cssVar: '--matery-color-bg', label: '页面背景', defaultValue: '#f5f5f5' }
    ]
  },
  heo: {
    name: 'Heo',
    summary: '致敬张洪Heo,丰富的 模块化组件。',
    palette: [
      { key: 'HEO_COLOR_PRIMARY', cssVar: '--heo-color-primary', label: '主色', defaultValue: '#4f65f0' },
      { key: 'HEO_COLOR_PRIMARY_HOVER', cssVar: '--heo-color-primary-hover', label: '主色：hover', defaultValue: '#4f46e5' },
      { key: 'HEO_COLOR_PRIMARY_TEXT', cssVar: '--heo-color-primary-text', label: '主色文字', defaultValue: '#ffffff' },
      { key: 'HEO_COLOR_ACCENT', cssVar: '--heo-color-accent', label: '深色模式：主色', defaultValue: '#dca846' },
      { key: 'HEO_COLOR_BG', cssVar: '--heo-color-bg', label: '页面背景', defaultValue: '#f7f9fe' },
      { key: 'HEO_COLOR_BG_DARK', cssVar: '--heo-color-bg-dark', label: '深色模式：页面背景', defaultValue: '#18171d' },
      { key: 'HEO_COLOR_CARD', cssVar: '--heo-color-card', label: '卡片背景', defaultValue: '#ffffff' },
      { key: 'HEO_COLOR_CARD_DARK', cssVar: '--heo-color-card-dark', label: '深色模式：卡片背景', defaultValue: '#1e1e1e' },
      { key: 'HEO_COLOR_CARD_MUTED', cssVar: '--heo-color-card-muted', label: '弱背景', defaultValue: '#f1f3f8' },
      { key: 'HEO_COLOR_BORDER', cssVar: '--heo-color-border', label: '边框', defaultValue: '#4f46e5' },
      { key: 'HEO_COLOR_BORDER_DARK', cssVar: '--heo-color-border-dark', label: '深色模式：边框', defaultValue: '#dca846' },
      { key: 'HEO_COLOR_TEXT', cssVar: '--heo-color-text', label: '主文字', defaultValue: '#111827' },
      { key: 'HEO_COLOR_TEXT_SECONDARY', cssVar: '--heo-color-text-secondary', label: '次级文字', defaultValue: '#4b5563' }
    ]
  },
  hexo: {
    name: 'Hexo',
    summary: '类 Hexo 经典博客结构与侧边栏。',
    palette: [
      { key: 'HEXO_COLOR_PRIMARY', cssVar: '--hexo-color-primary', label: '主色', defaultValue: '#928CEE' }
    ]
  },
  nobelium: {
    name: 'Nobelium',
    summary: '致敬Nobelium,极简排版风格。',
    palette: [
      { key: 'NOBELIUM_COLOR_PRIMARY', cssVar: '--nobelium-color-primary', label: '主色', defaultValue: '#6b7280' }
    ]
  },
  plog: {
    name: 'Plog',
    summary: '偏图片与轻量图文化展示。',
    palette: [
      { key: 'PLOG_COLOR_PRIMARY', cssVar: '--plog-color-primary', label: '主色', defaultValue: '#1d4ed8' }
    ]
  },
  gitbook: {
    name: 'GitBook',
    summary: '文档与手册式侧栏目录结构。',
    palette: [
      { key: 'GITBOOK_COLOR_PRIMARY', cssVar: '--gitbook-color-primary', label: '主色', defaultValue: '#16a34a' }
    ]
  },
  fuwari: {
    name: 'Fuwari',
    summary: '日系轻量双栏与主题色板。',
    palette: [
      { key: 'FUWARI_THEME_COLOR_HUE', cssVar: '--fuwari-primary', label: '主色：色相', defaultValue: '#b8a320', copyValue: '52' }
    ]
  },
  fukasawa: {
    name: 'Fukasawa',
    summary: '深川式多栏与侧边信息密度较高。',
    palette: [
      { key: 'FUKASAWA_COLOR_BG', cssVar: '--fukasawa-color-bg', label: '页面背景', defaultValue: '#eeedee' }
    ]
  },
  typography: {
    name: 'Typography',
    summary: '排版优先，强调正文阅读与层级。',
    palette: [
      { key: 'TYPOGRAPHY_COLOR_PRIMARY', cssVar: '--typography-color-primary', label: '主色', defaultValue: '#2e405b' },
      { key: 'TYPOGRAPHY_COLOR_TITLE', cssVar: '--typography-color-title', label: '标题色', defaultValue: '#276077' }
    ]
  },
  nav: {
    name: 'Nav',
    summary: '顶部导航主导航的现代布局。',
    rootId: 'theme-onenav',
    palette: [
      { key: 'NAV_COLOR_BG', cssVar: '--nav-color-bg', label: '页面背景', defaultValue: '#fbfbfb' },
      { key: 'NAV_COLOR_TEXT', cssVar: '--nav-color-text', label: '菜单文字', defaultValue: '#8c8c8c' },
      { key: 'NAV_COLOR_TEXT_HOVER', cssVar: '--nav-color-text-hover', label: '菜单文字：hover', defaultValue: '#000000' }
    ]
  },
  starter: {
    name: 'Starter',
    summary: '落地页与区块化营销向模板。',
    palette: [
      { key: 'STARTER_COLOR_PRIMARY', cssVar: '--starter-color-primary', label: '主色', defaultValue: '#3758f9' },
      { key: 'STARTER_COLOR_PRIMARY_HOVER', cssVar: '--starter-color-primary-hover', label: '主色：hover', defaultValue: '#1b44c8' },
      { key: 'STARTER_COLOR_DARK', cssVar: '--starter-color-dark', label: '深色模式：页面背景', defaultValue: '#111928' },
      { key: 'STARTER_COLOR_TEXT_MUTED', cssVar: '--starter-color-text-muted', label: '次级文字', defaultValue: '#637381' }
    ]
  },
  commerce: {
    name: 'Commerce',
    summary: '电商与商品展示向页面结构。',
    palette: [
      { key: 'COMMERCE_COLOR_PRIMARY', cssVar: '--commerce-color-primary', label: '主色', defaultValue: '#D2232A' },
      { key: 'COMMERCE_COLOR_BG', cssVar: '--commerce-color-bg', label: '页面背景', defaultValue: '#f5f5f5' },
      { key: 'COMMERCE_COLOR_BG_DARK', cssVar: '--commerce-color-bg-dark', label: '深色模式：页面背景', defaultValue: '#111827' },
      { key: 'COMMERCE_COLOR_CARD_DARK', cssVar: '--commerce-color-card-dark', label: '深色模式：卡片背景', defaultValue: '#1f2937' },
      { key: 'COMMERCE_COLOR_TEXT_DARK', cssVar: '--commerce-color-text-dark', label: '深色模式：主文字', defaultValue: '#f9fafb' }
    ]
  },
  magzine: {
    name: 'Magazine',
    summary: '杂志封面与大图列表风格。',
    palette: [
      { key: 'MAGZINE_COLOR_BG', cssVar: '--magzine-color-bg', label: '页面背景', defaultValue: '#f6f6f1' },
      { key: 'MAGZINE_COLOR_SCROLLBAR', cssVar: '--magzine-color-scrollbar', label: '滚动条', defaultValue: '#4e4e4e' }
    ]
  },
  movie: {
    name: 'Movie',
    summary: '影视与海报墙式呈现。',
    palette: [
      { key: 'MOVIE_COLOR_PRIMARY', cssVar: '--movie-color-primary', label: '主色', defaultValue: '#2563eb' },
      { key: 'MOVIE_COLOR_PRIMARY_DARK', cssVar: '--movie-color-primary-dark', label: '深色模式：主色', defaultValue: '#ca8a04' }
    ]
  },
  photo: {
    name: 'Photo',
    summary: '摄影作品与相册网格。',
    palette: [
      { key: 'PHOTO_COLOR_PRIMARY', cssVar: '--photo-color-primary', label: '主色', defaultValue: '#2563eb' },
      { key: 'PHOTO_COLOR_PRIMARY_DARK', cssVar: '--photo-color-primary-dark', label: '深色模式：主色', defaultValue: '#ca8a04' }
    ]
  },
  game: {
    name: 'Game',
    summary: '偏游戏与像素元素装饰。',
    palette: [
      { key: 'GAME_COLOR_BG', cssVar: '--game-color-bg', label: '页面背景', defaultValue: '#ffffff' },
      { key: 'GAME_COLOR_SCROLLBAR', cssVar: '--game-color-scrollbar', label: '滚动条', defaultValue: '#4e4e4e' },
      { key: 'GAME_COLOR_PRIMARY', cssVar: '--game-color-primary', label: '主色', defaultValue: '#22c55e' }
    ]
  },
  example: {
    name: 'Example',
    summary: '示例与演示向默认骨架。',
    palette: [
      { key: 'EXAMPLE_COLOR_PRIMARY', cssVar: '--example-color-primary', label: '主色', defaultValue: '#6b7280' },
      { key: 'EXAMPLE_COLOR_BG', cssVar: '--example-color-bg', label: '页面背景', defaultValue: '#ffffff' },
      { key: 'EXAMPLE_COLOR_CARD', cssVar: '--example-color-card', label: '卡片背景', defaultValue: '#f3f4f6' },
      { key: 'EXAMPLE_COLOR_BORDER', cssVar: '--example-color-border', label: '边框', defaultValue: '#e5e7eb' }
    ]
  },
  proxio: {
    name: 'Proxio',
    summary: '作品集与个人品牌展示增强。',
    palette: [
      { key: 'PROXIO_COLOR_PRIMARY', cssVar: '--proxio-color-primary', label: '主色', defaultValue: '#3758f9' },
      { key: 'PROXIO_COLOR_PRIMARY_HOVER', cssVar: '--proxio-color-primary-hover', label: '主色：hover', defaultValue: '#1b44c8' },
      { key: 'PROXIO_COLOR_BG', cssVar: '--proxio-color-bg', label: '页面背景', defaultValue: '#ffffff' },
      { key: 'PROXIO_COLOR_DARK', cssVar: '--proxio-color-dark', label: '深色模式：页面背景', defaultValue: '#121212' },
      { key: 'PROXIO_COLOR_TEXT_MUTED', cssVar: '--proxio-color-text-muted', label: '次级文字', defaultValue: '#637381' }
    ]
  },
  landing: {
    name: 'Landing',
    summary: '单页着陆与分区滚动叙述。',
    palette: [
      { key: 'LANDING_COLOR_PRIMARY', cssVar: '--landing-color-primary', label: '主色', defaultValue: '#ef4444' }
    ]
  },
  claude: {
    name: 'Claude',
    summary: '类 Claude Docs 的文档与终端氛围。',
    palette: [
      { key: 'CLAUDE_COLOR_ACCENT', cssVar: '--claude-accent', label: '辅助强调色', defaultValue: '#DA7756' },
      { key: 'CLAUDE_COLOR_ACCENT_HOVER', cssVar: '--claude-accent-hover', label: '辅助强调色：hover', defaultValue: '#C06042' },
      { key: 'CLAUDE_COLOR_BG', cssVar: '--claude-bg', label: '页面背景', defaultValue: '#ffffff' },
      { key: 'CLAUDE_COLOR_BG_SECONDARY', cssVar: '--claude-bg-secondary', label: '次级背景', defaultValue: '#F3F3EE' },
      { key: 'CLAUDE_COLOR_TEXT', cssVar: '--claude-text-primary', label: '主文字', defaultValue: '#1A1A1A' },
      { key: 'CLAUDE_COLOR_BORDER', cssVar: '--claude-border', label: '边框', defaultValue: '#E5E5E0' }
    ]
  },
  thoughtlite: {
    name: 'ThoughtLite',
    summary: '轻阅读向时间线与 Latest 卡片，单列列表与文章卡片排版。',
    palette: [
      { key: 'THOUGHTLITE_COLOR_BG', cssVar: '--tl-bg', label: '页面背景', defaultValue: '#faf9f7' },
      { key: 'THOUGHTLITE_COLOR_SURFACE', cssVar: '--tl-surface', label: '卡片背景', defaultValue: '#ffffff' },
      { key: 'THOUGHTLITE_COLOR_TEXT', cssVar: '--tl-text', label: '主文字', defaultValue: '#1a1a1a' },
      { key: 'THOUGHTLITE_COLOR_MUTED', cssVar: '--tl-muted', label: '次级文字', defaultValue: '#6b6b6b' },
      { key: 'THOUGHTLITE_COLOR_BORDER', cssVar: '--tl-border', label: '边框', defaultValue: '#e8e6e3' },
      { key: 'THOUGHTLITE_COLOR_ACCENT', cssVar: '--tl-accent', label: '辅助强调色', defaultValue: '#2563eb' }
    ]
  }
}

/**
 * @param {string} themeId themes 目录名
 * @returns {{ id: string, name: string, summary: string, coverPng: string, coverWebp: string | null, rootId: string | undefined, tier: 'free' | 'paid', palette: Array<{ key: string, cssVar: string, label: string, defaultValue: string, copyValue?: string }> }}
 */
export function getThemeSwitchMeta(themeId) {
  const id = themeId == null ? '' : String(themeId).trim()
  const row = THEME_SWITCH_MANIFEST[id] || {}

  const tier = row.tier === 'paid' ? 'paid' : 'free'

  const name =
    typeof row.name === 'string' && row.name.trim()
      ? row.name.trim()
      : formatThemeId(id)

  const summary =
    typeof row.summary === 'string' ? row.summary.trim() : ''

  const coverPng =
    typeof row.cover === 'string' && row.cover.trim()
      ? row.cover.trim()
      : `/images/themes-preview/${id}.png`

  let coverWebp = null
  if (row.coverWebp === '') {
    coverWebp = null
  } else if (typeof row.coverWebp === 'string' && row.coverWebp.trim()) {
    coverWebp = row.coverWebp.trim()
  } else {
    coverWebp = `/images/themes-preview/${id}.webp`
  }

  const palette = Array.isArray(row.palette) ? row.palette : []

  const rootId =
    typeof row.rootId === 'string' && row.rootId.trim()
      ? row.rootId.trim()
      : undefined

  return { id, name, summary, coverPng, coverWebp, rootId, tier, palette }
}

export function formatThemeId(id) {
  const s = id == null ? '' : String(id).trim()
  if (!s) return ''
  return s
    .split(/[-_]/)
    .filter(Boolean)
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ')
}
