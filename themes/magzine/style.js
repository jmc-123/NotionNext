/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  const backgroundColor = siteConfig('MAGZINE_COLOR_BG', '#f6f6f1', CONFIG)
  const scrollbarColor = siteConfig('MAGZINE_COLOR_SCROLLBAR', '#4e4e4e', CONFIG)

  return (
    <style jsx global>{`
      #theme-magzine {
        --magzine-color-bg: ${backgroundColor};
        --magzine-color-scrollbar: ${scrollbarColor};
        background-color: var(--magzine-color-bg);
      }

      // 底色
      .dark body {
        background-color: black;
      }

      #theme-magzine .bg-\\[\\#f6f6f1\\] {
        background-color: var(--magzine-color-bg) !important;
      }

      body,
      #theme-magzine .bg-white,
      #theme-magzine .bg-gray-50,
      #theme-magzine .bg-gray-100 {
        background-color: var(--magzine-color-bg) !important;
      }

      /* 自定义滚动条样式（适用于 Chrome、Safari 和 Edge） */
      html::-webkit-scrollbar {
        width: 12px;
      }

      html::-webkit-scrollbar-track {
        background-color: transparent;
      }

      html::-webkit-scrollbar-thumb {
        background: var(--magzine-color-scrollbar);
      }
    `}</style>
  )
}

export { Style }
