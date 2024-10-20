import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/lost-ui/',
  title: 'Lost-UI',
  description: '基于 Vue 3，面向设计师和开发者的组件库',
  head: [['link', { rel: 'icon', href: '/lost-ui/favicon.ico' }]],
  vite: {
    plugins: [vueJsx() as any],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '安装指南', link: '/guide' },
      { text: '组件', link: '/components' }
    ],

    sidebar: {
      '/components': [
        {
          text: 'Lost 组件列表',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Alert 警告', link: '/components/alert' },
            { text: 'Collapse 折叠面板', link: '/components/collapse' },
            { text: 'Tooltip 文字提示', link: '/components/tooltip' },
            { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
            { text: 'Message 消息', link: '/components/message' },
            { text: 'Resize 变形盒子', link: '/components/resize' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/LostElkByte/lost-ui' }]
  }
})
