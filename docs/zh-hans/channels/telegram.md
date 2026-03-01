---
title: 'Telegram'
description: '配置 Savfox Telegram 桥接。'
---

# Telegram 频道

## 配置

```toml
[gateway.bridges.telegram]
enabled = true
bot_token = "your-telegram-bot-token"
```

可选安全校验：

```toml
webhook_secret_token = "your-secret-token"
```

## 验证

- 启动网关后向 Bot 发送消息
- 检查 `savfox gateway logs` 中是否正常收发
