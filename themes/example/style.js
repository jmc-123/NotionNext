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
  const primaryColor = siteConfig('EXAMPLE_COLOR_PRIMARY', '#6b7280', CONFIG)
  const backgroundColor = siteConfig('EXAMPLE_COLOR_BG', '#ffffff', CONFIG)
  const cardColor = siteConfig('EXAMPLE_COLOR_CARD', '#f3f4f6', CONFIG)
  const borderColor = siteConfig('EXAMPLE_COLOR_BORDER', '#e5e7eb', CONFIG)

  return <style jsx global>{`
    #theme-example {
        --example-color-primary: ${primaryColor};
        --example-color-bg: ${backgroundColor};
        --example-color-card: ${cardColor};
        --example-color-border: ${borderColor};
        background-color: var(--example-color-bg);
    }

    // 底色
    .dark body{
        background-color: black;
    }

    #theme-example header,
    #theme-example footer,
    #theme-example #container-inner {
        background-color: var(--example-color-bg) !important;
    }

    #theme-example .bg-gray-100,
    #theme-example aside,
    #theme-example .notion-bookmark,
    #theme-example .notion-collection-card {
        background-color: var(--example-color-card) !important;
    }

    #theme-example .border,
    #theme-example .border-b,
    #theme-example .border-t,
    #theme-example .border-gray-light,
    #theme-example .notion-bookmark,
    #theme-example .notion-collection-card {
        border-color: var(--example-color-border) !important;
    }

    #theme-example .catalog-item span.font-bold {
        color: var(--example-color-primary) !important;
    }

    ${buildThemePrimaryCss('#theme-example', '--example-color-primary')}

    #theme-example [class*='hover:bg-gray-500']:hover,
    #theme-example [class*='hover:bg-gray-100']:hover {
        background-color: var(--example-color-primary) !important;
        color: white !important;
    }

  `}</style>
}

export { Style }
