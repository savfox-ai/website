---
title: 'Matrix'
description: 'Connect Savfox to Matrix homeservers.'
---

# Matrix Channel

Connect Savfox to Matrix for federated messaging.

## Setup

### 1. Create a Matrix Account

You can use:

- Your existing Matrix account
- A dedicated bot account
- A homeserver like matrix.org or self-hosted

### 2. Get Access Token

Using curl:

```bash
curl -XPOST "https://matrix.org/_matrix/client/r0/login" \
  -d '{"type":"m.login.password", "user":"username", "password":"password"}'
```

Or use a Matrix client to get the token from settings.

### 3. Configure Savfox

```toml
[gateway.bridges.matrix]
enabled = true
homeserver_url = "https://matrix.org"
user_id = "@savfox:matrix.org"
access_token = "your-access-token"
```

## Configuration Options

| Option           | Type     | Default  | Description          |
| ---------------- | -------- | -------- | -------------------- |
| `enabled`        | bool     | false    | Enable Matrix bridge |
| `homeserver_url` | string   | required | Homeserver URL       |
| `user_id`        | string   | required | Matrix user ID       |
| `access_token`   | string   | required | Access token         |
| `device_id`      | string   | auto     | Device ID            |
| `allowed_rooms`  | [string] | []       | Restrict to rooms    |

## Example Configuration

```toml
[gateway.bridges.matrix]
enabled = true
homeserver_url = "https://matrix.org"
user_id = "@savfox:matrix.org"
access_token = "${MATRIX_ACCESS_TOKEN}"

[gateway.bridges.matrix.rooms]
"!abc123:matrix.org" = { session = "team" }
```

## Encryption

Matrix supports end-to-end encryption (E2EE):

```toml
[gateway.bridges.matrix]
encryption = true
store_path = "~/.savfox/matrix-store"
```

Note: E2EE requires additional setup with cross-signing.

## Joining Rooms

The bot needs to be invited to rooms or join public rooms:

```bash
# Via Matrix client, invite the bot user
# Or for public rooms:
savfox gateway channels matrix join "#room:matrix.org"
```

## Troubleshooting

### Connection errors

1. Verify homeserver URL is correct
2. Check network connectivity
3. Verify firewall allows Matrix traffic

### Authentication errors

1. Verify access token is valid
2. Check user ID matches token
3. Regenerate token if needed

### Not receiving messages

1. Check room membership
2. Verify encryption settings
3. Check gateway logs
