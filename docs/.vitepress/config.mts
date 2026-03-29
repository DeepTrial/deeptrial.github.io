import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'DeepTrial',
  description: '编译器与底层技术知识库',
  lang: 'zh-CN',

  // GitHub Pages 部署配置
  base: '/',

  // 美观主题配置
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'DeepTrial',

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '知识库', link: '/notes/' },
      { text: '工具集', link: '/tools/' },
      { text: '代码片段', link: '/snippets/' }
    ],

    // 侧边栏
    sidebar: {
      '/notes/': [
        {
          text: '知识库',
          items: [
            { text: '概述', link: '/notes/' },
            { text: '编译器构造', link: '/notes/compiler/' },
            { text: 'LLVM', link: '/notes/llvm/' },
            { text: '程序分析', link: '/notes/analysis/' },
            { text: '运行时系统', link: '/notes/runtime/' },
            { text: '体系结构', link: '/notes/architecture/' }
          ]
        }
      ],
      '/snippets/': [
        {
          text: '代码片段',
          items: [
            { text: '概述', link: '/snippets/' },
            { text: 'LLVM Pass', link: '/snippets/llvm-pass/' },
            { text: 'IR 示例', link: '/snippets/ir-examples/' },
            { text: '构建工具', link: '/snippets/build-tools/' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DeepTrial' }
    ],

    // 搜索
    search: {
      provider: 'local'
    },

    // 页脚
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024-present'
    },

    // 大纲配置
    outline: {
      level: [2, 3]
    }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true
  },

  // 最后更新时间
  lastUpdated: true
})
