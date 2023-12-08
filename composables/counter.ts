// 抽象常用逻辑相关代码，提高复用性和可维护性

// 创建跨组件响应的、共享的、ssr友好的 共享状态：useState；在不同的组件引入此状态修改时会同步
export const userCounter = () => {
  return useState('counter', () => 0)
}
