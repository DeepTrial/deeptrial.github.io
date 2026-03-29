/**
 * 工具集配置文件
 * 添加或修改工具只需编辑此文件
 */

export interface Tool {
  name: string
  url: string
  description: string
  category: string
  icon?: string // 可选：图标emoji
}

export const tools: Tool[] = [
  // ============ 数据格式 ============
  {
    name: 'JSON格式化',
    url: 'https://json.cn',
    description: 'JSON在线解析、格式化、压缩',
    category: '数据格式',
    icon: '📋'
  },
  {
    name: 'JSON Editor Online',
    url: 'https://jsoneditoronline.org',
    description: '可视化JSON编辑器',
    category: '数据格式',
    icon: '📝'
  },
  {
    name: 'YAML转JSON',
    url: 'https://www.json2yaml.com',
    description: 'YAML与JSON互转',
    category: '数据格式',
    icon: '📄'
  },

  // ============ 开发工具 ============
  {
    name: '正则测试',
    url: 'https://regex101.com',
    description: '在线正则表达式测试，支持多种语言',
    category: '开发工具',
    icon: '🔍'
  },
  {
    name: 'CodePen',
    url: 'https://codepen.io',
    description: '前端代码在线编辑器',
    category: '开发工具',
    icon: '✏️'
  },
  {
    name: 'JSFiddle',
    url: 'https://jsfiddle.net',
    description: 'Web开发在线测试',
    category: '开发工具',
    icon: '🕸️'
  },

  // ============ 编码转换 ============
  {
    name: '时间戳转换',
    url: 'https://tool.lu/timestamp',
    description: '时间戳与日期格式互转',
    category: '编码转换',
    icon: '⏰'
  },
  {
    name: 'Base64编解码',
    url: 'https://base64.us',
    description: 'Base64在线编码解码',
    category: '编码转换',
    icon: '🔢'
  },
  {
    name: 'URL编解码',
    url: 'https://tool.chinaz.com/tools/urlencode.aspx',
    description: 'URL编码与解码',
    category: '编码转换',
    icon: '🔗'
  },

  // ============ 网络工具 ============
  {
    name: 'IP查询',
    url: 'https://ip.sb',
    description: '查看当前IP地址',
    category: '网络工具',
    icon: '🌐'
  },
  {
    name: 'Speed Test',
    url: 'https://www.speedtest.net',
    description: '网速测试',
    category: '网络工具',
    icon: '⚡'
  },

  // ============ 文档工具 ============
  {
    name: 'MDN Web Docs',
    url: 'https://developer.mozilla.org',
    description: 'Web技术权威文档',
    category: '文档工具',
    icon: '📚'
  },
  {
    name: 'DevDocs',
    url: 'https://devdocs.io',
    description: '多语言API文档聚合',
    category: '文档工具',
    icon: '📖'
  }
]

// 获取所有分类
export const categories = [...new Set(tools.map(t => t.category))]
