---
title: 'Gateway Configuration'
description: 'Configure the Savfox gateway server.'
---

# Gateway Configuration

Complete configuration reference for the Savfox gateway server.

## Basic Configuration

```toml
[gateway]
port = 18881
host = "127.0.0.1"
token = "my-secret-token"
```

## Server Options

| Option     | Type    | Default   | Description          |
| ---------- | ------- | --------- | -------------------- |
| `port`     | integer | 18881     | Listen port          |
| `host`     | string  | 127.0.0.1 | Bind address         |
| `token`    | string  | auto      | Authentication token |
| `tls_cert` | string  | -         | TLS certificate path |
| `tls_key`  | string  | -         | TLS private key path |

## TLS Configuration

Enable HTTPS/WSS:

```toml
[gateway]
port = 443
host = "0.0.0.0"
tls_cert = "/path/to/cert.pem"
tls_key = "/path/to/key.pem"
```

## Token Scopes

Configure tokens with different scopes:

```toml
[[gateway.tokens]]
token = "operator-token-123"
scope = "operator"

[[gateway.tokens]]
token = "viewer-token-456"
scope = "viewer"

[[gateway.tokens]]
token = "chat-token-789"
scope = "chat"
```

Scopes:

- **operator** - Full access to all APIs
- **viewer** - Read-only access
- **chat** - Send/receive messages only

## Rate Limiting

Configure rate limits:

```toml
[gateway.rate_limit]
enabled = true
requests_per_minute = 60
burst = 10
```

## CORS Configuration

Enable CORS for web clients:

```toml
[gateway.cors]
enabled = true
origins = ["https://example.com", "http://localhost:3000"]
methods = ["GET", "POST", "PUT", "DELETE"]
headers = ["Authorization", "Content-Type"]
```

## Session Configuration

```toml
[gateway.sessions]
max_age_hours = 24
max_count = 100
prune_interval_minutes = 5
```

## Environment Variables

Use environment variable substitution:

```toml
[gateway]
port = ${SAVFOX_PORT:-18881}
token = "${SAVFOX_TOKEN:?SAVFOX_TOKEN is required}"
```

## Full Example

```toml
[gateway]
host = "0.0.0.0"
port = 18881
token = "${SAVFOX_GATEWAY_TOKEN}"

[gateway.tls]
cert = "/etc/ssl/certs/savfox.pem"
key = "/etc/ssl/private/savfox.key"

[gateway.rate_limit]
enabled = true
requests_per_minute = 60
burst = 10

[gateway.cors]
enabled = true
origins = ["https://savfox.ai"]

[gateway.sessions]
max_age_hours = 48
max_count = 200
```
