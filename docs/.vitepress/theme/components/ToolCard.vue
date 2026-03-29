<script setup lang="ts">
import { tools, categories } from '../../tools.config'
import { ref, computed } from 'vue'

const selectedCategory = ref<string>('全部')

const filteredTools = computed(() => {
  if (selectedCategory.value === '全部') {
    return tools
  }
  return tools.filter(t => t.category === selectedCategory.value)
})

const bgColor = (category: string) => {
  const colors: Record<string, string> = {
    '数据格式': '#3b82f6',
    '开发工具': '#8b5cf6',
    '编码转换': '#10b981',
    '网络工具': '#f59e0b',
    '文档工具': '#ef4444'
  }
  return colors[category] || '#6b7280'
}
</script>

<template>
  <div class="tools-container">
    <!-- 分类筛选 -->
    <div class="category-filter">
      <button
        :class="{ active: selectedCategory === '全部' }"
        @click="selectedCategory = '全部'"
      >
        全部
      </button>
      <button
        v-for="cat in categories"
        :key="cat"
        :class="{ active: selectedCategory === cat }"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- 工具卡片列表 -->
    <div class="tools-grid">
      <a
        v-for="tool in filteredTools"
        :key="tool.name"
        :href="tool.url"
        target="_blank"
        rel="noopener noreferrer"
        class="tool-card"
      >
        <div class="tool-icon">{{ tool.icon || '🔧' }}</div>
        <div class="tool-info">
          <h3>{{ tool.name }}</h3>
          <p>{{ tool.description }}</p>
        </div>
        <span
          class="tool-category"
          :style="{ backgroundColor: bgColor(tool.category) }"
        >
          {{ tool.category }}
        </span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.tools-container {
  margin-top: 2rem;
}

.category-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.category-filter button {
  padding: 0.4rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg);
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.category-filter button:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.category-filter button.active {
  background: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
  color: white;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.tool-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tool-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tool-icon {
  font-size: 2rem;
  line-height: 1;
}

.tool-info {
  flex: 1;
}

.tool-info h3 {
  margin: 0 0 0.3rem;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.tool-info p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

.tool-category {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: white;
}

@media (max-width: 640px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>
