---
title: 'Anthropic'
description: '配置 Savfox 使用 Anthropic Claude 模型。'
---

# Anthropic 提供商

配置 Savfox 使用 Anthropic 的 Claude 模型。

## 认证

```toml
[auth]
provider = "anthropic"
api_key = "${ANTHROPIC_API_KEY}"
```

或设置环境变量：

```bash
export ANTHROPIC_API_KEY=sk-ant-...
```

## 可用模型

| 模型                       | 说明           | 适用场景       |
| -------------------------- | -------------- | -------------- |
| claude-sonnet-4-20250514   | 最新 Sonnet    | 编码、分析     |
| claude-opus-4-20250514     | 最强能力       | 复杂推理       |
| claude-haiku-4-5-20251001  | 快速高效       | 快速任务       |

## 配置

```toml
[model]
provider_id = "anthropic"
model = "claude-sonnet-4-20250514"

[model.anthropic]
max_tokens = 16384
temperature = 1.0
```

## 快速调用

```bash
savfox -m claude-sonnet-4-20250514 exec "审查这个 PR"
savfox -m claude-opus-4-20250514 exec "设计这个架构"
```

## 扩展思考

Claude 支持扩展思考以提升复杂推理的准确性：

```toml
[model.anthropic]
thinking_budget_tokens = 10000
```

## Vertex AI (Anthropic)

通过 Google Cloud Vertex AI 使用 Claude 模型：

```toml
[model]
provider_id = "google-vertex-anthropic"
model = "claude-sonnet-4-20250514"
```

需设置环境变量：

```bash
export GOOGLE_VERTEX_PROJECT=your-project-id
export GOOGLE_VERTEX_LOCATION=us-east5
```

## 常见问题

### 认证错误

1. 确认 API Key 格式正确（以 `sk-ant-` 开头）
2. 检查 Key 是否有效
3. 确认已开通 API 访问权限

### 速率限制

Anthropic 有分级使用限制，联系 Anthropic 升级额度。
