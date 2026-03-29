---
layout: home
---

<div class="hero-geek">
  <div class="terminal-header">
    <span class="dot red"></span>
    <span class="dot yellow"></span>
    <span class="dot green"></span>
    <span class="title">~/deeptrial</span>
  </div>
  <div class="terminal-body">
    <pre class="ascii-art">
 ██████╗ ███████╗██████╗  █████╗ ████████╗███████╗██████╗ ██████╗ ███████╗
 ██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔════╝
 ██║  ██║█████╗  ██████╔╝███████║   ██║   █████╗  ██████╔╝██████╔╝█████╗
 ██║  ██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██╔══╝  ██╔══██╗██╔══██╗██╔══╝
 ██████╔╝███████╗██║  ██║██║  ██║   ██║   ███████╗██║  ██║██████╔╝███████╗
 ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝
    </pre>
    <div class="intro">
      <p class="line"><span class="comment">// 编译器 · 程序分析 · 底层技术</span></p>
      <p class="line"><span class="keyword">let</span> <span class="var">knowledge</span> = <span class="string">"探索程序的本质"</span>;</p>
    </div>
    <div class="nav-links">
      <a href="/notes/" class="nav-btn">
        <span class="icon">📖</span>
        <span>知识库</span>
      </a>
      <a href="/tools/" class="nav-btn">
        <span class="icon">🛠️</span>
        <span>工具集</span>
      </a>
      <a href="/snippets/" class="nav-btn">
        <span class="icon">📦</span>
        <span>代码片段</span>
      </a>
    </div>
  </div>
</div>

<style>
.hero-geek {
  background: #0d1117;
  border-radius: 16px;
  overflow: hidden;
  margin: 2rem 0;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
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
  font-size: 13px;
}

.terminal-body {
  padding: 32px;
}

.ascii-art {
  color: #58a6ff;
  font-size: 10px;
  line-height: 1.3;
  margin-bottom: 28px;
  overflow-x: auto;
  text-align: center;
}

.intro {
  margin-bottom: 32px;
  font-size: 15px;
}

.intro .line {
  margin: 8px 0;
}

.intro .comment {
  color: #8b949e;
}

.intro .keyword {
  color: #ff7b72;
}

.intro .var {
  color: #79c0ff;
}

.intro .string {
  color: #a5d6ff;
}

.nav-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 8px;
  color: #c9d1d9;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.nav-btn:hover {
  background: #30363d;
  border-color: #58a6ff;
  color: #58a6ff;
}

.nav-btn .icon {
  font-size: 16px;
}

@media (max-width: 768px) {
  .ascii-art {
    font-size: 6px;
    line-height: 1.2;
  }

  .terminal-body {
    padding: 24px 16px;
  }

  .intro {
    font-size: 13px;
  }

  .nav-btn {
    padding: 8px 16px;
    font-size: 13px;
  }
}
</style>
