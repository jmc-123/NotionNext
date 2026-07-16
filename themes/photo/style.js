/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  const primaryColor = siteConfig('PHOTO_COLOR_PRIMARY', '#2563eb', CONFIG)
  const primaryDarkColor = siteConfig('PHOTO_COLOR_PRIMARY_DARK', '#ca8a04', CONFIG)

  return (
    <style jsx global>{`
      #theme-photo {
        --photo-color-primary: ${primaryColor};
        --photo-color-primary-dark: ${primaryDarkColor};
      }

      // 底色
      .dark body {
        background-color: black;
      }

      #theme-photo .text-green-500,
      #theme-photo a[class*='hover:text-green-500']:hover,
      #theme-photo div[class*='hover:text-red-500']:hover {
        color: var(--photo-color-primary) !important;
      }

      #theme-photo .bg-blue-600,
      #theme-photo .bg-indigo-600,
      #theme-photo div[class*='hover:bg-blue-600']:hover,
      #theme-photo div[class*='hover:bg-indigo-600']:hover,
      #theme-photo button[class*='hover:bg-indigo-600']:hover {
        background-color: var(--photo-color-primary) !important;
      }

      #theme-photo .border-indigo-600,
      #theme-photo div[class*='hover:border-indigo-600']:hover {
        border-color: var(--photo-color-primary) !important;
      }

      #theme-photo .dark\\:bg-yellow-600,
      #theme-photo .dark\\:hover\\:bg-yellow-600:hover {
        background-color: var(--photo-color-primary-dark) !important;
      }
      // 毛玻璃背景色
      .bg-glassmorphism {
        background: hsla(0, 0%, 100%, 0.4);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
      }

      .dark .bg-glassmorphism {
        background: hsla(0, 0%, 0%, 0.4);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
      }
    `}</style>
  )
}

export { Style }
