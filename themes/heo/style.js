/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  const primary = siteConfig('HEO_COLOR_PRIMARY', '#4f65f0', CONFIG)
  const primaryHover = siteConfig('HEO_COLOR_PRIMARY_HOVER', '#4f46e5', CONFIG)
  const primaryText = siteConfig('HEO_COLOR_PRIMARY_TEXT', '#ffffff', CONFIG)
  const accent = siteConfig('HEO_COLOR_ACCENT', '#dca846', CONFIG)
  const bg = siteConfig('HEO_COLOR_BG', '#f7f9fe', CONFIG)
  const bgDark = siteConfig('HEO_COLOR_BG_DARK', '#18171d', CONFIG)
  const card = siteConfig('HEO_COLOR_CARD', '#ffffff', CONFIG)
  const cardDark = siteConfig('HEO_COLOR_CARD_DARK', '#1e1e1e', CONFIG)
  const cardMuted = siteConfig('HEO_COLOR_CARD_MUTED', '#f1f3f8', CONFIG)
  const border = siteConfig('HEO_COLOR_BORDER', '#4f46e5', CONFIG)
  const borderDark = siteConfig('HEO_COLOR_BORDER_DARK', '#dca846', CONFIG)
  const text = siteConfig('HEO_COLOR_TEXT', '#111827', CONFIG)
  const textSecondary = siteConfig('HEO_COLOR_TEXT_SECONDARY', '#4b5563', CONFIG)

  return (
    <style jsx global>{`
      #theme-heo {
        --heo-color-primary: ${primary};
        --heo-color-primary-hover: ${primaryHover};
        --heo-color-primary-text: ${primaryText};
        --heo-color-accent: ${accent};
        --heo-color-bg: ${bg};
        --heo-color-bg-dark: ${bgDark};
        --heo-color-card: ${card};
        --heo-color-card-dark: ${cardDark};
        --heo-color-card-muted: ${cardMuted};
        --heo-color-border: ${border};
        --heo-color-border-dark: ${borderDark};
        --heo-color-text: ${text};
        --heo-color-text-secondary: ${textSecondary};
      }

      body {
        background-color: var(--heo-color-bg);
      }

      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.4);
        border-radius: 8px;
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  )
}

export { Style }

