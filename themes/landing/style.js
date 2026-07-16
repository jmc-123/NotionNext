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
  const primaryColor = siteConfig('LANDING_COLOR_PRIMARY', '#ef4444', CONFIG)

  return <style jsx global>{`

    #theme-landing {
      --landing-color-primary: ${primaryColor};
    }
    
    .test {
      text-color: red;
    }

    #theme-landing .text-red-500,
    #theme-landing strong[class*='text-red-500'] {
      color: var(--landing-color-primary) !important;
    }

    ${buildThemePrimaryCss('#theme-landing', '--landing-color-primary')}

  `}</style>
}

export { Style }
