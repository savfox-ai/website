---
title: 'Security'
description: 'Security features and configuration in Savfox.'
---

# Security

Savfox uses layered safety controls for local and remote operation.

## Core Security Areas

<Card title="Sandbox" href="/security/sandbox" icon="shield">
  Read-only/workspace-write/full-access policies.
</Card>

## Security Controls

- Approval policies for shell and file operations
- Gateway bearer tokens with scoped access
- Platform-native sandboxing on macOS/Linux/Windows
- Audit-friendly CLI and gateway logs

## Recommendations

1. Use `workspace-write` for daily development.
2. Keep `--ask-for-approval unless-trusted` or stricter.
3. Issue separate tokens for operator/viewer/chat clients.
