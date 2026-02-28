---
title: 'Telegram'
description: 'Connect Savfox to Telegram.'
---

# Telegram Channel

Connect Savfox to Telegram for AI-powered conversations.

## Setup

### 1. Create a Bot

1. Open Telegram and search for `@BotFather`
2. Send `/newbot`
3. Follow the prompts to name your bot
4. Copy the API token

### 2. Configure Savfox

```toml
[gateway.bridges.telegram]
enabled = true
bot_token = "123456789:ABCdefGHIjklMNOpqrsTUVwxyz"
```

## Configuration Options

| Option                 | Type     | Default  | Description                     |
| ---------------------- | -------- | -------- | ------------------------------- |
| `enabled`              | bool     | false    | Enable Telegram bridge          |
| `bot_token`            | string   | required | Bot API token                   |
| `webhook_url`          | string   | auto     | Webhook URL for updates         |
| `webhook_secret_token` | string   | -        | Secret for webhook verification |
| `allowed_users`        | [string] | []       | Allowed user IDs                |
| `allowed_chats`        | [string] | []       | Allowed chat IDs                |

## Example Configuration

```toml
[gateway.bridges.telegram]
enabled = true
bot_token = "${TELEGRAM_BOT_TOKEN}"
webhook_secret_token = "${TELEGRAM_WEBHOOK_SECRET}"
allowed_users = ["123456789"]

[gateway.bridges.telegram.chats]
"-1001234567890" = { session = "team", require_mention = true }
```

## Security

Telegram webhook security uses a secret token:

```toml
[gateway.bridges.telegram]
webhook_secret_token = "your-random-secret"
```

The gateway validates the `x-telegram-bot-api-secret-token` header.

## Webhook Setup

For production, set up a webhook:

```bash
curl -X POST "https://api.telegram.org/bot<YOUR_TOKEN>/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-gateway.com/api/telegram/webhook",
    "secret_token": "your-secret-token"
  }'
```

## Troubleshooting

### Bot not responding

1. Verify the bot token
2. Check if the bot is blocked by the user
3. Verify webhook is set correctly

### Webhook errors

1. Ensure HTTPS is configured
2. Check the secret token matches
3. Verify the gateway is accessible from the internet

### Getting Chat ID

To find your chat ID:

```bash
# Send a message to your bot, then:
curl "https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates"
```
