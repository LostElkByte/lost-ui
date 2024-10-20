import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import LButton from '@/components/Button'
import LAlert from '@/components/Alert'
import LCollapse, { CollapseItem as LCollapseItem } from '@/components/Collapse'
import LDropdown from '@/components/Dropdown'
import LIcon from '@/components/Icon'
import LMessage, { createMessage, closeAll as closeMessageAll } from '@/components/Message'
import LTooltip from '@/components/Tooltip'
import { LResize } from 'vue3-resizable'
import './styles/index.css'
import 'vue3-resizable/dist/index.css'

library.add(fas)
const components = [
  LButton,
  LAlert,
  LCollapse,
  LCollapseItem,
  LDropdown,
  LIcon,
  LMessage,
  LTooltip,
  LResize
]
const install = (app: any) => {
  components.map((component) => {
    app.component(component.name, component)
  })
}
export {
  install,
  LButton,
  LAlert,
  LCollapse,
  LCollapseItem,
  LDropdown,
  LIcon,
  LMessage,
  LTooltip,
  LResize,
  createMessage,
  closeMessageAll
}

export default {
  install
}
