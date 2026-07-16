/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'

/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  const primaryColor = siteConfig('NOBELIUM_COLOR_PRIMARY', '#6b7280', CONFIG)

  return <style jsx global>{`
    #theme-nobelium {
        --nobelium-color-primary: ${primaryColor};
    }
    
    // 底色
    .dark body{
        background-color: black;
    }

    #theme-nobelium div[class*='hover:bg-gray-500']:hover {
        background-color: var(--nobelium-color-primary) !important;
    }

    #theme-nobelium .nav:hover,
    #theme-nobelium a:hover,
    #theme-nobelium [class*='hover:text-red-400']:hover,
    #theme-nobelium [class*='hover:text-red-500']:hover,
    #theme-nobelium [class*='hover:text-gray-800']:hover,
    #theme-nobelium [class*='hover:text-black']:hover {
        color: var(--nobelium-color-primary) !important;
    }

    #theme-nobelium [class*='hover:bg-black']:hover,
    #theme-nobelium [class*='hover:bg-gray-50']:hover,
    #theme-nobelium [class*='hover:bg-gray-100']:hover,
    #theme-nobelium [class*='hover:bg-gray-900']:hover {
        background-color: var(--nobelium-color-primary) !important;
        color: white !important;
    }

    #theme-nobelium .article-tags p,
    #theme-nobelium .catalog-item:hover,
    #theme-nobelium .catalog-item.font-bold,
    #theme-nobelium .border-gray-800,
    #theme-nobelium [class*='hover:border-gray-500']:hover {
        border-color: var(--nobelium-color-primary) !important;
    }

    #theme-nobelium .article-tags p:hover {
        background-color: var(--nobelium-color-primary) !important;
        color: white !important;
    }

    #theme-nobelium input:focus,
    #theme-nobelium textarea:focus {
        outline-color: var(--nobelium-color-primary) !important;
        box-shadow: 0 0 0 2px var(--nobelium-color-primary);
    }

  `}</style>
}

export { Style }
