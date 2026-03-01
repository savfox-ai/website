---
title: '网关配置'
description: 'Savfox 网关配置参考。'
---

# 网关配置

## 基础配置

```toml
[gateway]
port = 18881
host = "127.0.0.1"
token = "my-secret-token"
```

## TLS

```toml
[gateway]
host = "0.0.0.0"
port = 443
tls_cert = "/path/to/cert.pem"
tls_key = "/path/to/key.pem"
```

## 令牌作用域

```toml
[[gateway.tokens]]
token = "operator-token"
scope = "operator"

[[gateway.tokens]]
token = "viewer-token"
scope = "viewer"

[[gateway.tokens]]
token = "chat-token"
scope = "chat"
```

## CORS

```toml
[gateway.cors]
enabled = true
origins = ["https://example.com"]
methods = ["GET", "POST", "PUT", "DELETE"]
```

## 速率限制

```toml
[gateway.rate_limit]
enabled = true
requests_per_minute = 60
burst = 10
```
