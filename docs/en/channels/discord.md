---
title: 'Discord'
description: 'Connect Savfox to Discord servers.'
---

# Discord Channel

Connect Savfox to Discord for AI-powered chat in your servers.

## Setup

### 1. Create a Discord Application

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Give it a name (e.g., "Savfox Bot")
4. Note the Application ID

### 2. Create a Bot

1. Navigate to "Bot" in the sidebar
2. Click "Add Bot"
3. Copy the bot token
4. Enable necessary intents:
   - Message Content Intent
   - Server Members Intent (optional)

### 3. Invite the Bot

Generate an invite URL with the required permissions:

```
https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=2048
```

Required permissions:

- Read Messages
- Send Messages
- Read Message History

### 4. Configure Savfox

```toml
[gateway.bridges.discord]
enabled = true
bot_token = "your-bot-token-here"
```

## Configuration Options

| Option             | Type     | Default  | Description                   |
| ------------------ | -------- | -------- | ----------------------------- |
| `enabled`          | bool     | false    | Enable Discord bridge         |
| `bot_token`        | string   | required | Discord bot token             |
| `allowed_guilds`   | [string] | []       | Restrict to specific servers  |
| `allowed_channels` | [string] | []       | Restrict to specific channels |
| `require_mention`  | bool     | true     | Require @mention in groups    |

## Example Configuration

```toml
[gateway.bridges.discord]
enabled = true
bot_token = "${DISCORD_BOT_TOKEN}"
allowed_guilds = ["123456789012345678"]
require_mention = true

[gateway.bridges.discord.channels]
"general" = { session = "main" }
"coding-help" = { session = "coding", model = "gpt-4o" }
```

## Security

Discord uses Ed25519 signature verification. The gateway automatically validates:

- `x-signature-ed25519` header
- `x-signature-timestamp` header

Invalid signatures return `401 invalid_signature`.

## Troubleshooting

### Bot not responding

1. Check the bot token is correct
2. Verify the bot has required permissions
3. Check gateway logs: `savfox gateway logs`

### Signature errors

1. Ensure you're using the correct public key
2. Check the request body isn't being modified

### Rate limits

Discord has strict rate limits. The gateway handles these automatically, but you may see delays during high activity.
