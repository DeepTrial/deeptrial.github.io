---
layout: home
---

<div class="hero-container">
  <div class="matrix-bg"></div>
  <div class="hero-content">
    <pre class="ascii-art">
 ██████╗ ███████╗██████╗  █████╗ ████████╗███████╗██████╗ ██████╗ ███████╗
 ██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔════╝
 ██║  ██║█████╗  ██████╔╝███████║   ██║   █████╗  ██████╔╝██████╔╝█████╗
 ██║  ██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██╔══╝  ██╔══██╗██╔══██╗██╔══╝
 ██████╔╝███████╗██║  ██║██║  ██║   ██║   ███████╗██║  ██║██████╔╝███████╗
 ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝
    </pre>
    <div class="typing-container">
      <span class="prompt">$</span>
      <span class="typing-text" id="typing"></span>
      <span class="cursor">|</span>
    </div>
    <div class="tagline">// 编译器 · 程序分析 · 底层技术</div>
    <div class="nav-row">
      <a href="/notes/" class="nav-link">知识库</a>
      <a href="/tools/" class="nav-link">工具集</a>
      <a href="/snippets/" class="nav-link">代码片段</a>
    </div>
  </div>
</div>

<script setup>
import { onMounted } from 'vue'

const texts = [
  'clang -S -emit-llvm source.c',
  'opt -passes=inline input.ll',
  'llc -filetype=obj output.ll'
]

onMounted(() => {
  const typingEl = document.getElementById('typing')
  let textIndex = 0
  let charIndex = 0
  let isDeleting = false

  function type() {
    const currentText = texts[textIndex]
    if (isDeleting) {
      typingEl.textContent = currentText.substring(0, charIndex - 1)
      charIndex--
    } else {
      typingEl.textContent = currentText.substring(0, charIndex + 1)
      charIndex++
    }

    let delay = isDeleting ? 40 : 80

    if (!isDeleting && charIndex === currentText.length) {
      delay = 2000
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % texts.length
      delay = 400
    }

    setTimeout(type, delay)
  }

  type()
})
</script>

<style>
.hero-container {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem 1rem;
}

.matrix-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at 50% 30%, rgba(88, 166, 255, 0.08) 0%, transparent 60%);
  pointer-events: none;
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.ascii-art {
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: clamp(4px, 1.4vw, 10px);
  line-height: 1.3;
  color: var(--vp-c-brand);
  margin-bottom: 2rem;
  white-space: pre;
  overflow-x: auto;
}

.typing-container {
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(0.8rem, 1.8vw, 0.95rem);
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.prompt {
  color: #7ee787;
}

.typing-text {
  color: var(--vp-c-text-1);
  min-width: 200px;
  text-align: left;
}

.cursor {
  color: #7ee787;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.tagline {
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(0.85rem, 1.8vw, 1rem);
  color: var(--vp-c-text-2);
  margin-bottom: 2.5rem;
  letter-spacing: 0.12em;
}

.nav-row {
  display: flex;
  justify-content: center;
  gap: 0.875rem;
  flex-wrap: wrap;
}

.nav-link {
  padding: 0.7rem 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 0.9rem;
  font-family: 'JetBrains Mono', monospace;
  transition: all 0.2s ease;
  background: transparent;
}

.nav-link:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

@media (max-width: 640px) {
  .ascii-art {
    display: none;
  }

  .hero-content::before {
    content: "DEEPtrial";
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--vp-c-brand);
    margin-bottom: 1.5rem;
    display: block;
    letter-spacing: 0.05em;
  }

  .typing-container {
    font-size: 0.8rem;
  }

  .tagline {
    font-size: 0.85rem;
  }

  .nav-link {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
}
</style>
