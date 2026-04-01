---
title: 'Docker'
description: '使用 Docker 和 Docker Compose 运行 Savfox。'
---

# Docker 安装

通过容器方式运行 Savfox，适合快速体验和服务化部署。

## 拉取镜像

```bash
docker pull ghcr.io/savfox-ai/savfox:latest
```

可用标签：

- `latest` - 最新稳定版本
- `main` - 最新主分支构建
- `v0.3.0` - 特定版本标签

## 交互模式

```bash
docker run -it --rm ghcr.io/savfox-ai/savfox:latest
```

非交互式执行：

```bash
docker run --rm ghcr.io/savfox-ai/savfox:latest exec "解释这段代码"
```

## 挂载配置与工作区

```bash
docker run -it --rm \
  -v ~/.savfox:/root/.savfox \
  -v $(pwd):/workspace \
  -w /workspace \
  ghcr.io/savfox-ai/savfox:latest
```

## 网关模式

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

```yaml
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

启动：

```bash
docker compose up -d
docker compose logs -f
```

## 环境变量

| 变量                 | 说明                                 |
| -------------------- | ------------------------------------ |
| `RUST_LOG`           | 日志级别（debug, info, warn, error） |
| `SAVFOX_CONFIG_PATH` | 覆盖配置文件路径                     |
| `SAVFOX_HOME`        | 覆盖主目录路径                       |

## 自定义镜像构建

```dockerfile
FROM rust:1.94 AS builder
WORKDIR /app
COPY . .
RUN cargo build --release -p savfox-cli

FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*
COPY --from=builder /app/target/release/savfox /usr/local/bin/
ENTRYPOINT ["savfox"]
```

构建：

```bash
docker build -t savfox-custom .
```
