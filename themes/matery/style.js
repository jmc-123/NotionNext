/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'

/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  const primaryColor = siteConfig('MATERY_COLOR_PRIMARY', '#4338ca', CONFIG)
  const primaryLightColor = siteConfig('MATERY_COLOR_PRIMARY_LIGHT', '#818cf8', CONFIG)
  const backgroundColor = siteConfig('MATERY_COLOR_BG', '#f5f5f5', CONFIG)

  return (
    <style jsx global>{`
      #theme-matery {
        --matery-color-primary: ${primaryColor};
        --matery-color-primary-light: ${primaryLightColor};
        --matery-color-bg: ${backgroundColor};
      }

      // 底色
      body {
        background-color: ${backgroundColor};
      }
      .dark body {
        background-color: black;
      }

      /* 设置了从上到下的渐变黑色 */
      #theme-matery .header-cover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.2) 10%,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 0.2) 75%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }

      // 自定义滚动条
      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background-color: var(--matery-color-primary);
      }

      * {
        scrollbar-width: thin;
        scrollbar-color: var(--matery-color-primary) transparent;
      }

      #theme-matery .bg-indigo-700,
      #theme-matery .bg-indigo-600,
      #theme-matery .bg-indigo-500,
      #theme-matery div[class*='hover:bg-indigo-700']:hover,
      #theme-matery div[class*='hover:bg-indigo-600']:hover,
      #theme-matery div[class*='hover:bg-indigo-500']:hover,
      #theme-matery a[class*='hover:bg-indigo-500']:hover {
        background-color: var(--matery-color-primary) !important;
      }

      #theme-matery .bg-indigo-400,
      #theme-matery div[class*='hover:bg-indigo-400']:hover {
        background-color: var(--matery-color-primary-light) !important;
      }

      #theme-matery .text-indigo-700,
      #theme-matery a[class*='hover:text-indigo-700']:hover,
      #theme-matery div[class*='hover:text-indigo-600']:hover,
      #theme-matery div[class*='hover:text-indigo-400']:hover,
      #theme-matery .dark\:hover\:text-indigo-300:hover,
      #theme-matery .dark\:hover\:text-indigo-400:hover {
        color: var(--matery-color-primary) !important;
      }

      #theme-matery .border-indigo-500,
      #theme-matery .border-indigo-400,
      #theme-matery .border-indigo-300,
      #theme-matery .dark\:border-indigo-400,
      #theme-matery .dark\:border-indigo-700,
      #theme-matery li[class*='hover:border-indigo-500']:hover,
      #theme-matery .dark\:hover\:border-indigo-300:hover,
      #theme-matery .dark\:hover\:border-indigo-400:hover {
        border-color: var(--matery-color-primary) !important;
      }
    `}</style>
  )
}

export { Style }
