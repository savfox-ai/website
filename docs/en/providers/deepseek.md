---
title: 'DeepSeek'
description: 'Configure DeepSeek models with Savfox.'
---

# DeepSeek Provider

DeepSeek offers high-quality coding and reasoning models at competitive pricing.

## Authentication

### Using API Key

```toml
[auth]
provider = "deepseek"
api_key = "${DEEPSEEK_API_KEY}"
```

Or set the environment variable:

```bash
export DEEPSEEK_API_KEY=sk-...
```

Get your API key at [platform.deepseek.com](https://platform.deepseek.com).

## Available Models

| Model             | Description              | Best For               |
| ----------------- | ------------------------ | ---------------------- |
| deepseek-chat     | General chat model       | Coding, general tasks  |
| deepseek-reasoner | Reasoning model (R1)     | Complex reasoning      |

## Configuration

```toml
[model]
provider_id = "deepseek"
model = "deepseek-chat"
```

## CLI Usage

```bash
# General coding tasks
savfox -m deepseek:deepseek-chat exec "Refactor this module"

# Complex reasoning
savfox -m deepseek:deepseek-reasoner exec "Analyze this algorithm"
```

## Troubleshooting

### Authentication errors

1. Verify your API key
2. Check account balance at [platform.deepseek.com](https://platform.deepseek.com)

### Slow responses

DeepSeek-Reasoner uses chain-of-thought reasoning which may take longer for complex tasks. This is expected behavior.
