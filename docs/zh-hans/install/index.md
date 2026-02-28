---
title: '安装'
description: '使用各种方法安装 Savfox。'
---

# 安装

选择你喜欢的安装方法。

## 从源码安装（推荐）

从源码构建以获取最新功能：

```bash
git clone https://github.com/savfox-ai/savfox.git
cd savfox
cargo install --path crates/savfox-cli
```

**前提条件：**

- Rust 1.89 或更新版本
- Git

## Docker

在容器中运行 Savfox：

```bash
docker pull ghcr.io/savfox-ai/savfox:latest
docker run -it ghcr.io/savfox-ai/savfox:latest
```

使用卷挂载进行持久化配置：

```bash
docker run -it \
  -v ~/.savfox:/root/.savfox \
  -v $(pwd):/workspace \
  ghcr.io/savfox-ai/savfox:latest
```

## Docker Compose

创建 `docker-compose.yml`：

```yaml
version: '3.8'
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

运行：

```bash
docker-compose up -d
```

## 验证安装

```bash
savfox --version
savfox --help
```

## 开发设置

为 Savfox 做贡献：

```bash
git clone https://github.com/savfox-ai/savfox.git
cd savfox

# 安装 just（命令运行器）
cargo install just

# 检查代码库
just check

# 运行测试
just test

# 构建
cargo build --release
```

## 下一步

<Card title="快速开始" href="/start/getting-started" icon="rocket">
  配置认证并运行你的第一个会话。
</Card>

<Card title="网关服务器" href="/gateway" icon="server">
  设置网关以进行远程访问。
</Card>
