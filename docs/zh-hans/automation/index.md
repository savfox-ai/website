---
title: '自动化'
description: 'Savfox 的 hooks、cron 与 webhook 自动化能力。'
---

# 自动化

Savfox 支持通过 hooks、cron 和 webhook 构建自动化流程。

## Hooks

```toml
[[hooks]]
event = "message.received"
command = "notify-send 'New message'"
```

## Cron

通过网关 JSON-RPC 添加定时任务：

```json
{ "method": "cron.add", "params": { "name": "daily-report", "schedule": { "type": "cron", "expr": "0 9 * * *" } } }
```

## Webhook

```toml
[gateway.bridges.webhook]
enabled = true
secret = "webhook-secret"
```

建议启用 HMAC 签名校验后再对外暴露。
