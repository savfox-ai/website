# Savfox Website

Official documentation website for [Savfox](https://github.com/savfox-ai/savfox), built with [Rspress](https://rspress.dev/).

The documentation supports both English and Simplified Chinese (`zh-hans`).

## Project Structure

- `docs/en`: English documentation
- `docs/zh-hans`: Simplified Chinese documentation
- `docs/public`: Static assets (logos, icons, images)
- `utils`: Helper scripts for docs workflows

## Development

Install dependencies:

```bash
pnpm install
```

Start local docs server:

```bash
pnpm run dev
```

Build production docs:

```bash
pnpm run build
```

Preview built docs:

```bash
pnpm run preview
```

## Source References

This docs site follows the main Savfox project and draws structure/style inspiration from:

- https://github.com/savfox-ai/savfox
- https://github.com/openclaw/openclaw

## Contributing

Please keep English and Chinese docs aligned for major guide pages.
