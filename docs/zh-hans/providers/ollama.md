---
title: 'Ollama'
description: '通过 Ollama 在本地运行模型。'
---

# Ollama 提供商

## 前置步骤

1. 安装 Ollama
2. 拉取模型：`ollama pull llama3`
3. 启动服务：`ollama serve`

## 配置

```toml
[model]
provider_id = "ollama"
model = "llama3"
base_url = "http://localhost:11434/v1"
```

## 快速调用

```bash
savfox -m ollama:llama3 exec "Explain this file"
savfox --oss exec "Analyze this project"
```

## 常见问题

- 连接失败：确认 `ollama serve` 已启动
- 模型不存在：先 `ollama pull <model>`
- 响应慢：检查 GPU/模型大小/上下文长度
