---
title: 'Installation'
description: 'Install Savfox using various methods.'
---

# Installation

Choose your preferred installation method.

## From Source (Recommended)

Build from source for the latest features:

```bash
git clone https://github.com/savfox-ai/savfox.git
cd savfox
cargo install --path crates/savfox-cli
```

**Prerequisites:**

- Rust 1.94 or newer
- Git

## Docker

Run Savfox in a container:

```bash
docker pull ghcr.io/savfox-ai/savfox:latest
docker run -it ghcr.io/savfox-ai/savfox:latest
```

With volume mounting for persistent config:

```bash
docker run -it \
  -v ~/.savfox:/root/.savfox \
  -v $(pwd):/workspace \
  ghcr.io/savfox-ai/savfox:latest
```

## Docker Compose

Create a `compose.yml`:

```yaml
services:
  savfox:
    image: ghcr.io/savfox-ai/savfox:latest
    volumes:
      - ./config:/root/.savfox
      - ./workspace:/workspace
    ports:
      - '18881:18881'
    command: savfox gateway
```

Run with:

```bash
docker compose up -d
```

## Binary Releases

Download pre-built binaries from GitHub Releases:

```bash
# Linux/macOS
curl -sSL https://github.com/savfox-ai/savfox/releases/latest/download/savfox-$(uname -s)-$(uname -m) -o savfox
chmod +x savfox
sudo mv savfox /usr/local/bin/

# Windows (PowerShell)
Invoke-WebRequest -Uri "https://github.com/savfox-ai/savfox/releases/latest/download/savfox-windows-x86_64.exe" -OutFile "savfox.exe"
```

## Verify Installation

```bash
savfox --version
savfox --help
```

## Development Setup

For contributing to Savfox:

```bash
git clone https://github.com/savfox-ai/savfox.git
cd savfox

# Install just (command runner)
cargo install just

# Check the codebase
just check

# Run tests
just test

# Build
cargo build --release
```

## Next Steps

<Card title="Getting Started" href="/start/getting-started" icon="rocket">
  Configure authentication and run your first session.
</Card>

<Card title="Gateway Server" href="/gateway" icon="server">
  Set up the gateway for remote access.
</Card>
