import Icon from '@/components/Icon/Icon.vue'

Icon.install = (app: any) => {
  app.component(Icon.name, Icon)
}

export default Icon

export * from './types'
