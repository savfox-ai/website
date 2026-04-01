---
title: 'Google / Gemini'
description: '配置 Savfox 使用 Google Gemini 模型。'
---

# Google / Gemini 提供商

通过 Google AI Studio 或 Google Cloud Vertex AI 使用 Gemini 模型。

## Google AI Studio

```toml
[auth]
provider = "google"
api_key = "${GOOGLE_API_KEY}"
```

在 [aistudio.google.com](https://aistudio.google.com) 获取 API Key。

## 模型

| 模型              | 说明           | 适用场景         |
| ----------------- | -------------- | ---------------- |
| gemini-2.5-pro    | 最新旗舰模型   | 复杂任务、编码   |
| gemini-2.5-flash  | 快速高效       | 快速任务         |
| gemini-2.0-flash  | 上一代快速模型 | 通用任务         |

## 配置

```toml
[model]
provider_id = "google"
model = "gemini-2.5-pro"
```

## 快速调用

```bash
savfox -m google:gemini-2.5-pro exec "审查这段代码"
savfox -m google:gemini-2.5-flash exec "快速解释"
```

## Vertex AI（企业版）

```toml
[model]
provider_id = "google-vertex"
model = "gemini-2.5-pro"
```

需设置环境变量：

```bash
export GOOGLE_VERTEX_PROJECT=your-project-id
export GOOGLE_VERTEX_LOCATION=us-central1
```

## 常见问题

- 确认 API Key 有效
- Vertex AI 需要正确的 IAM 权限
- 模型名参见 [Gemini API 文档](https://ai.google.dev/models)
