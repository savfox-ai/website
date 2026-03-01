---
title: 'Channels'
description: 'Connect chat platforms to Savfox.'
---

# Channels

Savfox can bridge messages between the gateway and external chat platforms.

## Supported Guides

<Card title="Discord" href="/channels/discord" icon="message-circle">
  Bot setup and bridge configuration.
</Card>

<Card title="Telegram" href="/channels/telegram" icon="send">
  Bot token setup and routing behavior.
</Card>

<Card title="Slack" href="/channels/slack" icon="slack">
  Slack app credentials and signing setup.
</Card>

<Card title="Matrix" href="/channels/matrix" icon="grid">
  Matrix homeserver bridge configuration.
</Card>

## Notes

- All channels are configured under `gateway.bridges.*`.
- Use token scopes + approvals for safer remote operations.
- Session isolation can be configured per sender/per channel.
