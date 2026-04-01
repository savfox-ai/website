---
title: 'Ollama'
description: '通过 Ollama 在本地运行模型。'
---

# Ollama 提供商

使用 Ollama 在本地运行开源模型，保护隐私并节省成本。

## 前置步骤

1. 安装 Ollama：[ollama.ai](https://ollama.ai)
2. 拉取模型：`ollama pull llama3.2`
3. 启动服务：`ollama serve`
4. 验证：`ollama list`

## 配置

```toml
[auth]
provider = "ollama"

[model]
provider_id = "ollama"
model = "llama3.2"
base_url = "http://localhost:11434/v1"
```

## 常用模型

| 模型           | 大小       | 说明                |
| -------------- | ---------- | ------------------- |
| llama3.2       | 3B/1B      | Meta 最新 Llama     |
| llama3.1       | 8B/70B     | 上一代              |
| mistral        | 7B         | Mistral AI 模型     |
| codellama      | 7B/13B/34B | 代码专用 Llama      |
| deepseek-coder | 6.7B       | 代码生成            |
| phi3           | 3.8B       | 微软小型模型        |
| qwen2.5        | 7B/14B/72B | 阿里通义千问        |

拉取模型：

```bash
ollama pull llama3.2
ollama pull qwen2.5
ollama pull codellama
```

## 快速调用

```bash
savfox -m ollama:llama3.2 exec "解释这个文件"
savfox --oss exec "分析这个项目"
```

## 配置选项

```toml
[model.ollama]
base_url = "http://localhost:11434/v1"
temperature = 0.7
num_ctx = 4096
num_gpu = 1
```

## GPU 加速

Ollama 在 GPU 可用时自动启用：

- **macOS**：Metal（Apple Silicon）
- **Linux**：CUDA（NVIDIA）
- **Windows**：CUDA（NVIDIA）

## 内存需求

| 模型大小 | 所需内存 |
| -------- | -------- |
| 3B       | 8 GB     |
| 7B       | 16 GB    |
| 13B      | 32 GB    |
| 70B      | 128 GB+  |

## 常见问题

### 连接失败

1. 确认 Ollama 正在运行：`ollama serve`
2. 检查 base_url 设置
3. 默认端口：11434

### 内存不足

1. 使用更小的模型
2. 减小 `num_ctx` 值
3. 关闭其他占用内存的应用

### 响应缓慢

1. 检查 GPU 是否正常加速
2. 使用更小的模型
3. 减少上下文长度
