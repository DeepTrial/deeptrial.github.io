---
layout: home
---

<div class="hero-geek">
  <div class="terminal-header">
    <span class="dot red"></span>
    <span class="dot yellow"></span>
    <span class="dot green"></span>
    <span class="title">~/knowledge-base</span>
  </div>
  <div class="terminal-body">
    <pre class="ascii-art">
 _  __                     _     _ _                      _
| |/ /                    | |   (_) |                    | |
| ' / ___  _ __ ___   __ _| |__  _| |___  __ _ _ __ _ __ | |
|  < / _ \| '_ ` _ \ / _` | '_ \| | / __|/ _` | '__| '_ \| |
| . \ (_) | | | | | | (_| | |_) | | \__ \ (_| | |  | |_) | |
|_|\_\___/|_| |_| |_|\__,_|_.__/|_|_|___/\__,_|_|  | .__/|_|
                                                    | |
                                                    |_|
    </pre>
    <div class="typing-text">
      <span class="prompt">$</span>
      <span class="command">cat mission.txt</span>
    </div>
    <p class="mission">记录编译原理、底层技术、系统编程的探索与实践</p>
    <div class="typing-text">
      <span class="prompt">$</span>
      <span class="cursor">_</span>
    </div>
  </div>
</div>

<div class="stats-bar">
  <div class="stat-item">
    <span class="stat-icon">⚙️</span>
    <span class="stat-label">Compiler</span>
    <span class="stat-desc">编译器构造</span>
  </div>
  <div class="stat-item">
    <span class="stat-icon">🔧</span>
    <span class="stat-label">LLVM</span>
    <span class="stat-desc">优化与代码生成</span>
  </div>
  <div class="stat-item">
    <span class="stat-icon">🎯</span>
    <span class="stat-label">Analysis</span>
    <span class="stat-desc">程序分析与优化</span>
  </div>
  <div class="stat-item">
    <span class="stat-icon">💻</span>
    <span class="stat-label">Systems</span>
    <span class="stat-desc">系统级编程</span>
  </div>
</div>

<div class="feature-grid">
  <a href="/notes/" class="feature-item primary">
    <div class="feature-icon">📖</div>
    <h3>技术笔记</h3>
    <p>编译器前端 · 中间表示 · 后端优化 · 运行时系统</p>
    <span class="feature-arrow">→</span>
  </a>

  <a href="/notes/compiler/" class="feature-item">
    <div class="feature-icon">⚙️</div>
    <h3>编译器构造</h3>
    <p>词法分析 · 语法分析 · 语义分析 · IR设计</p>
  </a>

  <a href="/notes/llvm/" class="feature-item">
    <div class="feature-icon">🔧</div>
    <h3>LLVM</h3>
    <p>Pass开发 · 优化策略 · 代码生成 · JIT编译</p>
  </a>

  <a href="/notes/analysis/" class="feature-item">
    <div class="feature-icon">🎯</div>
    <h3>程序分析</h3>
    <p>数据流分析 · 指针分析 · 静态检查 · 符号执行</p>
  </a>

  <a href="/tools/" class="feature-item">
    <div class="feature-icon">🛠️</div>
    <h3>工具集</h3>
    <p>Compiler Explorer · Godbolt · 在线汇编</p>
  </a>

  <a href="/snippets/" class="feature-item">
    <div class="feature-icon">📦</div>
    <h3>代码片段</h3>
    <p>Pass模板 · IR示例 · 测试用例</p>
  </a>
</div>

<style>
.hero-geek {
  background: #0d1117;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
}

.terminal-header {
  background: #161b22;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #30363d;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.terminal-header .title {
  margin-left: 12px;
  color: #8b949e;
  font-size: 14px;
}

.terminal-body {
  padding: 24px;
  color: #c9d1d9;
}

.ascii-art {
  color: #58a6ff;
  font-size: 12px;
  line-height: 1.2;
  margin-bottom: 20px;
  overflow-x: auto;
}

.typing-text {
  margin: 12px 0;
}

.prompt {
  color: #7ee787;
  margin-right: 8px;
}

.command {
  color: #79c0ff;
}

.cursor {
  animation: blink 1s infinite;
  color: #7ee787;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.mission {
  color: #8b949e;
  margin: 8px 0 16px 24px;
  font-size: 15px;
}

.stats-bar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-item {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: all 0.2s;
}

.stat-item:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
}

.stat-icon {
  font-size: 1.5rem;
  display: block;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-weight: 600;
  color: var(--vp-c-text-1);
  display: block;
}

.stat-desc {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  margin-top: 0.25rem;
  display: block;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.feature-item {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-item:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.feature-item.primary {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, var(--vp-c-brand-dark) 100%);
  border: none;
}

.feature-item.primary h3,
.feature-item.primary p,
.feature-item.primary .feature-arrow {
  color: white;
}

.feature-item.primary .feature-icon {
  font-size: 2rem;
}

.feature-icon {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.feature-item h3 {
  margin: 0 0 0.5rem;
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
}

.feature-item p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.5;
}

.feature-arrow {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: var(--vp-c-text-3);
}

@media (max-width: 768px) {
  .ascii-art {
    font-size: 8px;
  }

  .stats-bar {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
