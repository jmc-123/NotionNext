/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  const backgroundColor = siteConfig('FUKASAWA_COLOR_BG', '#eeedee', CONFIG)

  return <style jsx global>{`
    #theme-fukasawa {
        --fukasawa-color-bg: ${backgroundColor};
        background-color: var(--fukasawa-color-bg);
    }

    // 底色
    body{
        background-color: var(--fukasawa-color-bg);
    }
    .dark body{
        background-color: black;
    }

    #theme-fukasawa .bg-white,
    #theme-fukasawa .bg-gray-50,
    #theme-fukasawa .bg-gray-100 {
        background-color: var(--fukasawa-color-bg) !important;
    }
    
    /* fukasawa的首页响应式分栏 */
    #theme-fukasawa .grid-item {
        height: auto;
        break-inside: avoid-column;
        margin-bottom: .5rem;
    }
    
    /* 大屏幕（宽度≥1024px）下显示3列 */
    @media (min-width: 1024px) {
        #theme-fukasawa .grid-container {
        column-count: 3;
        column-gap: .5rem;
        }
    }
    
    /* 小屏幕（宽度≥640px）下显示2列 */
    @media (min-width: 640px) and (max-width: 1023px) {
        #theme-fukasawa .grid-container {
        column-count: 2;
        column-gap: .5rem;
        }
    }
    
    /* 移动端（宽度<640px）下显示1列 */
    @media (max-width: 639px) {
        #theme-fukasawa .grid-container {
        column-count: 1;
        column-gap: .5rem;
        }
    }

    .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
            padding: 10px;
        }

  `}</style>
}

export { Style }

