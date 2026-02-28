---
title: 'API Reference'
description: 'REST and WebSocket API documentation.'
---

# API Reference

Complete reference for Savfox's REST and WebSocket APIs.

## Authentication

All requests require a bearer token:

```bash
curl -H "Authorization: Bearer <token>" http://localhost:18881/api/status
```

## REST API

### Health

```http
GET /health
```

Response:

```json
{ "status": "ok" }
```

### Status

```http
GET /api/status
```

Response:

```json
{
  "version": "0.1.0",
  "uptime": 3600,
  "sessions": 5,
  "connections": 2
}
```

### Configuration

```http
GET /api/config
POST /api/config/patch
POST /api/config/apply
```

Patch example:

```json
{
  "model": "gpt-4o",
  "sandbox": { "mode": "workspace-write" }
}
```

### Sessions

```http
GET /api/sessions
GET /api/sessions/<id>
GET /api/sessions/<id>/history
DELETE /api/sessions/<id>
```

### Agent

```http
POST /api/agent
POST /api/agent/wait
```

Request:

```json
{
  "prompt": "Explain this code",
  "session_id": "abc123"
}
```

### Messages

```http
POST /api/message
```

Request:

```json
{
  "content": "Hello, agent!",
  "session_id": "abc123"
}
```

### OpenAI Compatible

```http
POST /v1/chat/completions
```

Request:

```json
{
  "model": "gpt-4o",
  "messages": [{ "role": "user", "content": "Hello" }],
  "stream": true
}
```

### Approvals

```http
GET /api/exec/approval
POST /api/exec/approval/<id>/approve
POST /api/exec/approval/<id>/deny
```

## WebSocket API

Connect to `ws://localhost:18881/ws`

### Protocol

JSON-RPC 2.0 format:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "status",
  "params": {}
}
```

### Methods

| Method    | Description           |
| --------- | --------------------- |
| `connect` | Initialize connection |
| `status`  | Get server status     |
| `health`  | Health check          |

#### Agent

| Method           | Description     |
| ---------------- | --------------- |
| `agent`          | Invoke agent    |
| `agent.wait`     | Invoke and wait |
| `agent.identity` | Get agent info  |

#### Chat

| Method         | Description    |
| -------------- | -------------- |
| `chat.send`    | Send message   |
| `chat.history` | Get history    |
| `chat.abort`   | Abort response |

#### Sessions

| Method             | Description     |
| ------------------ | --------------- |
| `sessions.list`    | List sessions   |
| `sessions.preview` | Preview session |
| `sessions.patch`   | Update session  |
| `sessions.reset`   | Reset session   |
| `sessions.delete`  | Delete session  |

#### Config

| Method         | Description   |
| -------------- | ------------- |
| `config.get`   | Get config    |
| `config.set`   | Set config    |
| `config.apply` | Apply changes |
| `config.patch` | Patch config  |

#### Cron

| Method        | Description |
| ------------- | ----------- |
| `cron.list`   | List jobs   |
| `cron.add`    | Add job     |
| `cron.update` | Update job  |
| `cron.remove` | Remove job  |
| `cron.run`    | Run job now |
| `cron.runs`   | List runs   |

### Events

Subscribe to events:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "subscribe",
  "params": { "events": ["message", "session"] }
}
```

## Error Responses

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

Common codes:

- `-32700` Parse error
- `-32600` Invalid request
- `-32601` Method not found
- `-32602` Invalid params
- `-32603` Internal error
