---
title: 'Ollama'
description: 'Run local LLMs with Ollama and Savfox.'
---

# Ollama Provider

Run open-source models locally with Ollama for privacy and cost savings.

## Prerequisites

1. Install Ollama: [ollama.ai](https://ollama.ai)
2. Pull a model: `ollama pull llama3.2`
3. Verify: `ollama list`

## Configuration

```toml
[auth]
provider = "ollama"

[model]
provider_id = "ollama"
model = "llama3.2"
base_url = "http://localhost:11434"
```

## Available Models

| Model          | Size       | Description             |
| -------------- | ---------- | ----------------------- |
| llama3.2       | 3B/1B      | Meta's latest Llama     |
| llama3.1       | 8B/70B     | Previous generation     |
| mistral        | 7B         | Mistral AI model        |
| codellama      | 7B/13B/34B | Code-focused Llama      |
| deepseek-coder | 6.7B       | Code generation         |
| phi3           | 3.8B       | Microsoft's small model |

Pull models:

```bash
ollama pull llama3.2
ollama pull mistral
ollama pull codellama
```

## CLI Usage

```bash
# Use Llama 3.2
savfox -m ollama:llama3.2 exec "Task"

# Use with OSS flag
savfox --oss exec "Task"
```

## Configuration Options

```toml
[model.ollama]
base_url = "http://localhost:11434"
temperature = 0.7
num_ctx = 4096
num_gpu = 1
```

## GPU Acceleration

Ollama automatically uses GPU when available:

- **macOS**: Metal (Apple Silicon)
- **Linux**: CUDA (NVIDIA)
- **Windows**: CUDA (NVIDIA)

## Memory Requirements

| Model Size | RAM Required |
| ---------- | ------------ |
| 3B         | 8 GB         |
| 7B         | 16 GB        |
| 13B        | 32 GB        |
| 70B        | 128 GB+      |

## Troubleshooting

### Connection refused

1. Ensure Ollama is running: `ollama serve`
2. Check the base URL
3. Verify the port (default: 11434)

### Out of memory

1. Use a smaller model
2. Reduce `num_ctx`
3. Close other applications

### Slow responses

1. Enable GPU acceleration
2. Use a smaller model
3. Reduce context length
