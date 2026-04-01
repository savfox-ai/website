---
title: 'API 参考'
description: 'Savfox REST 与 WebSocket API 完整参考。'
---

# API 参考

Savfox 网关的 REST 和 WebSocket API 完整参考文档。

## 认证

除 `/health` 外，所有请求需要 Bearer Token：

```bash
curl -H "Authorization: Bearer <token>" http://localhost:18881/api/status
```

## REST API

### 健康检查

```http
GET /health
```

响应：

```json
{ "status": "ok" }
```

### 状态

```http
GET /api/status
```

响应：

```json
{
  "version": "0.3.0",
  "uptime": 3600,
  "sessions": 5,
  "connections": 2
}
```

### 配置

```http
GET /api/config
POST /api/config/patch
POST /api/config/apply
```

### 会话

```http
GET /api/sessions
GET /api/sessions/<id>
GET /api/sessions/<id>/history
DELETE /api/sessions/<id>
```

### 智能体

```http
POST /api/agent
POST /api/agent/wait
```

请求示例：

```json
{
  "prompt": "解释这段代码",
  "session_id": "abc123"
}
```

### OpenAI 兼容接口

```http
POST /v1/chat/completions
```

请求示例：

```json
{
  "model": "gpt-4.1",
  "messages": [{ "role": "user", "content": "你好" }],
  "stream": true
}
```

### 审批管理

```http
GET /api/exec/approval
POST /api/exec/approval/<id>/approve
POST /api/exec/approval/<id>/deny
```

## WebSocket API

连接端点：`ws://localhost:18881/ws`

### 协议

JSON-RPC 2.0 格式：

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "status",
  "params": {}
}
```

### 方法列表

| 方法    | 说明           |
| ------- | -------------- |
| `connect` | 初始化连接   |
| `status`  | 获取服务状态 |
| `health`  | 健康检查     |

#### Agent

| 方法              | 说明         |
| ----------------- | ------------ |
| `agent`           | 调用智能体   |
| `agent.wait`      | 调用并等待   |
| `agent.identity`  | 获取身份信息 |

#### Chat

| 方法           | 说明       |
| -------------- | ---------- |
| `chat.send`    | 发送消息   |
| `chat.history` | 获取历史   |
| `chat.abort`   | 中止响应   |

#### Sessions

| 方法               | 说明       |
| ------------------ | ---------- |
| `sessions.list`    | 列出会话   |
| `sessions.preview` | 预览会话   |
| `sessions.patch`   | 更新会话   |
| `sessions.reset`   | 重置会话   |
| `sessions.delete`  | 删除会话   |

#### Config

| 方法           | 说明       |
| -------------- | ---------- |
| `config.get`   | 获取配置   |
| `config.set`   | 设置配置   |
| `config.apply` | 应用变更   |
| `config.patch` | 修补配置   |

#### Cron

| 方法          | 说明       |
| ------------- | ---------- |
| `cron.list`   | 列出任务   |
| `cron.add`    | 添加任务   |
| `cron.update` | 更新任务   |
| `cron.remove` | 移除任务   |
| `cron.run`    | 立即执行   |
| `cron.runs`   | 查看执行记录 |

#### Models

| 方法           | 说明       |
| -------------- | ---------- |
| `models.list`  | 列出模型   |

## 错误响应

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32600,
    "message": "Invalid request"
  }
}
```

常见错误码：

- `-32700` 解析错误
- `-32600` 无效请求
- `-32601` 方法未找到
- `-32602` 无效参数
- `-32603` 内部错误
