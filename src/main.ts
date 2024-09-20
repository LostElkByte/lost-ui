import './styles/index.css'
// 导入 FontAwesome 相关模块
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons' // 使用 solid 图标集

// 将所需的图标添加到库中
library.add(fas)

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
