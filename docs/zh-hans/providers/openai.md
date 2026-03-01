---
title: 'OpenAI'
description: '配置 Savfox 使用 OpenAI 模型。'
---

# OpenAI 提供商

## 认证

```bash
savfox login
```

或在配置文件中设置：

```toml
[auth]
provider = "openai"
api_key = "${OPENAI_API_KEY}"
```

## 模型选择

```toml
[model]
provider_id = "openai"
model = "gpt-4o"
```

命令行临时覆盖：

```bash
savfox -m gpt-4o exec "Review this code"
savfox -m gpt-4.1 exec "Refactor this module"
```

## 自定义 base_url

```toml
[model]
provider_id = "openai"
model = "gpt-4o"
base_url = "https://your-proxy.example.com/v1"
```
