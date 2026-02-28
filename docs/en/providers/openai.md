---
title: 'OpenAI'
description: 'Configure OpenAI GPT models with Savfox.'
---

# OpenAI Provider

Configure Savfox to use OpenAI's GPT models.

## Authentication

### Using Login (Recommended)

```bash
savfox login
```

Follow the interactive prompts to authenticate with OpenAI.

### Using API Key

```toml
[auth]
provider = "openai"
api_key = "${OPENAI_API_KEY}"
```

Or set the environment variable:

```bash
export OPENAI_API_KEY=sk-...
```

## Available Models

| Model         | Description           | Best For              |
| ------------- | --------------------- | --------------------- |
| gpt-4o        | Latest flagship model | Complex tasks, coding |
| gpt-4o-mini   | Fast, cost-effective  | Quick tasks           |
| gpt-4-turbo   | Previous generation   | General use           |
| gpt-3.5-turbo | Fast, cheap           | Simple tasks          |

## Configuration

```toml
[model]
provider_id = "openai"
model = "gpt-4o"

[model.openai]
temperature = 0.7
max_tokens = 4096
```

## CLI Usage

```bash
# Use GPT-4o
savfox -m gpt-4o exec "Refactor this code"

# Use GPT-4o-mini
savfox -m gpt-4o-mini exec "Quick task"
```

## Azure OpenAI

For Azure deployments:

```toml
[model]
provider_id = "openai"
model = "gpt-4o"

[model.openai]
base_url = "https://your-resource.openai.azure.com"
api_key = "${AZURE_OPENAI_KEY}"
api_version = "2024-02-15-preview"
deployment = "gpt-4o-deployment"
```

## Rate Limits

OpenAI has rate limits based on your tier:

- Tier 1: 500 RPM
- Tier 2: 5,000 RPM
- Higher tiers available

Savfox handles rate limiting automatically with retries.

## Troubleshooting

### Authentication errors

1. Verify your API key is valid
2. Check if the key has required permissions
3. Ensure the key hasn't been revoked

### Rate limit errors

1. Reduce request frequency
2. Upgrade your OpenAI tier
3. Use a smaller model for non-critical tasks

### Model not found

1. Verify the model name is correct
2. Check if you have access to the model
3. Some models require special access
