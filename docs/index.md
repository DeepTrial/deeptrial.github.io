---
layout: home
---

<div class="hero-container">
  <div class="matrix-bg"></div>
  <div class="hero-content">
    <div class="glitch-wrapper">
      <h1 class="glitch" data-text="DEEPtrial">DEEPtrial</h1>
    </div>
    <div class="typing-container">
      <span class="prompt">$</span>
      <span class="typing-text" id="typing"></span>
      <span class="cursor">|</span>
    </div>
    <div class="tagline">// 编译器 · 程序分析 · 底层技术</div>
    <div class="nav-row">
      <a href="/notes/" class="nav-link">
        <span class="nav-icon">◈</span> 知识库
      </a>
      <a href="/tools/" class="nav-link">
        <span class="nav-icon">◈</span> 工具集
      </a>
      <a href="/snippets/" class="nav-link">
        <span class="nav-icon">◈</span> 代码片段
      </a>
    </div>
    <div class="stats-row">
      <div class="stat">
        <span class="stat-value" id="counter1">0</span>
        <span class="stat-label">NOTES</span>
      </div>
      <div class="stat-divider">|</div>
      <div class="stat">
        <span class="stat-value" id="counter2">0</span>
        <span class="stat-label">TOOLS</span>
      </div>
      <div class="stat-divider">|</div>
      <div class="stat">
        <span class="stat-value" id="counter3">0</span>
        <span class="stat-label">SNIPPETS</span>
      </div>
    </div>
  </div>
</div>

<script setup>
import { onMounted } from 'vue'

const texts = [
  'clang -S -emit-llvm source.c',
  'opt -passes=inline input.ll',
  'llc -filetype=obj output.ll',
  'Welcome to DeepTrial...'
]

onMounted(() => {
  // 打字效果
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

    let delay = isDeleting ? 50 : 100

    if (!isDeleting && charIndex === currentText.length) {
      delay = 2000
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % texts.length
      delay = 500
    }

    setTimeout(type, delay)
  }

  type()

  // 计数器动画
  function animateCounter(id, target, duration = 2000) {
    const el = document.getElementById(id)
    const start = 0
    const startTime = performance.now()

    function update(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      el.textContent = Math.floor(eased * target)

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }

  setTimeout(() => {
    animateCounter('counter1', 5, 1500)
    animateCounter('counter2', 16, 1500)
    animateCounter('counter3', 3, 1500)
  }, 500)
})
</script>

<style>
.hero-container {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem 1rem;
}

/* 矩阵背景 */
.matrix-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(ellipse at 50% 0%, rgba(88, 166, 255, 0.1) 0%, transparent 50%),
    linear-gradient(180deg, transparent 0%, rgba(13, 17, 23, 0.8) 100%);
  pointer-events: none;
}

.matrix-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

/* 故障效果标题 */
.glitch-wrapper {
  margin-bottom: 1.5rem;
}

.glitch {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  color: var(--vp-c-brand);
  position: relative;
  letter-spacing: 0.1em;
  margin: 0;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  color: #0ff;
  animation: glitch-1 2s infinite linear alternate-reverse;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}

.glitch::after {
  color: #f0f;
  animation: glitch-2 3s infinite linear alternate-reverse;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
}

@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(2px, -2px); }
  40% { transform: translate(2px, 2px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(-2px, 2px); }
}

/* 打字效果 */
.typing-container {
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(0.85rem, 2vw, 1rem);
  margin-bottom: 1.5rem;
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
  min-width: 250px;
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

/* 标语 */
.tagline {
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  color: var(--vp-c-text-2);
  margin-bottom: 2.5rem;
  letter-spacing: 0.15em;
}

/* 导航按钮 */
.nav-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 0.95rem;
  font-family: 'JetBrains Mono', monospace;
  transition: all 0.3s ease;
  background: transparent;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(88, 166, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
  box-shadow: 0 0 20px rgba(88, 166, 255, 0.2);
}

.nav-icon {
  color: var(--vp-c-brand);
  font-size: 0.8rem;
}

/* 统计数据 */
.stats-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  color: var(--vp-c-brand);
}

.stat-label {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
  letter-spacing: 0.2em;
}

.stat-divider {
  color: var(--vp-c-divider);
  font-size: 1.5rem;
}

@media (max-width: 640px) {
  .glitch::before,
  .glitch::after {
    display: none;
  }

  .stats-row {
    gap: 1rem;
  }

  .stat-divider {
    display: none;
  }

  .stat {
    padding: 0 0.5rem;
  }
}
</style>
