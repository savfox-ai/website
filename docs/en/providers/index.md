---
title: 'Providers'
description: 'Configure LLM providers for Savfox.'
---

# Providers

Savfox supports 60+ cloud and local model providers via OpenAI-compatible API endpoints.

## Provider Guides

<Card title="OpenAI" href="/providers/openai" icon="cpu">
  API key/OAuth auth and model selection.
</Card>

<Card title="Anthropic" href="/providers/anthropic" icon="brain">
  Claude configuration and provider-specific headers.
</Card>

<Card title="Google / Gemini" href="/providers/google" icon="globe">
  Gemini models via Google AI or Vertex AI.
</Card>

<Card title="DeepSeek" href="/providers/deepseek" icon="search">
  DeepSeek models for coding and reasoning.
</Card>

<Card title="Groq" href="/providers/groq" icon="zap">
  Ultra-fast inference with Groq hardware.
</Card>

<Card title="Ollama" href="/providers/ollama" icon="box">
  Local models via OpenAI-compatible endpoint.
</Card>

## Selection Tips

- Coding and general usage: `gpt-4.1`, `claude-sonnet-4`, `deepseek-coder`
- Fast low-cost runs: `gpt-4.1-mini`, `claude-haiku`, Groq models
- Complex reasoning: `o3`, `claude-opus-4`, `deepseek-reasoner`
- Local-first/privacy: Ollama, LM Studio

## Other Supported Providers

Savfox works with any OpenAI-compatible API endpoint. Popular providers include:

| Provider | Provider ID | Notes |
|----------|-------------|-------|
| xAI (Grok) | `xai` | `https://api.x.ai/v1` |
| Mistral | `mistral` | `https://api.mistral.ai/v1` |
| OpenRouter | `openrouter` | Aggregator with 100+ models |
| Together AI | `togetherai` | Open-source model hosting |
| Fireworks AI | `fireworks-ai` | Fast inference |
| Cerebras | `cerebras` | Ultra-fast inference |
| Perplexity | `perplexity` | Search-augmented models |
| SiliconFlow | `siliconflow` | Chinese provider |
| Moonshot AI | `moonshotai` | Kimi models |
| Volcengine | `volcengine` | ByteDance cloud |
| ZhipuAI | `zhipuai` | GLM models |

Configure any provider by setting `provider_id` and optionally `base_url` in your config:

```toml
[model]
provider_id = "xai"
model = "grok-3"
api_key = "${XAI_API_KEY}"
```
