---
title: 'CLI 参考'
description: '完整的命令行界面参考。'
---

# CLI 参考

所有 Savfox CLI 命令的完整参考。

## 全局选项

| 标志                       | 描述                 |
| -------------------------- | -------------------- |
| `-m, --model <MODEL>`      | 指定 LLM 模型        |
| `-p, --profile <NAME>`     | 使用命名配置档案     |
| `-c, --config <KEY=VALUE>` | 覆盖配置值           |
| `--full-auto`              | 启用完全自动审批模式 |
| `--oss`                    | 使用开源/本地模型    |
| `-h, --help`               | 显示帮助             |
| `-V, --version`            | 显示版本             |

## 命令

### savfox

启动交互式 TUI：

```bash
savfox
savfox -m gpt-4o
savfox --profile work
```

### savfox login

认证 LLM 提供商：

```bash
savfox login
savfox --oss login
savfox logout
```

### savfox exec

运行一次性任务：

```bash
savfox exec "为 src/main.rs 添加错误处理"
savfox e "解释这个函数"
savfox exec --json "列出所有 TODO"
savfox -m claude-3-5-sonnet exec "审查这段代码"
```

选项：

| 标志          | 描述         |
| ------------- | ------------ |
| `--json`      | 输出为 JSON  |
| `--no-stream` | 禁用流式输出 |

### savfox resume

恢复之前的会话：

```bash
savfox resume
savfox resume --last
savfox resume <session-id>
```

### savfox gateway

管理网关服务器：

```bash
savfox gateway
savfox gateway --port 8080
savfox gateway --host 0.0.0.0 --port 443 --tls-cert cert.pem --tls-key key.pem
savfox gateway status
savfox gateway logs
savfox gateway logs --follow
```

选项：

| 标志                | 默认值    | 描述        |
| ------------------- | --------- | ----------- |
| `--host <ADDR>`     | 127.0.0.1 | 绑定地址    |
| `--port <PORT>`     | 18881     | 监听端口    |
| `--token <TOKEN>`   | 自动      | Bearer 令牌 |
| `--tls-cert <PATH>` | -         | TLS 证书    |
| `--tls-key <PATH>`  | -         | TLS 私钥    |

### savfox config

管理配置：

```bash
savfox config list
savfox config get model
savfox config set model gpt-4o
savfox config convert --to yaml
```

## 示例

### 使用指定模型的交互模式

```bash
savfox -m gpt-4o
```

### 带配置覆盖的非交互模式

```bash
savfox -c sandbox.mode=read-only exec "分析这个代码库"
```

### 使用自定义令牌的网关

```bash
savfox gateway --port 9000 --token my-secret-token
```

### 恢复上一个会话

```bash
savfox resume --last
```
