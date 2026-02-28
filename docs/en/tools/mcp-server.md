---
title: 'MCP Server'
description: 'Model Context Protocol integration with Savfox.'
---

# MCP Server

Savfox supports the Model Context Protocol (MCP) for integration with Claude Desktop and other MCP clients.

## Overview

MCP allows Savfox to:

- Act as an MCP server for Claude Desktop
- Connect to external MCP servers as tools
- Share context and tools across applications

## Running as MCP Server

### Configuration

Add Savfox as an MCP server in Claude Desktop's config:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "savfox": {
      "command": "savfox",
      "args": ["mcp", "serve"]
    }
  }
}
```

### Available Tools

When running as an MCP server, Savfox exposes:

| Tool              | Description             |
| ----------------- | ----------------------- |
| `read_file`       | Read file contents      |
| `write_file`      | Write to files          |
| `list_directory`  | List directory contents |
| `execute_command` | Run shell commands      |
| `search_files`    | Search for files        |
| `git_status`      | Git repository status   |

### Capabilities

- Resources: File system access
- Prompts: Code review, refactoring templates
- Tools: File operations, shell execution

## Connecting to MCP Servers

Use external MCP servers as tools in Savfox:

```toml
[mcp.servers.filesystem]
command = "mcp-server-filesystem"
args = ["/path/to/allowed"]

[mcp.servers.github]
command = "mcp-server-github"
env = { GITHUB_TOKEN = "${GITHUB_TOKEN}" }
```

### Using MCP Tools

MCP tools are automatically available to the agent:

```bash
savfox exec "Use the filesystem server to read README.md"
```

## MCP Configuration

### Server Options

```toml
[mcp]
enabled = true

[mcp.server]
name = "savfox"
version = "0.1.0"

[mcp.server.capabilities]
resources = true
tools = true
prompts = true
```

### Client Options

```toml
[mcp.clients.timeout]
connect = 5000
request = 30000
```

## Security Considerations

### Running as Server

When Savfox acts as an MCP server:

- It inherits Claude Desktop's security context
- File access is scoped to allowed directories
- Shell commands require approval

### Connecting to Servers

When connecting to external MCP servers:

- Verify the server's authenticity
- Use environment variables for secrets
- Limit server capabilities as needed

## Troubleshooting

### Server not appearing in Claude Desktop

1. Check the config file path
2. Verify the command path is correct
3. Restart Claude Desktop
4. Check Claude Desktop logs

### Connection errors

1. Ensure the MCP server is running
2. Check command and arguments
3. Verify environment variables

### Tool not working

1. Check tool is enabled
2. Verify permissions
3. Check for errors in logs
