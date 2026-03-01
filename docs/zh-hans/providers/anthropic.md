---
title: 'Anthropic'
description: '配置 Savfox 使用 Anthropic Claude 模型。'
---

# Anthropic 提供商

## 认证

```toml
[auth]
provider = "anthropic"
api_key = "${ANTHROPIC_API_KEY}"
```

或：

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

## 模型

```toml
[model]
provider_id = "anthropic"
model = "claude-sonnet-4-20250514"
```

## 常用命令

```bash
savfox -m claude-sonnet-4-20250514 exec "Review this PR"
savfox -m claude-opus-4-20250514 exec "Design this architecture"
```
