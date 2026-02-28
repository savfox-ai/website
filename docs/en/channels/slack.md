---
title: 'Slack'
description: 'Connect Savfox to Slack workspaces.'
---

# Slack Channel

Connect Savfox to Slack for AI-powered conversations in your workspace.

## Setup

### 1. Create a Slack App

1. Go to [Slack API](https://api.slack.com/apps)
2. Click "Create New App"
3. Choose "From scratch"
4. Name your app (e.g., "Savfox Bot")

### 2. Configure Bot

1. Go to "Bot Users" and add a bot user
2. Go to "OAuth & Permissions"
3. Add bot token scopes:
   - `chat:write`
   - `channels:history`
   - `groups:history`
   - `im:history`
   - `mpim:history`

### 3. Install to Workspace

1. Click "Install to Workspace"
2. Copy the "Bot User OAuth Token" (starts with `xoxb-`)
3. Copy the "Signing Secret" from "Basic Information"

### 4. Configure Savfox

```toml
[gateway.bridges.slack]
enabled = true
bot_token = "xoxb-your-bot-token"
signing_secret = "your-signing-secret"
```

## Configuration Options

| Option             | Type     | Default  | Description                   |
| ------------------ | -------- | -------- | ----------------------------- |
| `enabled`          | bool     | false    | Enable Slack bridge           |
| `bot_token`        | string   | required | Bot OAuth token               |
| `signing_secret`   | string   | required | Request signing secret        |
| `allowed_channels` | [string] | []       | Restrict to channels          |
| `app_token`        | string   | -        | App-level token (Socket Mode) |

## Example Configuration

```toml
[gateway.bridges.slack]
enabled = true
bot_token = "${SLACK_BOT_TOKEN}"
signing_secret = "${SLACK_SIGNING_SECRET}"
allowed_channels = ["C1234567890"]

[gateway.bridges.slack.channels]
"C1234567890" = { session = "team", require_mention = true }
```

## Security

Slack uses request signing for verification:

- `x-slack-signature` - HMAC-SHA256 signature
- `x-slack-request-timestamp` - Request timestamp

The gateway validates signatures and enforces a 5-minute replay window.

## Socket Mode

For development without a public URL:

```toml
[gateway.bridges.slack]
app_token = "xapp-your-app-token"
socket_mode = true
```

## Troubleshooting

### Bot not responding

1. Check the bot token is valid
2. Verify required scopes are granted
3. Check if bot is invited to channels

### Signature errors

1. Verify signing secret matches
2. Check request body isn't modified
3. Ensure timestamp is within 5 minutes

### Permission errors

1. Re-install the app to workspace
2. Verify all required scopes
3. Check channel membership
