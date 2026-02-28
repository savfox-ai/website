---
title: 'Channels'
description: 'Connect chat platforms to Savfox.'
---

# Channels

Savfox supports bridging to multiple chat platforms simultaneously. Configure channels to interact with your AI agent from Discord, Telegram, Slack, and more.

## Supported Platforms

| Platform    | Status | Description           |
| ----------- | ------ | --------------------- |
| Discord     | Stable | Full bot integration  |
| Telegram    | Stable | Bot API support       |
| Slack       | Stable | App + bot tokens      |
| Matrix      | Stable | Homeserver client     |
| Mattermost  | Stable | Bot integration       |
| Google Chat | Beta   | Service account       |
| Line        | Beta   | Messaging API         |
| Feishu      | Beta   | Bot + events          |
| IRC         | Stable | Classic IRC bot       |
| Webhook     | Stable | Generic HTTP webhooks |

## Configuration

Channels are configured in `config.toml` under `gateway.bridges`:

```toml
[gateway.bridges.discord]
enabled = true
bot_token = "your-bot-token"

[gateway.bridges.telegram]
enabled = true
bot_token = "your-bot-token"
```

## Common Options

All channels support these common options:

| Option             | Description                   |
| ------------------ | ----------------------------- |
| `enabled`          | Enable/disable the bridge     |
| `allowed_channels` | Restrict to specific channels |
| `allowed_users`    | Restrict to specific users    |
| `require_mention`  | Require bot mention in groups |
| `prefix`           | Command prefix (e.g., `!`)    |

## Security

Each platform has specific security requirements:

### Discord

- Signature verification via `x-signature-ed25519`

### Slack

- Request signing with `x-slack-signature`
- 5-minute replay window protection

### Telegram

- Secret token via `x-telegram-bot-api-secret-token`

### Webhook

- HMAC-SHA256 signature in `x-signature`

## Platform-Specific Guides

<Card title="Discord" href="/channels/discord" icon="message-circle">
  Set up Discord bot integration.
</Card>

<Card title="Telegram" href="/channels/telegram" icon="send">
  Configure Telegram bot.
</Card>

<Card title="Slack" href="/channels/slack" icon="slack">
  Slack app configuration.
</Card>

<Card title="Matrix" href="/channels/matrix" icon="grid">
  Matrix homeserver connection.
</Card>

<Card title="IRC" href="/channels/irc" icon="hash">
  IRC bot setup.
</Card>

<Card title="Webhook" href="/channels/webhook" icon="link">
  Generic webhook integration.
</Card>

## Message Routing

Control how messages are routed:

```toml
[gateway.routing]
default_session = "main"
per_sender_sessions = true
per_channel_sessions = true
```

## Troubleshooting

Common issues:

1. **Bot not responding** - Check token and permissions
2. **Signature errors** - Verify secret tokens match
3. **Rate limits** - Reduce message frequency
4. **Connection drops** - Check network stability
