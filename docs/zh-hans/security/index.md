---
title: '安全'
description: 'Savfox 安全机制总览。'
---

# 安全

Savfox 通过审批、沙箱和网关令牌实现分层安全控制。

<Card title="沙箱" href="/security/sandbox" icon="shield">
  read-only / workspace-write / full-access 模式说明。
</Card>

## 建议

1. 日常开发优先使用 `workspace-write`。
2. 保持审批策略在 `unless-trusted` 或更严格。
3. 网关为不同客户端分配不同 scope 的令牌。
