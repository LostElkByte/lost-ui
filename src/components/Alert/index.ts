import Alert from '@/components/Alert/Alert.vue'

// 为 Vue 应用安装警报组件
Alert.install = (app: any) => {
  // 注册警报组件到应用中
  app.component(Alert.name, Alert)
}

export default Alert

export * from './types'
