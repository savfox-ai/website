---
title: 'Discord'
description: '配置 Savfox Discord 桥接。'
---

# Discord 频道

## 配置

```toml
[gateway.bridges.discord]
enabled = true
bot_token = "your-discord-bot-token"
```

## 要点

- 在 Discord Developer Portal 创建 Bot
- 打开 Message Content Intent
- 给 Bot 授予发送/读取消息权限
- 启动 `savfox gateway` 后验证 Bot 在线
