# LLVM

LLVM 编译器基础设施的学习与实践。

## 核心主题

| 主题 | 说明 |
|------|------|
| LLVM IR | 指令集、类型系统、IR生成 |
| Pass开发 | Analysis Pass、Transform Pass |
| 优化策略 | 常量传播、死代码消除、循环优化 |
| 代码生成 | 指令选择、寄存器分配、指令调度 |
| JIT | ORC JIT、MCJIT、动态编译 |

## 实用工具

```bash
# 生成IR
clang -S -emit-llvm source.c -o source.ll

# 优化IR
opt -O2 source.ll -S -o optimized.ll

# 查看Pass
opt -passes='print<domtree>' source.ll -disable-output
```
