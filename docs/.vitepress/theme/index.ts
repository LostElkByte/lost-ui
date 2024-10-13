import DefaultTheme from 'vitepress/theme'
import {
  AntDesignContainer,
  ElementPlusContainer,
  NaiveUIContainer
} from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../../../src/styles/index.css'
import './custom.css'
library.add(fas)

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app }) {
    app.component('demo-preview', ElementPlusContainer)
  }
}
