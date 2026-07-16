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
  const primaryColor = siteConfig('PLOG_COLOR_PRIMARY', '#1d4ed8', CONFIG)

  return <style jsx global>{`
    #theme-plog {
        --plog-color-primary: ${primaryColor};
    }

    // 底色
    .dark body{
        background-color: black;
    }

    #theme-plog div[class*='hover:bg-blue-700']:hover,
    #theme-plog button[class*='hover:bg-blue-700']:hover {
        background-color: var(--plog-color-primary) !important;
    }

    #theme-plog i[class*='hover:text-indigo-600']:hover,
    #theme-plog .dark\:hover\:text-indigo-400:hover {
        color: var(--plog-color-primary) !important;
    }

    ${buildThemePrimaryCss('#theme-plog', '--plog-color-primary')}
  `}</style>
}

export { Style }
