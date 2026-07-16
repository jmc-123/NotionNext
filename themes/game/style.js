/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import { buildThemePrimaryCss } from '@/lib/themeColorCss'
import CONFIG from './config'
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  const backgroundColor = siteConfig('GAME_COLOR_BG', '#ffffff', CONFIG)
  const scrollbarColor = siteConfig('GAME_COLOR_SCROLLBAR', '#4e4e4e', CONFIG)
  const primaryColor = siteConfig('GAME_COLOR_PRIMARY', '#22c55e', CONFIG)

  return (
    <style jsx global>{`
      #theme-game {
        --game-color-bg: ${backgroundColor};
        --game-color-scrollbar: ${scrollbarColor};
        --game-color-primary: ${primaryColor};
      }

      // 底色
      .dark body {
        background-color: black;
      }

      body {
        background-color: ${backgroundColor};
      }

      /* 自定义滚动条样式（适用于 Chrome、Safari 和 Edge） */
      html::-webkit-scrollbar {
        width: 12px;
      }

      html::-webkit-scrollbar-track {
        background-color: black;
      }

      html::-webkit-scrollbar-thumb {
        background: var(--game-color-scrollbar);
      }

      #theme-game div[class*='hover:bg-green-500']:hover {
        background-color: var(--game-color-primary) !important;
      }

      ${buildThemePrimaryCss('#theme-game', '--game-color-primary')}
    `}</style>
  )
}

export { Style }
