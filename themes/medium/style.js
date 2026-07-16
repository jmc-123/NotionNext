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
  const primaryColor = siteConfig('MEDIUM_COLOR_PRIMARY', '#4f46e5', CONFIG)

  return <style jsx global>{`
    #theme-medium {
        --medium-color-primary: ${primaryColor};
    }
    
    // 底色
    .dark body{
        background-color: black;
    }

    #theme-medium i[class*='hover:text-indigo-600']:hover,
    #theme-medium .dark\:hover\:text-indigo-400:hover {
        color: var(--medium-color-primary) !important;
    }

    ${buildThemePrimaryCss('#theme-medium', '--medium-color-primary')}

  `}</style>
}

export { Style }
