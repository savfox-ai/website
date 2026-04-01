---
title: 'OpenAI'
description: '配置 Savfox 使用 OpenAI 模型。'
---

# OpenAI 提供商

## 认证

### 使用登录（推荐）

```bash
savfox login
```

### 使用 API Key

```toml
[auth]
provider = "openai"
api_key = "${OPENAI_API_KEY}"
```

或设置环境变量：

```bash
export OPENAI_API_KEY=sk-...
```

## 可用模型

| 模型          | 说明               | 适用场景           |
| ------------- | ------------------ | ------------------ |
| gpt-4.1       | 最新旗舰模型       | 复杂任务、编码     |
| gpt-4.1-mini  | 快速高效           | 日常任务           |
| gpt-4.1-nano  | 最小最快           | 简单任务           |
| o3            | 推理模型           | 复杂推理           |
| o4-mini       | 快速推理模型       | 平衡推理           |
| gpt-4o        | 上一代旗舰         | 通用               |
| gpt-4o-mini   | 上一代快速模型     | 快速任务           |

## 配置

```toml
[model]
provider_id = "openai"
model = "gpt-4.1"
```

## 快速调用

```bash
savfox -m gpt-4.1 exec "重构这段代码"
savfox -m gpt-4.1-mini exec "快速任务"
savfox -m o3 exec "分析这个架构"
```

## Azure OpenAI

Azure 部署配置：

```toml
[model]
provider_id = "openai"
model = "gpt-4o"

[model.openai]
base_url = "https://your-resource.openai.azure.com"
api_key = "${AZURE_OPENAI_KEY}"
api_version = "2024-02-15-preview"
deployment = "gpt-4o-deployment"
```

## 自定义 base_url

```toml
[model]
provider_id = "openai"
model = "gpt-4.1"
base_url = "https://your-proxy.example.com/v1"
```

## 常见问题

### 认证错误

1. 确认 API Key 有效
2. 检查 Key 是否有所需权限
3. 确认 Key 未被撤销

### 速率限制

OpenAI 根据账户等级设置速率限制。Savfox 会自动处理重试。可降低请求频率或升级账户等级。
