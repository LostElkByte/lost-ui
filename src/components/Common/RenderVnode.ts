import { defineComponent } from 'vue'

const RenderVnode = defineComponent({
  name: 'RenderVnode',
  props: {
    vNode: {
      type: [String, Object],
      required: true
    }
  },
  setup(props) {
    return () => {
      return props.vNode
    }
  }
})

export default RenderVnode
