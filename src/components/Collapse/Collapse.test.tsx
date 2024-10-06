import { describe, test, expect, vi, beforeAll, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import type { VueWrapper, DOMWrapper } from '@vue/test-utils'
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'

const onChange = vi.fn()
let wrapper: VueWrapper
let headers: DOMWrapper<Element>[], contents: DOMWrapper<Element>[]

describe('Collapse.vue', () => {
  beforeAll(() => {
    wrapper = mount(
      () => (
        <Collapse modelValue={['a']} onChange={onChange}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
          <CollapseItem name="b" title="title b">
            content b
          </CollapseItem>
          <CollapseItem name="c" title="title c" disabled>
            content c
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ['Icon']
        },
        attachTo: document.body
      }
    )
    headers = wrapper.findAll('.l-collapse-item__header')
    contents = wrapper.findAll('.l-collapse-item__wrapper')
  })

  describe('基础结构和内容测试', () => {
    test('应该渲染正确的头部和内容', () => {
      expect(headers.length).toBe(3)
      expect(contents.length).toBe(3)
      expect(headers[0].text()).toBe('title a')
      expect(contents[0].isVisible()).toBeTruthy()
      expect(contents[1].isVisible()).toBeFalsy()
      expect(contents[0].text()).toBe('content a')
    })
  })

  describe('交互行为测试', () => {
    test('点击标题应展开和关闭内容', async () => {
      await headers[0].trigger('click') // 点击第一个标题
      expect(contents[0].isVisible()).toBeFalsy() // 第一个内容应不可见

      await headers[1].trigger('click') // 点击第二个标题
      expect(contents[1].isVisible()).toBeTruthy() // 第二个内容应可见
    })

    test('应发送正确的事件', () => {
      expect(onChange).toHaveBeenCalledTimes(2)
      expect(onChange).toHaveBeenCalledWith([])
      expect(onChange).toHaveBeenLastCalledWith(['b'])
    })

    test('禁用的内容应无响应', async () => {
      onChange.mockClear() // 清除调用记录，避免影响后续测试
      const disabledHeader = headers[2]
      const disabledContent = contents[2]

      expect(disabledHeader.classes()).toContain('is-disabled')
      await disabledHeader.trigger('click')
      expect(disabledContent.isVisible()).toBeFalsy()
      expect(onChange).not.toHaveBeenCalled() // 禁用状态不应触发事件
    })
  })
})
