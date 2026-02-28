---
title: 'Automation'
description: 'Hooks, cron jobs, and webhooks for automation.'
---

# Automation

Automate tasks with hooks, cron jobs, and webhooks.

## Hooks

Hooks are triggered by events in Savfox.

### Configuration

```toml
[[hooks]]
event = "message.received"
command = "notify-send 'New message'"

[[hooks]]
event = "session.created"
command = "/path/to/script.sh"
```

### Events

| Event              | Description          |
| ------------------ | -------------------- |
| `message.received` | New message received |
| `message.sent`     | Message sent         |
| `session.created`  | New session started  |
| `session.archived` | Session archived     |
| `file.modified`    | File was modified    |

### Hook Context

Hooks receive context via environment variables:

```bash
SAVFOX_EVENT=message.received
SAVFOX_SESSION_ID=abc123
SAVFOX_MESSAGE="Hello"
```

## Cron Jobs

Schedule recurring tasks via the gateway API.

### Add Cron Job

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "cron.add",
  "params": {
    "name": "daily-report",
    "schedule": { "type": "cron", "expr": "0 9 * * *" },
    "payload": { "type": "agentTurn", "prompt": "Generate daily report" }
  }
}
```

### Schedule Types

| Type    | Example                | Description               |
| ------- | ---------------------- | ------------------------- |
| `cron`  | `0 9 * * *`            | Standard cron expression  |
| `every` | `30m`                  | Every 30 minutes          |
| `at`    | `2024-12-25T09:00:00Z` | One-shot at specific time |

### Cron Expression Format

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of week (0 - 6) (Sunday = 0)
│ │ │ │ │
* * * * *
```

### Manage Cron Jobs

```bash
# Via gateway API
{"method": "cron.list"}
{"method": "cron.remove", "params": {"name": "daily-report"}}
{"method": "cron.run", "params": {"name": "daily-report"}}
```

## Webhooks

Receive external events via HTTP webhooks.

### Configuration

```toml
[gateway.bridges.webhook]
enabled = true
secret = "webhook-secret-key"
```

### Endpoint

```
POST /api/webhook
```

### Verification

Webhooks are verified using HMAC-SHA256:

```bash
X-Signature: sha256=<hex-signature>
```

The signature is computed from the request body using the configured secret.

### Example Payload

```json
{
  "event": "custom.event",
  "data": {
    "message": "Trigger agent task"
  }
}
```

### Webhook Handler

```toml
[[webhook.handlers]]
event = "github.push"
command = "/scripts/deploy.sh"
```

## Automation Examples

### Daily Standup Report

```json
{
  "name": "standup",
  "schedule": { "type": "cron", "expr": "0 9 * * 1-5" },
  "payload": {
    "type": "agentTurn",
    "prompt": "Generate standup notes from yesterday's git commits"
  }
}
```

### GitHub Integration

```toml
[[webhook.handlers]]
event = "github.push"
command = "savfox exec 'Review and test changes'"
```

### Monitoring Alert

```toml
[[hooks]]
event = "message.received"
condition = "content contains 'ERROR'"
command = "/scripts/alert.sh"
```
