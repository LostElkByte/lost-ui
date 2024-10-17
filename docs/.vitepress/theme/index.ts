// 引入 VitePress 默认主题
import DefaultTheme from 'vitepress/theme'

// 从 '@vitepress-demo-preview/component' 包中导入各个 UI 框架的容器组件
import {
  AntDesignContainer,
  ElementPlusContainer,
  NaiveUIContainer
} from '@vitepress-demo-preview/component'

// 引入 '@vitepress-demo-preview/component' 包的样式文件
import '@vitepress-demo-preview/component/dist/style.css'

// 引入 FontAwesome 的库及所有的固态图标集合
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// 引入项目中的全局样式
import '../../../src/styles/index.css'

// 引入自定义样式
import './custom.css'

// 引入组件
import LButton from '../../../src/components/Button'
import LIcon from '../../../src/components/icon'
import LAlert from '../../../src/components/Alert'
import LCollapse, { CollapseItem as LCollapseItem } from '../../../src/components/Collapse'
import LDropdown from '../../../src/components/Dropdown'
import LMessage, {
  createMessage,
  closeAll as closeMessageAll
} from '../../../src/components/Message'
import LTooltip from '../../../src/components/Tooltip'

// 将 FontAwesome 的固态图标添加到图标库中
library.add(fas)

export default {
  // 使用 VitePress 的默认主题
  ...DefaultTheme,

  // 增强 VitePress 应用的方法
  enhanceApp({ app }) {
    // 注册 `demo-preview` 组件，使用 ElementPlusContainer 容器
    app.component('demo-preview', ElementPlusContainer)
    app.component('LButton', LButton)
    app.component('LIcon', LIcon)
    app.component('LAlert', LAlert)
    app.component('LCollapse', LCollapse)
    app.component('LCollapseItem', LCollapseItem)
    app.component('LDropdown', LDropdown)
    app.component('LMessage', LMessage)
    app.component('LTooltip', LTooltip)
    app.config.globalProperties.createMessage = createMessage
    app.config.globalProperties.closeMessageAll = closeMessageAll
  }
}
