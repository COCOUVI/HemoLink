# Theme and styling

Framework: React 19 with Vite 8. CSS approach: plain CSS with nested CSS syntax. No Tailwind or component library is configured.

## `src/index.css`

```css
:root {
  --text: #6b6375;
  --text-h: #08060d;
  --bg: #fff;
  --border: #e5e4e7;
  --code-bg: #f4f3ec;
  --accent: #aa3bff;
  --accent-bg: rgba(170, 59, 255, 0.1);
  --accent-border: rgba(170, 59, 255, 0.5);
  --social-bg: rgba(244, 243, 236, 0.5);
  --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
  --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
  --mono: ui-monospace, Consolas, monospace;
  font: 18px/145% var(--sans);
  color: var(--text);
  background: var(--bg);
}
```

The full source of `src/index.css` and `src/App.css` is available in the codebase and is the authoritative styling context.

