import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Lost-UI',
  description: '基于 Vue 3，面向设计师和开发者的组件库',
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
    nav: [{ text: '组件', link: '/markdown-examples' }],

    sidebar: [
      {
        text: 'Lost 组件列表',
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Alert 警告', link: '/components/alert' },
          { text: 'Collapse 折叠面板', link: '/components/collapse' },
          { text: 'Tooltip 文字提示', link: '/components/tooltip' },
          { text: 'Dropdown 下拉菜单', link: '/components/dropdown' }
          // { text: 'Message 消息', link: '/components/message' },
          // { text: 'Notification 提示', link: '/components/notification' },
          // { text: 'Input 文字输入', link: '/components/input' },
          // { text: 'Switch 开关', link: '/components/switch' },
          // { text: 'Select 选择器', link: '/components/select' },
          // { text: 'Form 表单', link: '/components/form' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
