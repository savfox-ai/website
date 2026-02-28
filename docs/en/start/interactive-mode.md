---
title: 'Interactive Mode'
description: 'Learn the TUI features, sessions, and approval workflows.'
---

# Interactive Mode

The interactive terminal UI (TUI) is the primary way to use Savfox for coding tasks.

## Launching the TUI

```bash
savfox
```

This opens a rich terminal interface with:

- Chat input area
- Message history with markdown rendering
- Diff preview for file changes
- Approval controls for commands and patches

## TUI Features

### Chat Interface

Type your requests naturally and the agent responds with:

- Explanations and analysis
- Code snippets with syntax highlighting
- File diffs showing proposed changes
- Shell commands to execute

### Diff Preview

When the agent proposes file changes:

- View unified diffs with syntax highlighting
- See additions (green) and deletions (red)
- Review the full context of changes

### Approval Workflow

For safety, Savfox asks for approval before:

- Executing shell commands
- Writing to files
- Applying patches

Use keyboard shortcuts or click to:

- **Approve** - Allow the action
- **Reject** - Deny the action
- **Edit** - Modify before approving

### Session Management

Sessions are automatically saved. You can:

- Resume previous sessions
- Fork a session to try different approaches
- Archive sessions you no longer need

## Keyboard Shortcuts

| Key      | Action                   |
| -------- | ------------------------ |
| `Enter`  | Send message             |
| `Ctrl+C` | Cancel current operation |
| `Ctrl+D` | Exit                     |
| `?`      | Show help                |
| `Tab`    | Navigate between panels  |

## Model Selection

Switch models mid-session:

```bash
# In the TUI, use commands like:
/model gpt-4o
/model claude-3-5-sonnet
/model ollama:llama3
```

Or start with a specific model:

```bash
savfox -m gpt-4o
```

## Session Commands

Within the TUI, you can use special commands:

| Command         | Description              |
| --------------- | ------------------------ |
| `/help`         | Show available commands  |
| `/model <name>` | Switch LLM model         |
| `/clear`        | Clear the conversation   |
| `/save`         | Save current session     |
| `/fork`         | Fork the current session |
| `/exit`         | Exit the TUI             |

## Resume Sessions

From the command line:

```bash
savfox resume        # Interactive session picker
savfox resume --last # Resume most recent session
savfox resume <id>   # Resume specific session
```

## Approval Modes

Control how approvals work:

```bash
# Require approval for everything (default)
savfox --approval-mode interactive

# Auto-approve safe operations
savfox --approval-mode auto-safe

# Full auto mode (use with caution)
savfox --full-auto
```

## Next Steps

<Card title="CLI Reference" href="/cli" icon="list">
  All commands and flags.
</Card>

<Card title="Sandbox & Security" href="/security/sandbox" icon="shield">
  Understand sandbox modes.
</Card>

<Card title="Configuration" href="/concepts/configuration" icon="settings">
  Customize behavior.
</Card>
