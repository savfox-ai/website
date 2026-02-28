---
title: 'Docker'
description: 'Run Savfox with Docker and Docker Compose.'
---

# Docker Installation

Run Savfox in a containerized environment.

## Pull the Image

```bash
docker pull ghcr.io/savfox-ai/savfox:latest
```

Available tags:

- `latest` - Latest stable release
- `main` - Latest main branch build
- `v0.1.0` - Specific version tags

## Basic Usage

Interactive session:

```bash
docker run -it --rm ghcr.io/savfox-ai/savfox:latest
```

Non-interactive execution:

```bash
docker run --rm ghcr.io/savfox-ai/savfox:latest exec "Explain this code"
```

## Volume Mounting

Mount your workspace and config:

```bash
docker run -it --rm \
  -v ~/.savfox:/root/.savfox \
  -v $(pwd):/workspace \
  -w /workspace \
  ghcr.io/savfox-ai/savfox:latest
```

## Gateway Mode

Run the gateway server:

```bash
docker run -d \
  --name savfox-gateway \
  -p 18881:18881 \
  -v ~/.savfox:/root/.savfox \
  -v $(pwd):/workspace \
  ghcr.io/savfox-ai/savfox:latest \
  savfox gateway --host 0.0.0.0
```

## Docker Compose

Complete setup with gateway:

```yaml
version: '3.8'

services:
  savfox:
    image: ghcr.io/savfox-ai/savfox:latest
    container_name: savfox
    restart: unless-stopped
    volumes:
      - ./config:/root/.savfox
      - ./workspace:/workspace
    ports:
      - '18881:18881'
    working_dir: /workspace
    command: savfox gateway --host 0.0.0.0
    environment:
      - RUST_LOG=info
```

Start:

```bash
docker-compose up -d
docker-compose logs -f
```

## Environment Variables

| Variable             | Description                          |
| -------------------- | ------------------------------------ |
| `RUST_LOG`           | Log level (debug, info, warn, error) |
| `SAVFOX_CONFIG_PATH` | Override config file path            |
| `SAVFOX_HOME`        | Override home directory              |

## Building Custom Image

```dockerfile
FROM rust:1.89 AS builder
WORKDIR /app
COPY . .
RUN cargo build --release -p savfox-cli

FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*
COPY --from=builder /app/target/release/savfox /usr/local/bin/
ENTRYPOINT ["savfox"]
```

Build:

```bash
docker build -t savfox-custom .
```
