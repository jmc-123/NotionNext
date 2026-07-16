/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'

/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  const primaryColor = siteConfig('SIMPLE_COLOR_PRIMARY', '#dd3333', CONFIG)
  const titleColor = siteConfig('SIMPLE_COLOR_TITLE', '#276077', CONFIG)

  return <style jsx global>{`
  #theme-simple {
      --simple-color-primary: ${primaryColor};
      --simple-color-title: ${titleColor};
  }
    
  // 底色
  .dark body{
      background-color: black;
  }
  // 文本不可选取
    .forbid-copy {
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
  
  #theme-simple #announcement-content {
    /* background-color: #f6f6f6; */
  }
  
  #theme-simple .blog-item-title {
    color: var(--simple-color-title);
  }
  
  .dark #theme-simple .blog-item-title {
    color: #d1d5db;
  }
  
  .notion {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  
  
  /*  菜单下划线动画 */
  #theme-simple .menu-link {
      text-decoration: none;
      background-image: linear-gradient(
        var(--simple-color-primary),
        var(--simple-color-primary)
      );
      background-repeat: no-repeat;
      background-position: bottom center;
      background-size: 0 2px;
      transition: background-size 100ms ease-in-out;
  }
   
  #theme-simple .menu-link:hover {
      background-size: 100% 2px;
      color: var(--simple-color-primary);
      cursor: pointer;
  }

  #theme-simple .text-blue-600,
  #theme-simple .text-blue-400,
  #theme-simple .dark\:text-blue-300,
  #theme-simple a[class*='hover:text-red-400']:hover,
  #theme-simple span[class*='hover:text-red-400']:hover {
      color: var(--simple-color-primary) !important;
  }

  #theme-simple .border-blue-400,
  #theme-simple a[class*='hover:border-red-300']:hover {
      border-color: var(--simple-color-primary) !important;
  }
  
  

  `}</style>
}

export { Style }
