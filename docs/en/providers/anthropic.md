---
title: 'Anthropic'
description: 'Configure Anthropic Claude models with Savfox.'
---

# Anthropic Provider

Configure Savfox to use Anthropic's Claude models.

## Authentication

### Using API Key

```toml
[auth]
provider = "anthropic"
api_key = "${ANTHROPIC_API_KEY}"
```

Or set the environment variable:

```bash
export ANTHROPIC_API_KEY=sk-ant-...
```

## Available Models

| Model                      | Description     | Best For          |
| -------------------------- | --------------- | ----------------- |
| claude-3-5-sonnet-20241022 | Latest Sonnet   | Coding, analysis  |
| claude-3-opus-20240229     | Most capable    | Complex reasoning |
| claude-3-haiku-20240307    | Fast, efficient | Quick tasks       |

## Configuration

```toml
[model]
provider_id = "anthropic"
model = "claude-3-5-sonnet-20241022"

[model.anthropic]
max_tokens = 4096
temperature = 0.7
```

## CLI Usage

```bash
# Use Claude 3.5 Sonnet
savfox -m claude-3-5-sonnet-20241022 exec "Review this code"

# Use Claude 3 Opus
savfox -m claude-3-opus-20240229 exec "Complex analysis"
```

## Extended Thinking

Claude supports extended thinking for complex reasoning:

```toml
[model.anthropic]
thinking_budget_tokens = 10000
```

This enables Claude to "think" before responding, improving accuracy on complex tasks.

## Tool Use

Claude has native tool use support. Savfox automatically configures tools when using Claude.

## Troubleshooting

### Authentication errors

1. Verify your API key format (starts with `sk-ant-`)
2. Check if the key is valid
3. Ensure you have API access

### Context length errors

1. Reduce the conversation context
2. Use a model with larger context window
3. Enable context compaction

### Rate limits

Anthropic has usage tiers:

- Tier 1: Limited requests
- Tier 2-4: Higher limits

Contact Anthropic for tier upgrades.
