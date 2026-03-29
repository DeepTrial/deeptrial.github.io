import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ToolCard from './components/ToolCard.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('ToolCard', ToolCard)
  }
} satisfies Theme
