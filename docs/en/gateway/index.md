---
title: 'Gateway Server'
description: 'Remote HTTP/WebSocket access with OpenAI-compatible API and chat bridges.'
---

# Gateway Server

The gateway server provides remote HTTP/WebSocket access to Savfox, enabling web clients, chat platform integrations, and multi-device usage.

## Starting the Gateway

```bash
savfox gateway
savfox gateway --port 8080
savfox gateway --port 8080 --token my-secret-token
savfox gateway --host 0.0.0.0 --port 443 --tls-cert cert.pem --tls-key key.pem
```

**Server options:**

| Flag                | Default        | Description                     |
| ------------------- | -------------- | ------------------------------- |
| `--host <ADDR>`     | `127.0.0.1`    | Bind address                    |
| `--port <PORT>`     | `18881`        | Listen port                     |
| `--token <TOKEN>`   | Auto-generated | Bearer token for authentication |
| `--tls-cert <PATH>` | —              | TLS certificate for HTTPS/WSS   |
| `--tls-key <PATH>`  | —              | TLS private key                 |

If `--token` is omitted, a random token is generated and printed at startup.

## Authentication

All API and WebSocket requests require a bearer token:

```
Authorization: Bearer <token>
```

Tokens support three scopes:

- **Operator** — Full access to all APIs and agent execution
- **Viewer** — Read-only access to status, sessions, and logs
- **Chat** — Send and receive chat messages only

Validate a token:

```bash
curl -X POST http://localhost:18881/api/token/validate \
  -H "Authorization: Bearer <token>"
```

## REST API Endpoints

| Path                         | Method | Description                    |
| ---------------------------- | ------ | ------------------------------ |
| `/health`                    | GET    | Health check                   |
| `/api/status`                | GET    | Server status and info         |
| `/api/config`                | GET    | Current configuration          |
| `/api/config/patch`          | POST   | Patch configuration            |
| `/api/config/apply`          | POST   | Apply configuration changes    |
| `/api/message`               | POST   | Send a message to the agent    |
| `/api/sessions`              | GET    | List sessions                  |
| `/api/sessions/<id>/history` | GET    | Session conversation history   |
| `/api/restart`               | POST   | Restart the server             |
| `/api/agent`                 | POST   | Invoke the agent               |
| `/api/agent/wait`            | POST   | Invoke and wait for completion |
| `/v1/chat/completions`       | POST   | OpenAI-compatible chat API     |

## WebSocket JSON-RPC

Connect to the WebSocket endpoint for real-time bidirectional communication:

```
ws://localhost:18881/ws
```

The protocol uses JSON-RPC 2.0. Example request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "status",
  "params": {}
}
```

Key method groups:

- **Agent** — `agent`, `agent.identity`, `agent.wait`
- **Chat** — `chat.send`, `chat.history`, `chat.abort`
- **Sessions** — `sessions.list`, `sessions.preview`, `sessions.patch`
- **Config** — `config.get`, `config.set`, `config.apply`
- **Cron** — `cron.list`, `cron.add`, `cron.update`, `cron.remove`

## Management Subcommands

### Status

```bash
savfox gateway status
```

### Logs

```bash
savfox gateway logs
savfox gateway logs --follow
savfox gateway logs --lines 100
```

### Approvals

```bash
savfox gateway approvals list
savfox gateway approvals approve <ID>
savfox gateway approvals deny <ID>
```

## Chat Platform Bridges

The gateway can bridge conversations to external chat platforms. Configure bridges in your `config.toml`:

```toml
[gateway.bridges.discord]
enabled = true
bot_token = "your-discord-bot-token"

[gateway.bridges.telegram]
enabled = true
bot_token = "your-telegram-bot-token"

[gateway.bridges.slack]
enabled = true
bot_token = "xoxb-your-slack-bot-token"
signing_secret = "your-signing-secret"
```

**Supported platforms:**

| Platform    | Config Key            | Required Fields               |
| ----------- | --------------------- | ----------------------------- |
| Discord     | `bridges.discord`     | `bot_token`                   |
| Telegram    | `bridges.telegram`    | `bot_token`                   |
| Slack       | `bridges.slack`       | `bot_token`, `signing_secret` |
| Matrix      | `bridges.matrix`      | Server URL, credentials       |
| Mattermost  | `bridges.mattermost`  | Server URL, token             |
| Google Chat | `bridges.google_chat` | Service account               |
| Line        | `bridges.line`        | Channel token                 |
| Feishu      | `bridges.feishu`      | App credentials               |
| IRC         | `bridges.irc`         | Server, channel, nick         |
| Webhook     | `bridges.webhook`     | URL, `secret`                 |

## Cron Service

Schedule recurring tasks via the WebSocket API:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "cron.add",
  "params": {
    "name": "daily-report",
    "schedule": { "type": "cron", "expr": "0 9 * * *" },
    "payload": {
      "type": "agentTurn",
      "prompt": "Generate the daily status report"
    }
  }
}
```

Schedule types:

- `at` — One-shot execution at a specific time
- `every` — Repeat at a fixed interval
- `cron` — Standard cron expression

## Next Steps

<Card title="Channels" href="/channels" icon="message-square">
  Configure chat platform bridges.
</Card>

<Card title="Configuration" href="/gateway/configuration" icon="settings">
  Gateway configuration reference.
</Card>

<Card title="API Reference" href="/reference" icon="code">
  Full API documentation.
</Card>
