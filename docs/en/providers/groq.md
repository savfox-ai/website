---
title: 'Groq'
description: 'Configure Groq for ultra-fast LLM inference with Savfox.'
---

# Groq Provider

Groq provides ultra-fast inference using custom LPU (Language Processing Unit) hardware, delivering extremely low latency responses.

## Authentication

### Using API Key

```toml
[auth]
provider = "groq"
api_key = "${GROQ_API_KEY}"
```

Or set the environment variable:

```bash
export GROQ_API_KEY=gsk_...
```

Get your API key at [console.groq.com](https://console.groq.com).

## Available Models

| Model            | Description              | Best For            |
| ---------------- | ------------------------ | ------------------- |
| llama-3.3-70b    | Llama 3.3 70B            | General tasks       |
| llama-3.1-8b     | Llama 3.1 8B             | Fast, simple tasks  |
| mixtral-8x7b     | Mixtral MoE              | Balanced quality    |
| gemma2-9b        | Google Gemma 2           | Quick tasks         |

## Configuration

```toml
[model]
provider_id = "groq"
model = "llama-3.3-70b"

[model.groq]
temperature = 0.7
max_tokens = 4096
```

## CLI Usage

```bash
# Use Llama 3.3 70B on Groq
savfox -m groq:llama-3.3-70b exec "Refactor this code"

# Fast small model
savfox -m groq:llama-3.1-8b exec "Quick explanation"
```

## Rate Limits

Groq has rate limits based on your plan:

- Free tier: Limited requests per minute and tokens per day
- Paid plans: Higher limits available

Savfox handles rate limiting automatically with retries.

## Troubleshooting

### Authentication errors

1. Verify your API key starts with `gsk_`
2. Check if the key is active
3. Ensure you haven't exceeded your quota

### Model not available

1. Check the [Groq docs](https://console.groq.com/docs/models) for current model list
2. Some models may be deprecated or renamed
