---
title: '会话'
description: 'Savfox 会话管理机制。'
---

# 会话

每个会话都维护独立的上下文、消息历史和工具执行轨迹。

## 常用操作

```bash
savfox resume
savfox resume --last
savfox sessions list
savfox sessions archive <id>
savfox sessions delete <id>
```

## 会话分叉

- 在已有上下文上尝试不同方案
- 不破坏原始对话历史
- 适合评估多种实现路径

## 存储

会话默认持久化在 `~/.savfox/sessions/`。
