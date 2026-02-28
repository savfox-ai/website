---
title: 'Configuration'
description: 'Configure Savfox behavior.'
---

# Configuration

Savfox uses a layered configuration system with support for profiles, CLI overrides, and feature flags.

## Config File Location

```
~/.savfox/config.toml
```

Alternative formats:

```
~/.savfox/config.yaml
~/.savfox/config.yml
```

On Windows:

```
%USERPROFILE%\.savfox\config.toml
```

## Config Sections

### Authentication

```toml
[auth]
provider = "openai"
api_key = "${OPENAI_API_KEY}"
```

### Model Selection

```toml
[model]
provider_id = "openai"
model = "gpt-4o"
```

### Sandbox Policy

```toml
[sandbox]
mode = "workspace-write"
```

Modes:

- `read-only` - No modifications allowed
- `workspace-write` - Modify workspace files only
- `full-access` - No restrictions

### Gateway Server

```toml
[gateway]
port = 18881
host = "127.0.0.1"
token = "my-secret-token"
```

### Chat Bridges

```toml
[gateway.bridges.discord]
enabled = true
bot_token = "..."

[gateway.bridges.telegram]
enabled = true
bot_token = "..."
```

### MCP Servers

```toml
[mcp.servers.my-server]
command = "node"
args = ["server.js"]
```

## Environment Variables

String values support environment variable expansion:

```toml
model = "${SAVFOX_MODEL:-gpt-4o}"
api_key = "${OPENAI_API_KEY:?API key required}"
```

Patterns:

- `${VAR}` - Use VAR, empty if unset
- `${VAR:-default}` - Use default if unset
- `${VAR:?error}` - Fail if unset

## CLI Overrides

Override config from the command line:

```bash
savfox -c model.model=gpt-4o exec "Task"
savfox -c sandbox.mode=read-only exec "Read only"
```

Multiple overrides:

```bash
savfox -c model=gpt-4o -c sandbox.mode=full-access exec "Task"
```

## Profiles

Use named profiles for different configurations:

```bash
savfox --profile work exec "Work task"
savfox -p personal exec "Personal task"
```

Profile files:

```
~/.savfox/profiles/work.toml
~/.savfox/profiles/personal.toml
```

## Feature Flags

Control experimental features:

```bash
savfox features
savfox features enable <flag>
savfox features disable <flag>
```

## Config Priority

Configuration is resolved in order (later overrides earlier):

1. System defaults
2. User config
3. Workspace config
4. Profile
5. CLI overrides

## JSON Schema

Export the schema for editor integration:

```bash
savfox app-server generate-json-schema -o ./schema
```
