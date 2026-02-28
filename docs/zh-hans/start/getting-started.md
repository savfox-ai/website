---
title: '快速开始'
description: '几分钟内安装 Savfox 并运行你的第一个会话。'
---

# 快速开始

目标：从零开始，以最少的设置完成第一个工作会话。

## 前提条件

- **Rust 1.89+**（如果从源码构建）
- 支持的 LLM 提供商账户（OpenAI、Anthropic 或本地提供商如 Ollama / LM Studio）
- Git（用于会话差异和补丁应用）

## 安装

### 从源码安装

```bash
git clone https://github.com/savfox-ai/savfox.git
cd savfox
cargo install --path crates/savfox-cli
```

### 验证安装

```bash
savfox --version
```

## 认证

在使用 Savfox 之前，先认证你的 LLM 提供商：

```bash
savfox login
```

这将打开一个交互式流程来配置你的 API 凭据。Savfox 将凭据安全地存储在你的系统密钥环中。

要使用开源本地提供商：

```bash
savfox --oss login
```

要登出：

```bash
savfox logout
```

## 你的第一个交互式会话

只需运行 `savfox`（不带参数）即可启动交互式终端 UI：

```bash
savfox
```

这将打开一个 TUI（终端用户界面），你可以：

- 输入消息与 AI 代理聊天
- 用差异预览查看建议的文件更改
- 批准或拒绝命令和补丁
- 切换模型和个性

## 你的第一个非交互式执行

使用 `exec` 子命令（别名 `e`）运行一次性任务：

```bash
savfox exec "为 src/main.rs 添加错误处理"
```

代理将处理你的请求，建议更改，并将结果直接输出到终端。对于 JSON 输出（便于脚本使用）：

```bash
savfox exec --json "列出代码库中的所有 TODO 注释"
```

## 快速技巧

使用 `--model` 或 `-m` 指定不同的 LLM 模型：

```bash
savfox -m gpt-4o exec "解释这段代码"
```

使用 `--full-auto` 进行低摩擦的自动执行：

```bash
savfox --full-auto exec "重构认证模块"
```

恢复之前的会话：

```bash
savfox resume        # 交互式选择器
savfox resume --last # 恢复最近的会话
```

## 下一步

<Card title="交互模式" href="/start/interactive-mode" icon="terminal">
  学习 TUI 功能、会话和审批。
</Card>

<Card title="CLI 参考" href="/cli" icon="list">
  所有命令和标志。
</Card>

<Card title="网关服务器" href="/gateway" icon="server">
  远程访问和聊天桥接。
</Card>

<Card title="配置" href="/concepts/configuration" icon="settings">
  自定义 Savfox 行为。
</Card>
