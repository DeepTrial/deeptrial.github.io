# LLVM IR 示例

常用 LLVM IR 代码模式。

## 基本结构

```llvm
; 函数定义
define i32 @add(i32 %a, i32 %b) {
entry:
  %result = add i32 %a, %b
  ret i32 %result
}

; 主函数
define i32 @main() {
entry:
  %sum = call i32 @add(i32 3, i32 4)
  ret i32 %sum
}
```

## 控制流

```llvm
; if-else
define i32 @abs(i32 %x) {
entry:
  %isNeg = icmp slt i32 %x, 0
  br i1 %isNeg, label %neg, label %pos

neg:
  %negVal = sub i32 0, %x
  br label %merge

pos:
  br label %merge

merge:
  %result = phi i32 [ %negVal, %neg ], [ %x, %pos ]
  ret i32 %result
}
```

## 循环

```llvm
; for 循环求和 1..n
define i32 @sum(i32 %n) {
entry:
  br label %loop

loop:
  %i = phi i32 [ 1, %entry ], [ %i.next, %loop ]
  %sum = phi i32 [ 0, %entry ], [ %sum.next, %loop ]
  %i.next = add i32 %i, 1
  %sum.next = add i32 %sum, %i
  %cond = icmp sle i32 %i, %n
  br i1 %cond, label %loop, label %exit

exit:
  ret i32 %sum.next
}
```

## 数组与 GEP

```llvm
; 访问数组元素
define i32 @array_access(i32* %arr, i32 %idx) {
entry:
  %ptr = getelementptr i32, i32* %arr, i32 %idx
  %val = load i32, i32* %ptr
  ret i32 %val
}
```

## 结构体

```llvm
; 定义结构体
%struct.Point = type { i32, i32 }

; 访问字段
define i32 @get_x(%struct.Point* %p) {
entry:
  %x_ptr = getelementptr %struct.Point, %struct.Point* %p, i32 0, i32 0
  %x = load i32, i32* %x_ptr
  ret i32 %x
}
```

## 常用命令

```bash
# 生成 IR
clang -S -emit-llvm -O0 source.c -o source.ll

# 生成优化后的 IR
clang -S -emit-llvm -O2 source.c -o source.ll

# 运行优化
opt -O2 source.ll -S -o optimized.ll

# 查看 IR 验证
llvm-as source.ll -o - | llvm-dis
```
