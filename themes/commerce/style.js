/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'
/**
 * 这里的css样式只对当前主题生效
 * 主题客制化css
 * @returns
 */
const Style = () => {
  const primaryColor = siteConfig('COMMERCE_COLOR_PRIMARY', '#D2232A', CONFIG)
  const backgroundColor = siteConfig('COMMERCE_COLOR_BG', '#f5f5f5', CONFIG)
  const backgroundDarkColor = siteConfig('COMMERCE_COLOR_BG_DARK', '#111827', CONFIG)
  const cardDarkColor = siteConfig('COMMERCE_COLOR_CARD_DARK', '#1f2937', CONFIG)
  const textDarkColor = siteConfig('COMMERCE_COLOR_TEXT_DARK', '#f9fafb', CONFIG)

  return (<style jsx global>{`
    #theme-commerce {
        --commerce-color-primary: ${primaryColor};
        --commerce-color-bg: ${backgroundColor};
        --commerce-color-bg-dark: ${backgroundDarkColor};
        --commerce-color-card-dark: ${cardDarkColor};
        --commerce-color-text-dark: ${textDarkColor};
        background-color: var(--commerce-color-bg);
    }

    // 底色
    body{
        background-color: ${backgroundColor}
    }
    .dark body{
        background-color: var(--commerce-color-bg-dark);
    }

    .dark #theme-commerce {
        background-color: var(--commerce-color-bg-dark);
        color: var(--commerce-color-text-dark);
    }

    #theme-commerce #wrapper,
    #theme-commerce .bg-hexo-background-gray,
    #theme-commerce .bg-white,
    #theme-commerce .card,
    #theme-commerce .article {
        background-color: var(--commerce-color-bg) !important;
    }

    .dark #theme-commerce #wrapper,
    .dark #theme-commerce .bg-hexo-background-gray,
    .dark #theme-commerce .bg-white,
    .dark #theme-commerce .bg-gray-50,
    .dark #theme-commerce .bg-gray-100,
    .dark #theme-commerce .card,
    .dark #theme-commerce .article,
    .dark #theme-commerce .notion-bookmark,
    .dark #theme-commerce .notion-collection-card {
        background-color: var(--commerce-color-card-dark) !important;
        color: var(--commerce-color-text-dark) !important;
    }

    .dark #theme-commerce .text-black,
    .dark #theme-commerce .text-gray-700,
    .dark #theme-commerce .text-gray-800,
    .dark #theme-commerce .text-gray-900,
    .dark #theme-commerce h1,
    .dark #theme-commerce h2,
    .dark #theme-commerce h3,
    .dark #theme-commerce p,
    .dark #theme-commerce a {
        color: var(--commerce-color-text-dark) !important;
    }

    .dark #theme-commerce .border,
    .dark #theme-commerce .border-b,
    .dark #theme-commerce .border-t,
    .dark #theme-commerce .border-gray-200,
    .dark #theme-commerce .border-gray-300 {
        border-color: rgba(255, 255, 255, 0.16) !important;
    }

    // 产品介绍区域字体放大
    #brand-introduction .notion {
        font-size: 1.5rem !important;
    }
  
    /*  菜单下划线动画 */
    #theme-commerce .menu-link {
        text-decoration: none;
        background-image: linear-gradient(
          var(--commerce-color-primary),
          var(--commerce-color-primary)
        );
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
    }
    
    #theme-commerce .menu-link:hover {
        background-size: 100% 2px;
        color: var(--commerce-color-primary);
    }

    /* 设置了从上到下的渐变黑色 */
    #theme-commerce .header-cover::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:  linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.5) 100%);
    }

    /* Custem */
    .tk-footer{
        opacity: 0;
    }

    // 选中字体颜色
    ::selection {
        background: rgba(45, 170, 219, 0.3);
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
        background-color: var(--commerce-color-primary);
    }

    * {
        scrollbar-width:thin;
        scrollbar-color: var(--commerce-color-primary) transparent
    }

    #theme-commerce .border-\\[\\#D2232A\\],
    #theme-commerce .border-red-500,
    #theme-commerce .border-red-400,
    #theme-commerce [class*='border-[#D2232A]'] {
        border-color: var(--commerce-color-primary) !important;
    }

    #theme-commerce .bg-red-600,
    #theme-commerce .bg-red-500,
    #theme-commerce div[class*='hover:bg-red-600']:hover,
    #theme-commerce div[class*='hover:bg-red-400']:hover,
    #theme-commerce div[class*='hover:bg-red-300']:hover,
    #theme-commerce a[class*='hover:bg-red-400']:hover {
        background-color: var(--commerce-color-primary) !important;
    }

    #theme-commerce .text-red-600,
    #theme-commerce .text-red-400,
    #theme-commerce .text-red-500,
    #theme-commerce a[class*='hover:text-red-700']:hover,
    #theme-commerce div[class*='hover:text-red-700']:hover,
    #theme-commerce div[class*='hover:text-red-600']:hover,
    #theme-commerce div[class*='hover:text-red-500']:hover,
    #theme-commerce div[class*='hover:text-red-400']:hover,
    #theme-commerce [class*='hover:text-[#D2232A]']:hover,
    #theme-commerce .dark\\:hover\\:text-red-400:hover,
    #theme-commerce .dark\\:hover\\:text-red-300:hover {
        color: var(--commerce-color-primary) !important;
    }
    

  `}</style>)
}

export { Style }
