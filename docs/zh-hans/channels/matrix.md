---
title: 'Matrix'
description: '配置 Savfox Matrix 桥接。'
---

# Matrix 频道

## 配置示例

```toml
[gateway.bridges.matrix]
enabled = true
homeserver = "https://matrix.example.com"
access_token = "your-access-token"
user_id = "@savfox-bot:example.com"
```

## 说明

- 使用专用 Bot 账号
- 将 Bot 邀请进需要响应的房间
- 建议结合会话隔离策略按房间或用户维护上下文
