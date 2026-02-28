---
title: 'CLI Reference'
description: 'Complete command-line interface reference.'
---

# CLI Reference

Complete reference for all Savfox CLI commands.

## Global Options

| Flag                       | Description                    |
| -------------------------- | ------------------------------ |
| `-m, --model <MODEL>`      | Specify the LLM model          |
| `-p, --profile <NAME>`     | Use a named config profile     |
| `-c, --config <KEY=VALUE>` | Override config values         |
| `--full-auto`              | Enable full auto-approval mode |
| `--oss`                    | Use open-source/local models   |
| `-h, --help`               | Show help                      |
| `-V, --version`            | Show version                   |

## Commands

### savfox

Launch interactive TUI:

```bash
savfox
savfox -m gpt-4o
savfox --profile work
```

### savfox login

Authenticate with an LLM provider:

```bash
savfox login
savfox --oss login
savfox logout
```

### savfox exec

Run a one-shot task:

```bash
savfox exec "Add error handling to src/main.rs"
savfox e "Explain this function"
savfox exec --json "List all TODOs"
savfox -m claude-3-5-sonnet exec "Review this code"
```

Options:

| Flag          | Description              |
| ------------- | ------------------------ |
| `--json`      | Output as JSON           |
| `--no-stream` | Disable streaming output |

### savfox resume

Resume a previous session:

```bash
savfox resume
savfox resume --last
savfox resume <session-id>
```

### savfox gateway

Manage the gateway server:

```bash
savfox gateway
savfox gateway --port 8080
savfox gateway --host 0.0.0.0 --port 443 --tls-cert cert.pem --tls-key key.pem
savfox gateway status
savfox gateway logs
savfox gateway logs --follow
```

Options:

| Flag                | Default   | Description     |
| ------------------- | --------- | --------------- |
| `--host <ADDR>`     | 127.0.0.1 | Bind address    |
| `--port <PORT>`     | 18881     | Listen port     |
| `--token <TOKEN>`   | Auto      | Bearer token    |
| `--tls-cert <PATH>` | -         | TLS certificate |
| `--tls-key <PATH>`  | -         | TLS private key |

### savfox config

Manage configuration:

```bash
savfox config list
savfox config get model
savfox config set model gpt-4o
savfox config convert --to yaml
```

### savfox features

Manage feature flags:

```bash
savfox features
savfox features enable <flag>
savfox features disable <flag>
```

### savfox sessions

Manage sessions:

```bash
savfox sessions list
savfox sessions delete <id>
savfox sessions archive <id>
```

## Examples

### Interactive with specific model

```bash
savfox -m gpt-4o
```

### Non-interactive with config override

```bash
savfox -c sandbox.mode=read-only exec "Analyze this codebase"
```

### Gateway with custom token

```bash
savfox gateway --port 9000 --token my-secret-token
```

### Resume last session

```bash
savfox resume --last
```

### Profile-based execution

```bash
savfox --profile work exec "Review PR #123"
```
