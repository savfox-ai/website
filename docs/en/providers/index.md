---
title: 'Providers'
description: 'Configure LLM providers for Savfox.'
---

# Providers

Savfox supports multiple LLM providers. Configure your preferred provider in the config file or via CLI.

## Supported Providers

| Provider   | Type  | Description                      |
| ---------- | ----- | -------------------------------- |
| OpenAI     | Cloud | GPT-4, GPT-4o, GPT-3.5           |
| Anthropic  | Cloud | Claude 3.5 Sonnet, Claude 3 Opus |
| Ollama     | Local | Run models locally               |
| OpenRouter | Proxy | Access multiple providers        |
| Mistral    | Cloud | Mistral models                   |
| LM Studio  | Local | Local model hosting              |
| vLLM       | Local | High-performance inference       |

## Configuration

### OpenAI

```toml
[auth]
provider = "openai"
api_key = "${OPENAI_API_KEY}"

[model]
provider_id = "openai"
model = "gpt-4o"
```

### Anthropic

```toml
[auth]
provider = "anthropic"
api_key = "${ANTHROPIC_API_KEY}"

[model]
provider_id = "anthropic"
model = "claude-3-5-sonnet-20241022"
```

### Ollama

```toml
[auth]
provider = "ollama"

[model]
provider_id = "ollama"
model = "llama3.2"
base_url = "http://localhost:11434"
```

### OpenRouter

```toml
[auth]
provider = "openrouter"
api_key = "${OPENROUTER_API_KEY}"

[model]
provider_id = "openrouter"
model = "anthropic/claude-3.5-sonnet"
```

## CLI Usage

Specify provider and model via CLI:

```bash
# OpenAI
savfox -m gpt-4o exec "Task"

# Anthropic
savfox -m claude-3-5-sonnet exec "Task"

# Ollama
savfox -m ollama:llama3.2 exec "Task"
```

## Provider-Specific Guides

<Card title="OpenAI" href="/providers/openai" icon="cpu">
  OpenAI GPT models configuration.
</Card>

<Card title="Anthropic" href="/providers/anthropic" icon="brain">
  Claude models configuration.
</Card>

<Card title="Ollama" href="/providers/ollama" icon="box">
  Local models with Ollama.
</Card>

<Card title="OpenRouter" href="/providers/openrouter" icon="route">
  Multi-provider proxy.
</Card>

## Model Selection Tips

- **Code tasks**: GPT-4o, Claude 3.5 Sonnet
- **Fast responses**: GPT-4o-mini, Claude 3 Haiku
- **Local/privacy**: Ollama with Llama 3
- **Cost-effective**: OpenRouter for price comparison
