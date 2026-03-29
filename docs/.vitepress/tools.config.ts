/**
 * 工具集配置文件
 * 添加或修改工具只需编辑此文件
 */

export interface Tool {
  name: string
  url: string
  description: string
  category: string
  icon?: string
}

export const tools: Tool[] = [
  // ============ 编译器工具 ============
  {
    name: 'Compiler Explorer',
    url: 'https://godbolt.org',
    description: '在线编译器对比，实时查看汇编输出',
    category: '编译器工具',
    icon: '⚙️'
  },
  {
    name: 'LLVM Playground',
    url: 'https://llvm.org/demo',
    description: 'LLVM IR在线生成与优化',
    category: '编译器工具',
    icon: '🔧'
  },
  {
    name: 'Binary Ninja',
    url: 'https://cloud.binary.ninja',
    description: '在线反汇编与二进制分析',
    category: '编译器工具',
    icon: '🔬'
  },
  {
    name: 'C++ Insights',
    url: 'https://cppinsights.io',
    description: '查看C++代码的编译器视角展开',
    category: '编译器工具',
    icon: '👁️'
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
    name: 'QuickType',
    url: 'https://app.quicktype.io',
    description: 'JSON/Schema转多语言结构体',
    category: '开发工具',
    icon: '📝'
  },
  {
    name: 'Carbon',
    url: 'https://carbon.now.sh',
    description: '代码片段美化截图',
    category: '开发工具',
    icon: '📸'
  },

  // ============ 数据格式 ============
  {
    name: 'JSON格式化',
    url: 'https://json.cn',
    description: 'JSON在线解析、格式化、压缩',
    category: '数据格式',
    icon: '📋'
  },
  {
    name: 'YAML转JSON',
    url: 'https://www.json2yaml.com',
    description: 'YAML与JSON互转',
    category: '数据格式',
    icon: '📄'
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
    name: 'Hex编辑器',
    url: 'https://hexed.it',
    description: '在线十六进制编辑器',
    category: '编码转换',
    icon: '🔢'
  },

  // ============ 文档资源 ============
  {
    name: 'LLVM Docs',
    url: 'https://llvm.org/docs',
    description: 'LLVM官方文档',
    category: '文档资源',
    icon: '📚'
  },
  {
    name: 'x86指令集',
    url: 'https://www.felixcloutier.com/x86',
    description: 'x86指令集参考手册',
    category: '文档资源',
    icon: '📖'
  },
  {
    name: 'OSDev Wiki',
    url: 'https://wiki.osdev.org',
    description: '操作系统开发百科',
    category: '文档资源',
    icon: '💾'
  }
]

export const categories = [...new Set(tools.map(t => t.category))]
