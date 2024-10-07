import { describe, test, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Tooltip from './Tooltip.vue'

// 模拟 Popper.js
vi.mock('@popperjs/core')

// 定义可见性变化的回调函数
const onVisibleChange = vi.fn()

describe('Tooltip.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers() // 使用虚假定时器
  })

  test('basic tooltip functionality', async () => {
    const wrapper = mount(
      () => (
        <div>
          <div id="outside"></div>
          <Tooltip content="hello tooltip" trigger="click" onVisible-change={onVisibleChange}>
            <button id="trigger">Trigger</button>
          </Tooltip>
        </div>
      ),
      {
        attachTo: document.body // 将组件挂载到文档的 body 中
      }
    )

    // 静态测试：确保触发区域存在和 tooltip 初始状态
    const triggerArea = wrapper.find('#trigger')
    expect(triggerArea.exists()).toBeTruthy()
    expect(wrapper.find('.l-tooltip__popper').exists()).toBeFalsy()

    // 测试点击触发 tooltip 的行为
    await triggerArea.trigger('click')
    await vi.runAllTimers() // 运行所有定时器，确保异步操作完成

    // 检查 tooltip 是否出现
    expect(wrapper.find('.l-tooltip__popper').exists()).toBeTruthy()
    expect(wrapper.get('.l-tooltip__popper').text()).toBe('hello tooltip')
    expect(onVisibleChange).toHaveBeenCalledWith(true)

    // 测试点击外部区域关闭 tooltip
    await wrapper.get('#outside').trigger('click')
    await vi.runAllTimers()

    // 验证 tooltip 被隐藏
    expect(wrapper.find('.l-tooltip__popper').exists()).toBeFalsy()
    expect(onVisibleChange).toHaveBeenLastCalledWith(false)
  })
})
