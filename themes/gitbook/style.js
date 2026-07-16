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
  const primaryColor = siteConfig('GITBOOK_COLOR_PRIMARY', '#16a34a', CONFIG)

  return (
    <style jsx global>{`
      #theme-gitbook {
        --gitbook-color-primary: ${primaryColor};
      }

      // 底色
      .dark body {
        background-color: black;
      }

      .bottom-button-group {
        box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.1);
      }

      #theme-gitbook .bg-green-600,
      #theme-gitbook .bg-green-500,
      #theme-gitbook div[class*='hover:bg-green-600']:hover,
      #theme-gitbook div[class*='hover:bg-green-500']:hover {
        background-color: var(--gitbook-color-primary) !important;
      }

      #theme-gitbook .text-green-600,
      #theme-gitbook .dark\\:text-green-400,
      #theme-gitbook div[class*='hover:text-green-600']:hover,
      #theme-gitbook a[class*='hover:text-green-600']:hover,
      #theme-gitbook a[class*='hover:text-green-500']:hover,
      #theme-gitbook .dark\\:hover\\:text-green-400:hover {
        color: var(--gitbook-color-primary) !important;
      }

      #theme-gitbook .border-green-500,
      #theme-gitbook .border-green-200,
      #theme-gitbook a[class*='hover:border-green-500']:hover {
        border-color: var(--gitbook-color-primary) !important;
      }

      ${buildThemePrimaryCss('#theme-gitbook', '--gitbook-color-primary')}
    `}</style>
  )
}

export { Style }
