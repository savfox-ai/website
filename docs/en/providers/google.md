---
title: 'Google / Gemini'
description: 'Configure Google Gemini models with Savfox.'
---

# Google / Gemini Provider

Use Google's Gemini models via Google AI Studio or Google Cloud Vertex AI.

## Google AI Studio

### Authentication

```toml
[auth]
provider = "google"
api_key = "${GOOGLE_API_KEY}"
```

Or set the environment variable:

```bash
export GOOGLE_API_KEY=AIza...
```

Get your API key at [aistudio.google.com](https://aistudio.google.com).

### Configuration

```toml
[model]
provider_id = "google"
model = "gemini-2.5-pro"
```

## Available Models

| Model             | Description              | Best For               |
| ----------------- | ------------------------ | ---------------------- |
| gemini-2.5-pro    | Latest flagship          | Complex tasks, coding  |
| gemini-2.5-flash  | Fast, cost-effective     | Quick tasks            |
| gemini-2.0-flash  | Previous fast model      | General use            |

## CLI Usage

```bash
# Use Gemini 2.5 Pro
savfox -m google:gemini-2.5-pro exec "Review this code"

# Use Gemini Flash for quick tasks
savfox -m google:gemini-2.5-flash exec "Quick explanation"
```

## Google Cloud Vertex AI

For enterprise deployments using Vertex AI:

```toml
[model]
provider_id = "google-vertex"
model = "gemini-2.5-pro"
```

Set the required environment variables:

```bash
export GOOGLE_VERTEX_PROJECT=your-project-id
export GOOGLE_VERTEX_LOCATION=us-central1
```

## Troubleshooting

### Authentication errors

1. Verify your API key is valid
2. For Vertex AI, ensure your service account has the correct IAM permissions
3. Check project and location settings

### Model not found

1. Verify the model name matches the [Gemini API docs](https://ai.google.dev/models)
2. Some models require specific API versions or regions
