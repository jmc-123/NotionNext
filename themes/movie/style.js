/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  const primaryColor = siteConfig('MOVIE_COLOR_PRIMARY', '#2563eb', CONFIG)
  const primaryDarkColor = siteConfig('MOVIE_COLOR_PRIMARY_DARK', '#ca8a04', CONFIG)

  return (
    <style jsx global>{`
      #theme-movie {
        --movie-color-primary: ${primaryColor};
        --movie-color-primary-dark: ${primaryDarkColor};
      }

      // 底色
      .dark body {
        background-color: black;
      }

      #theme-movie .text-green-500,
      #theme-movie a[class*='hover:text-green-500']:hover,
      #theme-movie div[class*='hover:text-red-500']:hover {
        color: var(--movie-color-primary) !important;
      }

      #theme-movie .bg-blue-600,
      #theme-movie div[class*='hover:bg-blue-600']:hover {
        background-color: var(--movie-color-primary) !important;
      }

      #theme-movie .dark\\:bg-yellow-600,
      #theme-movie .dark\\:hover\\:bg-yellow-600:hover {
        background-color: var(--movie-color-primary-dark) !important;
      }

      .shadow-movie {
        box-shadow:
          0 26px 58px 0 rgba(0, 0, 0, 0.22),
          0 5px 14px 0 rgba(0, 0, 0, 0.18);
      }

      // 视频聚合走马灯
      .notion-carousel {
        width: 100%; /* 根据需要调整 */
        overflow: hidden;
      }

      .notion-carousel-wrapper .notion-carousel {
        display: none;
      }

      .notion-carousel-wrapper .notion-carousel.active {
        display: block;
      }

      .notion-carousel-route div {
        cursor: pointer;
        margin-bottom: 0.2rem;
      }

      .notion-carousel-route div:hover {
        text-decoration: underline; 
      }

      .notion-carousel div {
        height: auto !important;
        aspect-ratio: 2/1 !important;
      }
    `}</style>
  )
}

export { Style }
