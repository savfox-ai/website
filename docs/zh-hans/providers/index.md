---
title: '模型提供商'
description: '配置 Savfox 使用的 LLM 提供商。'
---

# 模型提供商

Savfox 支持 60+ 云端和本地模型提供商，通过 OpenAI 兼容 API 接入。

<Card title="OpenAI" href="/providers/openai" icon="cpu">
  API Key / OAuth 登录与模型选择。
</Card>

<Card title="Anthropic" href="/providers/anthropic" icon="brain">
  Claude 模型配置和请求头说明。
</Card>

<Card title="Google / Gemini" href="/providers/google" icon="globe">
  通过 Google AI 或 Vertex AI 使用 Gemini 模型。
</Card>

<Card title="DeepSeek" href="/providers/deepseek" icon="search">
  DeepSeek 编码与推理模型。
</Card>

<Card title="Groq" href="/providers/groq" icon="zap">
  Groq 硬件加速的超快推理。
</Card>

<Card title="Ollama" href="/providers/ollama" icon="box">
  本地模型部署与调用。
</Card>

## 选择建议

- 高质量编码：`gpt-4.1`、`claude-sonnet-4`、`deepseek-coder`
- 快速低成本：`gpt-4.1-mini`、`claude-haiku`、Groq 模型
- 复杂推理：`o3`、`claude-opus-4`、`deepseek-reasoner`
- 本地隐私：Ollama、LM Studio

## 其他支持的提供商

Savfox 兼容任何 OpenAI 兼容 API。常用提供商包括：

| 提供商 | Provider ID | 说明 |
|--------|-------------|------|
| xAI (Grok) | `xai` | `https://api.x.ai/v1` |
| Mistral | `mistral` | `https://api.mistral.ai/v1` |
| OpenRouter | `openrouter` | 聚合 100+ 模型 |
| Together AI | `togetherai` | 开源模型托管 |
| Fireworks AI | `fireworks-ai` | 快速推理 |
| Cerebras | `cerebras` | 超快推理 |
| Perplexity | `perplexity` | 搜索增强模型 |
| 硅基流动 | `siliconflow` | 国内提供商 |
| 月之暗面 | `moonshotai` | Kimi 模型 |
| 火山引擎 | `volcengine` | 字节跳动云 |
| 智谱 AI | `zhipuai` | GLM 模型 |

通过设置 `provider_id` 和可选的 `base_url` 即可配置任意提供商：

```toml
[model]
provider_id = "xai"
model = "grok-3"
api_key = "${XAI_API_KEY}"
```
