---
title: 'Providers'
description: 'Configure LLM providers for Savfox.'
---

# Providers

Savfox supports cloud and local model providers.

## Provider Guides

<Card title="OpenAI" href="/providers/openai" icon="cpu">
  API key/OAuth auth and model selection.
</Card>

<Card title="Anthropic" href="/providers/anthropic" icon="brain">
  Claude configuration and provider-specific headers.
</Card>

<Card title="Ollama" href="/providers/ollama" icon="box">
  Local models via OpenAI-compatible endpoint.
</Card>

## Selection Tips

- Coding and general usage: `gpt-4o`, `gpt-4.1`, `claude-sonnet`
- Fast low-cost runs: mini/haiku-style models
- Local-first/privacy: Ollama models
