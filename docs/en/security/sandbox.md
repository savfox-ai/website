---
title: 'Sandbox'
description: 'Sandbox modes and configuration.'
---

# Sandbox

The sandbox protects your system by controlling what the agent can do.

## Modes

### Read-Only

Maximum protection. The agent cannot modify anything:

```toml
[sandbox]
mode = "read-only"
```

Allowed:

- Read files
- List directories
- Execute read-only commands

Blocked:

- Write files
- Delete files
- Modify system state

### Workspace-Write

Recommended for development. The agent can modify workspace files:

```toml
[sandbox]
mode = "workspace-write"
```

The workspace is typically your current project directory.

### Full-Access

No restrictions. Use with extreme caution:

```toml
[sandbox]
mode = "full-access"
```

Only use when you trust the agent completely.

## Platform Implementation

### macOS

Uses Seatbelt (sandbox-exec):

```xml
<key>com.apple.security.temporary-exception.files.read-only</key>
<array>
    <string>/path/to/allowed</string>
</array>
```

### Linux

Uses Landlock LSM:

```rust
AccessFs::from_read() | AccessFs::from_write()
```

### Windows

Uses restricted tokens with limited privileges.

## Approval Integration

The sandbox works with the approval system:

```toml
[approvals]
# Always require approval for shell commands
require_for_shell = true

# Auto-approve safe file writes in workspace
auto_approve_safe_writes = true
```

## Command Filtering

Restrict which commands can be executed:

```toml
[sandbox]
allowed_commands = ["git", "npm", "cargo"]
blocked_commands = ["rm -rf", "sudo"]
```

## Path Restrictions

Define allowed paths:

```toml
[sandbox]
allowed_paths = [
    "/home/user/projects",
    "/tmp/savfox"
]
blocked_paths = [
    "/etc",
    "/var"
]
```

## CLI Usage

```bash
# Run with read-only sandbox
savfox --sandbox read-only exec "Analyze code"

# Run with workspace-write (default)
savfox exec "Refactor code"

# Run with full access
savfox --full-auto exec "Do anything"
```

## Troubleshooting

### Permission denied

1. Check sandbox mode
2. Verify file is in allowed paths
3. Approve the action when prompted

### Command blocked

1. Check if command is in blocked list
2. Add to allowed_commands if needed
3. Use approval workflow
