---
title: 'Slack'
description: '配置 Savfox Slack 桥接。'
---

# Slack 频道

## 配置

```toml
[gateway.bridges.slack]
enabled = true
bot_token = "xoxb-your-token"
signing_secret = "your-signing-secret"
```

## 安全

Slack 请求会进行签名验证与时间窗口校验，避免重放攻击。
