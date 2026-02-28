# Savfox Website Documentation Migration Plan

## Overview

Migrate the website from Palpo (Matrix Homeserver) to Savfox (AI Coding Agent Gateway), following the OpenClaw documentation structure.

**Source References:**

- OpenClaw docs: `E:\Repos\openclaw\docs`
- Savfox project: `D:\Works\savfox-ai\savfox`
- Savfox existing docs: `D:\Works\savfox-ai\savfox\docs`

**Status: COMPLETED** ✅

---

## Phase 1: Configuration & Structure Setup

### [x] 1.1 Update rspress.config.ts ✅

- Changed site URL from `palpo.im` to `savfox.ai`
- Updated title, description, and branding
- Updated logo paths and icons
- Updated social links (GitHub: savfox-ai/savfox)
- Updated footer copyright
- Updated OpenGraph metadata

### [x] 1.2 Create new docs directory structure ✅

```
docs/
├── en/
│   ├── index.md (homepage)
│   ├── start/ (getting started guides)
│   ├── install/ (installation methods)
│   ├── cli/ (CLI command reference)
│   ├── gateway/ (gateway configuration)
│   ├── channels/ (chat bridge channels)
│   ├── providers/ (LLM providers)
│   ├── concepts/ (core concepts)
│   ├── automation/ (hooks, cron, webhooks)
│   ├── web/ (web UI docs)
│   ├── nodes/ (mobile nodes)
│   ├── security/ (security docs)
│   ├── tools/ (MCP, tools)
│   └── reference/ (API reference)
├── zh-hans/ (Chinese translations)
└── public/ (assets, images)
```

### [ ] 1.3 Create assets directory (TODO: needs Savfox logo/branding)

- Copy/create Savfox logo and branding assets
- Create screenshots and diagrams
- Add favicon and icons

---

## Phase 2: Core Documentation Content

### [x] 2.1 Create Homepage (docs/en/index.md) ✅

- Introduction to Savfox
- Key features and capabilities
- Quick start guide
- Architecture diagram (mermaid)
- Links to main documentation sections

### [x] 2.2 Getting Started Section (docs/en/start/) ✅

- [x] getting-started.md - Quick setup guide
- [x] interactive-mode.md - TUI features

### [x] 2.3 Installation Section (docs/en/install/) ✅

- [x] index.md - Installation overview
- [x] docker.md - Docker installation

---

## Phase 3: CLI Documentation

### [x] 3.1 CLI Reference (docs/en/cli/) ✅

- [x] index.md - CLI overview with all commands

---

## Phase 4: Gateway Documentation

### [x] 4.1 Gateway Section (docs/en/gateway/) ✅

- [x] index.md - Gateway overview
- [x] configuration.md - Configuration reference

---

## Phase 5: Channels Documentation

### [x] 5.1 Channels Section (docs/en/channels/) ✅

- [x] index.md - Channels overview
- [x] discord.md - Discord setup
- [x] telegram.md - Telegram setup
- [x] slack.md - Slack setup
- [x] matrix.md - Matrix setup

---

## Phase 6: Providers Documentation

### [x] 6.1 Providers Section (docs/en/providers/) ✅

- [x] index.md - Providers overview
- [x] openai.md - OpenAI setup
- [x] anthropic.md - Anthropic/Claude setup
- [x] ollama.md - Ollama (local models)

---

## Phase 7: Concepts Documentation

### [x] 7.1 Concepts Section (docs/en/concepts/) ✅

- [x] index.md - Concepts overview
- [x] sessions.md - Session management
- [x] configuration.md - Configuration system

---

## Phase 8: Automation Documentation

### [x] 8.1 Automation Section (docs/en/automation/) ✅

- [x] index.md - Hooks, cron, webhooks overview

---

## Phase 9: Web UI Documentation

### [x] 9.1 Web Section (docs/en/web/) ✅

- [x] index.md - Web UI overview

---

## Phase 10: Security & Tools Documentation

### [x] 10.1 Security Section (docs/en/security/) ✅

- [x] index.md - Security overview
- [x] sandbox.md - Sandbox modes

### [x] 10.2 Tools Section (docs/en/tools/) ✅

- [x] mcp-server.md - MCP server setup

---

## Phase 11: API Reference

### [x] 11.1 API Reference Section (docs/en/reference/) ✅

- [x] index.md - API overview (REST & WebSocket)

---

## Phase 12: Chinese Documentation (docs/zh-hans/)

### [x] 12.1 Core Chinese Documentation ✅

- [x] index.md - Homepage
- [x] start/getting-started.md - Getting started
- [x] install/index.md - Installation
- [x] cli/index.md - CLI reference

---

## Phase 13: Cleanup & Finalization

### [x] 13.1 Remove old Palpo content ✅

- Deleted old Matrix/Palpo specific docs (guide directories)
- Removed Palpo references from config

### [ ] 13.2 Final testing (TODO)

- Build and test the site
- Check all links
- Verify all pages render correctly
- Test both English and Chinese versions

### [ ] 13.3 Deploy (TODO)

- Update deployment configuration
- Deploy to production

---

## Remaining Tasks

### High Priority

1. **Create Savfox logo and branding assets** - Need logo SVG, favicon, icons
2. **Build and test** - Run `pnpm build` and verify

### Medium Priority

3. **Add more channel docs** - IRC, Feishu, Line, Google Chat, etc.
4. **Add more provider docs** - OpenRouter, Mistral, Bedrock, etc.
5. **Expand Chinese docs** - Translate remaining English docs

### Low Priority

6. **Add screenshots** - TUI screenshots, Web UI screenshots
7. **Add more examples** - Real-world use cases
8. **API docs expansion** - More detailed endpoint documentation

---

## Files Created

### English (docs/en/)

- `index.md` - Homepage
- `start/getting-started.md`, `start/interactive-mode.md`
- `install/index.md`, `install/docker.md`
- `cli/index.md`
- `gateway/index.md`, `gateway/configuration.md`
- `channels/index.md`, `channels/discord.md`, `channels/telegram.md`, `channels/slack.md`, `channels/matrix.md`
- `providers/index.md`, `providers/openai.md`, `providers/anthropic.md`, `providers/ollama.md`
- `concepts/index.md`, `concepts/sessions.md`, `concepts/configuration.md`
- `automation/index.md`
- `web/index.md`
- `security/index.md`, `security/sandbox.md`
- `tools/mcp-server.md`
- `reference/index.md`

### Chinese (docs/zh-hans/)

- `index.md` - Homepage
- `start/getting-started.md`
- `install/index.md`
- `cli/index.md`

### Config

- `rspress.config.ts` - Updated for Savfox branding

---

## Notes

- Use content from `D:\Works\savfox-ai\savfox\docs` as base
- Reference `E:\Repos\openclaw\docs` for structure and style
- Maintain consistency between English and Chinese versions
- Include mermaid diagrams where helpful
- Add code examples and screenshots
