---
title: 'Web UI'
description: 'Savfox 浏览器控制界面。'
---

# Web UI

Savfox 内置 Web 控制面板，用于管理会话、配置和聊天。

## 访问

启动网关后在浏览器中打开：

```bash
savfox gateway
```

访问地址：

- **本地**：http://127.0.0.1:18881
- **远程**：https://your-server:18881

## 功能

### 聊天界面

- 向智能体发送消息
- 查看对话历史
- 代码块和 diff 渲染
- 实时流式响应

### 会话管理

- 列出所有会话
- 恢复之前的对话
- 归档或删除会话
- 分叉会话进行实验

### 配置

- 查看当前设置
- 更新配置
- 管理配置档案
- 切换特性标志

### 监控

- 网关状态
- 活跃连接数
- 定时任务状态
- 资源使用情况

## 控制面板

访问完整控制界面：

```
http://127.0.0.1:18881/control
```

功能包括：

- 完整聊天界面
- 会话浏览器
- 配置编辑器
- 审批队列
- 日志查看器

## 认证

Web UI 使用与 API 相同的令牌认证：

1. 从网关启动日志中获取令牌
2. 在提示时输入令牌
3. 令牌存储在浏览器会话中

## 配置

```toml
[gateway.web]
enabled = true
title = "Savfox Control"
theme = "dark"

[gateway.web.cors]
origins = ["http://localhost:3000"]
```

## 远程访问

### Tailscale

```bash
savfox gateway --host 100.x.y.z
```

### 反向代理

使用 nginx 或 caddy：

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

直接启用 TLS：

```bash
savfox gateway --tls-cert cert.pem --tls-key key.pem
```

## 移动端访问

Web UI 支持响应式布局，适配移动设备。配置好网络后即可从任何设备访问。
