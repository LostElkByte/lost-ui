import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/Button'
import Alert from '@/components/Alert'
import Collapse, { CollapseItem } from '@/components/Collapse'
import Dropdown from '@/components/Dropdown'
import Icon from '@/components/Icon'
import Message, { createMessage, closeAll as closeMessageAll } from '@/components/Message'
import Tooltip from '@/components/Tooltip'
import './styles/index.css'

library.add(fas)
const components = [
  Button,
  Alert,
  Collapse,
  CollapseItem,
  Dropdown,
  Icon,
  Message,
  Notification,
  Tooltip
]
const install = (app: any) => {
  components.map((component) => {
    app.use(component)
  })
}
export {
  install,
  Button,
  Alert,
  Collapse,
  CollapseItem,
  Dropdown,
  Icon,
  Message,
  Tooltip,
  createMessage,
  closeMessageAll
}

export default {
  install
}
