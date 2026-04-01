---
title: 'Groq'
description: '配置 Savfox 使用 Groq 超快推理。'
---

# Groq 提供商

Groq 使用自研 LPU（语言处理单元）硬件，提供极低延迟的超快推理服务。

## 认证

```toml
[auth]
provider = "groq"
api_key = "${GROQ_API_KEY}"
```

或设置环境变量：

```bash
export GROQ_API_KEY=gsk_...
```

在 [console.groq.com](https://console.groq.com) 获取 API Key。

## 模型

| 模型             | 说明                | 适用场景        |
| ---------------- | ------------------- | --------------- |
| llama-3.3-70b    | Llama 3.3 70B       | 通用任务        |
| llama-3.1-8b     | Llama 3.1 8B        | 快速简单任务    |
| mixtral-8x7b     | Mixtral MoE         | 质量与速度平衡  |

## 配置

```toml
[model]
provider_id = "groq"
model = "llama-3.3-70b"
```

## 快速调用

```bash
savfox -m groq:llama-3.3-70b exec "重构这段代码"
savfox -m groq:llama-3.1-8b exec "快速解释"
```

## 常见问题

- API Key 以 `gsk_` 开头
- 免费额度有限，超出后需升级计划
- 模型列表参见 [Groq 文档](https://console.groq.com/docs/models)
