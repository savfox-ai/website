---
title: 'Concepts'
description: 'Core concepts and architecture of Savfox.'
---

# Concepts

Understand the core concepts behind Savfox's architecture.

## Core Guides

<Card title="Configuration" href="/concepts/configuration" icon="settings">
  Layered config, profiles, environment variables, and overrides.
</Card>

<Card title="Sessions" href="/concepts/sessions" icon="layers">
  Session lifecycle, resume/fork behavior, and persistence.
</Card>

## Runtime Model

Savfox combines:

- Agent reasoning loop
- Tool calls (shell/file/search/patch)
- Approval workflow
- Sandbox policy enforcement
- Provider-specific model adapters

## Architecture Snapshot

```mermaid
flowchart TB
  A[CLI/TUI] --> B[Core Agent]
  C[Gateway + Bridges] --> B
  B --> D[Tool System]
  B --> E[Session Store]
  B --> F[LLM Providers]
```
