---
title: 'Web UI'
description: 'Browser-based interface for Savfox.'
---

# Web UI

Savfox includes a web-based control panel for managing sessions, configuration, and chat.

## Accessing the Web UI

Start the gateway and open in browser:

```bash
savfox gateway
```

Then navigate to:

- **Local**: http://127.0.0.1:18881
- **Remote**: https://your-server:18881

## Features

### Chat Interface

- Send messages to the agent
- View conversation history
- See diffs and code blocks
- Real-time streaming responses

### Session Management

- List all sessions
- Resume previous conversations
- Archive or delete sessions
- Fork sessions for experimentation

### Configuration

- View current settings
- Update configuration
- Manage profiles
- Toggle feature flags

### Monitoring

- Gateway status
- Active connections
- Cron job status
- Resource usage

## Dashboard

The main dashboard shows:

| Widget   | Description      |
| -------- | ---------------- |
| Status   | Gateway health   |
| Sessions | Recent sessions  |
| Messages | Message activity |
| Errors   | Recent errors    |

## Control UI

Access the full control interface at:

```
http://127.0.0.1:18881/control
```

Features:

- Full chat interface
- Session browser
- Config editor
- Approval queue
- Log viewer

## Authentication

The Web UI uses the same token authentication as the API:

1. Get your token from gateway startup logs
2. Enter token when prompted
3. Token is stored in browser session

## Configuration

Configure the web UI:

```toml
[gateway.web]
enabled = true
title = "Savfox Control"
theme = "dark"

[gateway.web.cors]
origins = ["http://localhost:3000"]
```

## Remote Access

For remote access, use one of:

### Tailscale

```bash
savfox gateway --host 100.x.y.z
```

### Reverse Proxy

Use nginx or caddy:

```nginx
server {
    listen 443 ssl;
    server_name savfox.example.com;

    location / {
        proxy_pass http://127.0.0.1:18881;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

### TLS

Enable TLS directly:

```bash
savfox gateway --tls-cert cert.pem --tls-key key.pem
```

## Mobile Access

The web UI is responsive and works on mobile devices. Access your gateway from anywhere with proper network configuration.
