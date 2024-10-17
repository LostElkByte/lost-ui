import Button from '@/components/Button/Button.vue'

Button.install = (app: any) => {
  app.component(Button.name, Button)
}

export default Button

export * from './types'
