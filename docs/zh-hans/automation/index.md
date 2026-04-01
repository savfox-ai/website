---
title: '自动化'
description: 'Savfox 的 hooks、cron 与 webhook 自动化能力。'
---

# 自动化

通过 hooks、cron 定时任务和 webhooks 构建自动化流程。

## Hooks

Hooks 由 Savfox 中的事件触发。

### 配置

```toml
[[hooks]]
event = "message.received"
command = "notify-send 'New message'"

[[hooks]]
event = "session.created"
command = "/path/to/script.sh"
```

### 事件

| 事件               | 说明           |
| ------------------ | -------------- |
| `message.received` | 收到新消息     |
| `message.sent`     | 消息已发送     |
| `session.created`  | 新会话开始     |
| `session.archived` | 会话已归档     |
| `file.modified`    | 文件被修改     |

### Hook 上下文

Hooks 通过环境变量接收上下文：

```bash
SAVFOX_EVENT=message.received
SAVFOX_SESSION_ID=abc123
SAVFOX_MESSAGE="Hello"
```

## Cron 定时任务

通过网关 API 安排定期执行的任务。

### 添加定时任务

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "cron.add",
  "params": {
    "name": "daily-report",
    "schedule": { "type": "cron", "expr": "0 9 * * *" },
    "payload": { "type": "agentTurn", "prompt": "生成每日报告" }
  }
}
```

### 调度类型

| 类型    | 示例                   | 说明               |
| ------- | ---------------------- | ------------------ |
| `cron`  | `0 9 * * *`            | 标准 cron 表达式   |
| `every` | `30m`                  | 每 30 分钟         |
| `at`    | `2024-12-25T09:00:00Z` | 一次性定时执行     |

### Cron 表达式格式

```
┌───────────── 分钟 (0 - 59)
│ ┌───────────── 小时 (0 - 23)
│ │ ┌───────────── 日 (1 - 31)
│ │ │ ┌───────────── 月 (1 - 12)
│ │ │ │ ┌───────────── 星期 (0 - 6)（周日 = 0）
│ │ │ │ │
* * * * *
```

### 管理定时任务

```bash
# 通过网关 API
{"method": "cron.list"}
{"method": "cron.remove", "params": {"name": "daily-report"}}
{"method": "cron.run", "params": {"name": "daily-report"}}
```

## Webhooks

通过 HTTP webhooks 接收外部事件。

### 配置

```toml
[gateway.bridges.webhook]
enabled = true
secret = "webhook-secret-key"
```

### 端点

```
POST /api/webhook
```

### 验证

Webhooks 使用 HMAC-SHA256 进行验证：

```bash
X-Signature: sha256=<hex-signature>
```

签名使用配置的密钥对请求体计算得出。

### 请求体示例

```json
{
  "event": "custom.event",
  "data": {
    "message": "触发智能体任务"
  }
}
```

## 自动化示例

### 每日站会报告

```json
{
  "name": "standup",
  "schedule": { "type": "cron", "expr": "0 9 * * 1-5" },
  "payload": {
    "type": "agentTurn",
    "prompt": "根据昨天的 git 提交生成站会笔记"
  }
}
```

### GitHub 集成

```toml
[[webhook.handlers]]
event = "github.push"
command = "savfox exec '审查并测试变更'"
```

### 监控告警

```toml
[[hooks]]
event = "message.received"
condition = "content contains 'ERROR'"
command = "/scripts/alert.sh"
```
