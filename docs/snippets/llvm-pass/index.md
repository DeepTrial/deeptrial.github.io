# LLVM Pass 模板

常用 LLVM Pass 开发模板。

## Analysis Pass 骨架

```cpp
#include "llvm/IR/Function.h"
#include "llvm/IR/PassManager.h"
#include "llvm/Passes/PassBuilder.h"
#include "llvm/Passes/PassPlugin.h"
#include "llvm/Support/raw_ostream.h"

using namespace llvm;

struct MyAnalysis : public AnalysisInfoMixin<MyAnalysis> {
  static AnalysisKey Key;

  struct Result {
    int instructionCount;
    int basicBlockCount;
  };

  Result run(Function &F, FunctionAnalysisManager &AM) {
    Result R;
    R.instructionCount = F.getInstructionCount();
    R.basicBlockCount = F.size();
    return R;
  }
};

AnalysisKey MyAnalysis::Key;
```

## Transform Pass 骨架

```cpp
#include "llvm/IR/Function.h"
#include "llvm/IR/IRBuilder.h"
#include "llvm/Passes/PassBuilder.h"
#include "llvm/Passes/PassPlugin.h"

using namespace llvm;

struct MyTransform : public PassInfoMixin<MyTransform> {
  PreservedAnalyses run(Function &F, FunctionAnalysisManager &AM) {
    bool changed = false;

    // 在这里做变换

    return changed ? PreservedAnalyses::none() : PreservedAnalyses::all();
  }

  static bool isRequired() { return true; }
};
```

## 注册 Pass

```cpp
// 新版 Pass Manager 注册
extern "C" LLVM_ATTRIBUTE_WEAK ::llvm::PassPluginLibraryInfo
llvmGetPassPluginInfo() {
  return {
    LLVM_PLUGIN_API_VERSION, "MyPass", LLVM_VERSION_STRING,
    [](PassBuilder &PB) {
      // 注册 Function Pass
      PB.registerPipelineParsingCallback(
        [](StringRef Name, FunctionPassManager &FPM,
           ArrayRef<PassBuilder::PipelineElement>) {
          if (Name == "my-pass") {
            FPM.addPass(MyTransform());
            return true;
          }
          return false;
        });
    }};
}
```

## CMakeLists.txt

```cmake
cmake_minimum_required(VERSION 3.16)
project(MyPass)

find_package(LLVM REQUIRED CONFIG)

add_library(MyPass SHARED MyPass.cpp)

target_include_directories(MyPass PRIVATE ${LLVM_INCLUDE_DIRS})
target_compile_definitions(MyPass PRIVATE ${LLVM_DEFINITIONS})
target_compile_features(MyPass PRIVATE cxx_std_17)
```

## 编译与使用

```bash
# 编译 Pass
mkdir build && cd build
cmake .. -DLLVM_DIR=$(llvm-config --cmakedir)
make

# 使用 Pass
opt -load-pass-plugin ./MyPass.so -passes=my-pass input.ll -S -o output.ll
```
