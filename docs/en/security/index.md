---
title: 'Security'
description: 'Security features and configuration in Savfox.'
---

# Security

Savfox provides multiple layers of security to protect your system and data.

## Sandbox Modes

The sandbox controls what the agent can do on your system.

### Read-Only

No modifications allowed:

```toml
[sandbox]
mode = "read-only"
```

The agent can only read files and execute read-only commands.

### Workspace-Write

Modify files in workspace only:

```toml
[sandbox]
mode = "workspace-write"
```

The agent can modify files in your project directory but cannot access files outside.

### Full-Access

No restrictions:

```toml
[sandbox]
mode = "full-access"
```

Use with caution. The agent has full system access.

## Platform Security

Savfox uses platform-native sandboxing:

| Platform | Technology              |
| -------- | ----------------------- |
| macOS    | Seatbelt (sandbox-exec) |
| Linux    | Landlock LSM            |
| Windows  | Restricted tokens       |

## Approval Workflow

By default, Savfox requires approval for:

- File writes
- Shell command execution
- Patch applications

Configure approval behavior:

```toml
[approvals]
auto_approve_safe = true
require_for_writes = true
require_for_shell = true
```

## Token Authentication

Gateway tokens support scopes:

```toml
[[gateway.tokens]]
token = "operator-secret"
scope = "operator"

[[gateway.tokens]]
token = "viewer-secret"
scope = "viewer"

[[gateway.tokens]]
token = "chat-secret"
scope = "chat"
```

Scopes:

- **operator**: Full access
- **viewer**: Read-only
- **chat**: Message send/receive only

## Allowlists

Restrict who can interact with the agent:

```toml
[gateway.security]
allowed_users = ["user123", "user456"]
allowed_channels = ["channel-id"]
```

## Secrets Management

Store sensitive data securely:

```bash
savfox secrets set DISCORD_TOKEN "my-token"
savfox secrets get DISCORD_TOKEN
savfox secrets list
```

Secrets are stored in the system keyring.

## Audit Logging

Enable audit logging:

```toml
[logging]
audit = true
audit_file = "/var/log/savfox/audit.log"
```

## Best Practices

1. **Use workspace-write sandbox** for development
2. **Require approvals** for shell commands
3. **Use scoped tokens** for different clients
4. **Rotate tokens** periodically
5. **Enable audit logging** in production

## Security Docs

<Card title="Sandbox" href="/security/sandbox" icon="shield">
  Detailed sandbox configuration.
</Card>

<Card title="Tokens" href="/security/tokens" icon="key">
  Token management and scopes.
</Card>
