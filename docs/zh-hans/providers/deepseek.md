---
title: 'DeepSeek'
description: '配置 Savfox 使用 DeepSeek 模型。'
---

# DeepSeek 提供商

DeepSeek 提供高质量的编码和推理模型，性价比优秀。

## 认证

```toml
[auth]
provider = "deepseek"
api_key = "${DEEPSEEK_API_KEY}"
```

或设置环境变量：

```bash
export DEEPSEEK_API_KEY=sk-...
```

在 [platform.deepseek.com](https://platform.deepseek.com) 获取 API Key。

## 模型

| 模型              | 说明           | 适用场景         |
| ----------------- | -------------- | ---------------- |
| deepseek-chat     | 通用聊天模型   | 编码、通用任务   |
| deepseek-reasoner | 推理模型 (R1)  | 复杂推理         |

## 配置

```toml
[model]
provider_id = "deepseek"
model = "deepseek-chat"
```

## 快速调用

```bash
savfox -m deepseek:deepseek-chat exec "重构这个模块"
savfox -m deepseek:deepseek-reasoner exec "分析这个算法"
```

## 常见问题

- 检查账户余额：[platform.deepseek.com](https://platform.deepseek.com)
- DeepSeek-Reasoner 使用链式思考推理，复杂任务响应时间较长属正常现象
