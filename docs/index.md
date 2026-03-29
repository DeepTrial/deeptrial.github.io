---
layout: home
---

<div class="hero-container">
  <div class="hero-content">
    <pre class="ascii-art">
 ██████╗ ███████╗██████╗  █████╗ ████████╗███████╗██████╗ ██████╗ ███████╗
 ██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔════╝
 ██║  ██║█████╗  ██████╔╝███████║   ██║   █████╗  ██████╔╝██████╔╝█████╗
 ██║  ██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██╔══╝  ██╔══██╗██╔══██╗██╔══╝
 ██████╔╝███████╗██║  ██║██║  ██║   ██║   ███████╗██║  ██║██████╔╝███████╗
 ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝
    </pre>
    <div class="tagline">编译器 · 程序分析 · 底层技术</div>
    <div class="nav-row">
      <a href="/notes/" class="nav-link">知识库</a>
      <a href="/tools/" class="nav-link">工具集</a>
      <a href="/snippets/" class="nav-link">代码片段</a>
    </div>
  </div>
</div>

<style>
.hero-container {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

.hero-content {
  text-align: center;
  max-width: 100%;
}

.ascii-art {
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: clamp(4px, 1.5vw, 10px);
  line-height: 1.3;
  color: #58a6ff;
  margin-bottom: 2rem;
  white-space: pre;
  overflow-x: auto;
}

.tagline {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--vp-c-text-2);
  margin-bottom: 2.5rem;
  letter-spacing: 0.1em;
}

.nav-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.nav-link {
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  background: var(--vp-c-bg);
}

.nav-link:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .ascii-art {
    display: none;
  }

  .hero-container::before {
    content: "DEEPtrial";
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--vp-c-brand);
    margin-bottom: 1.5rem;
    display: block;
  }

  .tagline {
    font-size: 1rem;
  }

  .nav-link {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
