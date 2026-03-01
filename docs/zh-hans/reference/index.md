---
title: 'API 参考'
description: 'Savfox REST 与 WebSocket API 概览。'
---

# API 参考

## 认证

除 `/health` 外，网关请求通常需要 Bearer Token：

```bash
curl -H "Authorization: Bearer <token>" http://localhost:18881/api/status
```

## REST 入口

- `/health`
- `/api/status`
- `/api/config`
- `/api/sessions`
- `/api/agent`
- `/v1/chat/completions`

## WebSocket

- 端点：`ws://localhost:18881/ws`
- 协议：JSON-RPC 2.0
- 常用方法：`chat.send`、`sessions.list`、`config.get`、`cron.list`
