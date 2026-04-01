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

| Model                        | Description          | Best For              |
| ---------------------------- | -------------------- | --------------------- |
| claude-sonnet-4-20250514     | Latest Sonnet        | Coding, analysis      |
| claude-opus-4-20250514       | Most capable         | Complex reasoning     |
| claude-haiku-4-5-20251001    | Fast, efficient      | Quick tasks           |

## Configuration

```toml
[model]
provider_id = "anthropic"
model = "claude-sonnet-4-20250514"

[model.anthropic]
max_tokens = 16384
temperature = 1.0
```

## CLI Usage

```bash
# Use Claude Sonnet 4
savfox -m claude-sonnet-4-20250514 exec "Review this code"

# Use Claude Opus 4
savfox -m claude-opus-4-20250514 exec "Complex analysis"
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

## Vertex AI (Anthropic)

Use Claude models via Google Cloud Vertex AI:

```toml
[model]
provider_id = "google-vertex-anthropic"
model = "claude-sonnet-4-20250514"
```

Set the required environment variables:

```bash
export GOOGLE_VERTEX_PROJECT=your-project-id
export GOOGLE_VERTEX_LOCATION=us-east5
```

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
