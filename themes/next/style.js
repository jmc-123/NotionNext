/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'

/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  const primaryColor = siteConfig('NEXT_COLOR_PRIMARY', '#4e80ee', CONFIG)
  const backgroundColor = siteConfig('NEXT_COLOR_BG', '#eeedee', CONFIG)

  return (
    <style jsx global>{`
      #theme-next {
        --next-color-primary: ${primaryColor};
        --next-color-bg: ${backgroundColor};
      }

      // 底色
      body {
        background-color: ${backgroundColor};
      }
      .dark body {
        background-color: black;
      }

      // 菜单下划线动画
      #theme-next .menu-link {
        text-decoration: none;
        background-image: linear-gradient(
          var(--next-color-primary),
          var(--next-color-primary)
        );
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
      }
      #theme-next .menu-link:hover {
        background-size: 100% 2px;
        color: var(--next-color-primary);
      }

      #theme-next .text-blue-500,
      #theme-next a[class*='hover:text-blue-500']:hover,
      #theme-next div[class*='hover:text-blue-500']:hover,
      #theme-next .dark\:hover\:text-blue-400:hover {
        color: var(--next-color-primary) !important;
      }

      #theme-next .border-blue-500 {
        border-color: var(--next-color-primary) !important;
      }

      #theme-next a[class*='hover:bg-blue-500']:hover,
      #theme-next button[class*='hover:bg-blue-500']:hover {
        background-color: var(--next-color-primary) !important;
      }
    `}</style>
  )
}

export { Style }
