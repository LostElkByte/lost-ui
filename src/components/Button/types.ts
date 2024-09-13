// ButtonType 表示按钮的类型，可以是 'primary'、'success'、'warning'、'danger' 或 'info' 中的一个
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

// ButtonSize 表示按钮的尺寸，可以是 'large' 或 'small' 中的一个
export type ButtonSize = 'large' | 'small'

// NativeType 表示按钮的原生类型，可以是 'button'、'submit' 或 'reset' 中的一个
export type NativeType = 'button' | 'submit' | 'reset'

/**
 * ButtonProps 是描述按钮属性的接口
 *
 * @property type 按钮的类型，可选值为 ButtonType 类型中的任意一个
 * @property size 按钮的尺寸，可选值为 ButtonSize 类型中的任意一个
 * @property plain 是否为朴素按钮，没有边框和背景色，默认为 false
 * @property round 是否为圆角按钮，默认为 false
 * @property circle 是否为圆形按钮，默认为 false
 * @property disabled 是否禁用按钮，默认为 false
 * @property nativeType 按钮的原生类型，可选值为 NativeType 类型中的任意一个
 * @property autofocus 按钮是否自动获取焦点，默认为 false
 * @property icon 按钮的图标，为一个字符串，表示图标的类名或者路径，默认为无图标
 * @property loading 按钮是否为加载状态，默认为 false
 */
export interface ButtonProps {
  type?: ButtonType // 按钮的类型，如 primary、success 等
  size?: ButtonSize // 按钮的尺寸，如 large、small
  plain?: boolean // 是否为朴素按钮
  round?: boolean // 是否为圆角按钮
  circle?: boolean // 是否为圆形按钮
  disabled?: boolean // 是否禁用按钮
  nativeType?: NativeType // 按钮的原生类型
  autofocus?: boolean // 是否自动获取焦点
  icon?: string // 按钮的图标
  loading?: boolean // 是否为加载状态
}

// 这是一个ButtonInstance接口，用于定义按钮实例的类型
export interface ButtonInstance {
  ref: HTMLButtonElement
}
