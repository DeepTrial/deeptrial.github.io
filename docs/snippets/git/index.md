# Git 常用命令

## 基础操作

```bash
# 初始化仓库
git init

# 克隆仓库
git clone https://github.com/user/repo.git

# 查看状态
git status

# 添加文件到暂存区
git add .
git add file.txt

# 提交
git commit -m "commit message"

# 推送到远程
git push origin main

# 拉取更新
git pull origin main
```

## 分支操作

```bash
# 查看分支
git branch

# 创建分支
git branch feature-xxx

# 切换分支
git checkout feature-xxx
# 或
git switch feature-xxx

# 创建并切换分支
git checkout -b feature-xxx

# 合并分支
git merge feature-xxx

# 删除分支
git branch -d feature-xxx
```

## 撤销操作

```bash
# 撤销工作区修改
git checkout -- file.txt

# 撤销暂存
git reset HEAD file.txt

# 撤销最近一次提交（保留修改）
git reset --soft HEAD^

# 撤销最近一次提交（丢弃修改）
git reset --hard HEAD^

# 修改最后一次提交信息
git commit --amend
```

## 日志查看

```bash
# 查看提交日志
git log

# 简洁日志
git log --oneline

# 图形化日志
git log --oneline --graph --all

# 查看某文件的修改历史
git log -p file.txt
```

## 远程操作

```bash
# 查看远程仓库
git remote -v

# 添加远程仓库
git remote add origin https://github.com/user/repo.git

# 删除远程仓库
git remote remove origin

# 拉取远程分支
git fetch origin

# 推送并设置上游分支
git push -u origin feature-xxx
```

## 暂存操作

```bash
# 暂存当前修改
git stash

# 查看暂存列表
git stash list

# 恢复暂存
git stash pop

# 恢复指定暂存
git stash apply stash@{0}
```
