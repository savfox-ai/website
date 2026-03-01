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

## 交互模式

```bash
docker run -it --rm ghcr.io/savfox-ai/savfox:latest
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
version: '3.8'
services:
  savfox:
    image: ghcr.io/savfox-ai/savfox:latest
    restart: unless-stopped
    volumes:
      - ./config:/root/.savfox
      - ./workspace:/workspace
    ports:
      - '18881:18881'
    command: savfox gateway --host 0.0.0.0
```
