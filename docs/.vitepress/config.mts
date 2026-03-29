import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '知识库',
  description: '个人技术知识库、工具集、代码片段',
  lang: 'zh-CN',

  // GitHub Pages 部署配置
  base: '/',

  // 美观主题配置
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '知识库',

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
          text: '技术知识库',
          items: [
            { text: '概述', link: '/notes/' },
            { text: '后端', link: '/notes/backend/' },
            { text: '前端', link: '/notes/frontend/' },
            { text: 'DevOps', link: '/notes/devops/' },
            { text: '问题排查', link: '/notes/troubleshooting/' }
          ]
        }
      ],
      '/snippets/': [
        {
          text: '代码片段',
          items: [
            { text: '概述', link: '/snippets/' },
            { text: 'Docker', link: '/snippets/docker/' },
            { text: 'Git', link: '/snippets/git/' },
            { text: '配置文件', link: '/snippets/configs/' }
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
