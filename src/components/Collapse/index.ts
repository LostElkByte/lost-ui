import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
Collapse.install = (app: any) => {
  app.component(Collapse.name, Collapse)
}
CollapseItem.install = (app: any) => {
  app.component(CollapseItem.name, CollapseItem)
}
export default Collapse
export { CollapseItem }
export * from './types'
