# 构建工具配置

编译器项目常用构建配置。

## CMake + LLVM

```cmake
cmake_minimum_required(VERSION 3.16)
project(MyCompiler)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# 查找 LLVM
find_package(LLVM REQUIRED CONFIG)
message(STATUS "Found LLVM ${LLVM_PACKAGE_VERSION}")

# 添加包含路径和定义
include_directories(${LLVM_INCLUDE_DIRS})
add_definitions(${LLVM_DEFINITIONS})

# 链接 LLVM 库
llvm_map_components_to_libnames(llvm_libs
  core
  support
  irreader
  passmanager
  x86asmparser
  x86codegen
)

add_executable(mycompiler main.cpp)
target_link_libraries(mycompiler ${llvm_libs})
```

## TableGen 配置

```cmake
# 生成 TableGen 文件
set(LLVM_TARGET_DEFINITIONS MyTarget.td)
tablegen(MyTarget MyTargetInfo.inc -gen-target-info)
tablegen(MyTarget MyTargetInstrInfo.inc -gen-instr-info)
tablegen(MyTarget MyTargetRegisterInfo.inc -gen-register-info)

add_public_tablegen_target(MyTargetCommonTableGen)
```

## Meson 构建

```python
project('mycompiler', 'cpp', default_options: ['cpp_std=c++17'])

llvm_dep = dependency('llvm', required: true)

executable('mycompiler',
  'main.cpp',
  dependencies: llvm_dep,
  install: true)
```

## 常用编译选项

```bash
# 使用 Ninja 构建
cmake -G Ninja -DCMAKE_BUILD_TYPE=Release ..
ninja

# 指定 LLVM 路径
cmake -DLLVM_DIR=/path/to/llvm/lib/cmake/llvm ..

# 编译 LLVM Pass (out-of-tree)
cmake -DLLVM_DIR=$(llvm-config --cmakedir) ..
```
