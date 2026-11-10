---
name: astryx-ui
description: Adds Astryx (Meta's open-source React design system, github.com/meta/astryx) to a digital profile portfolio for NEW interactive pieces only: the AI chat interface, forms (contact, booking, lead capture) and dialogs/modals, plus toasts. Existing Tailwind "neural" sections stay as they are. Use when building or rebuilding the chat widget, adding a contact or lead form, adding a modal or dialog, or setting up Astryx in a profile project.
---

# Astryx UI (new pieces only)

[Astryx](https://github.com/meta/astryx) ships accessible React 19 components and a CLI designed for agents. In digital profiles, we use it **only for new interactive pieces**. The existing Tailwind + Framer Motion design stays the visual identity.

## Scope rule (read first)

| Use Astryx for | Keep on Tailwind `neural-*` |
|---|---|
| AI chat interface (`ChatWidget` panel contents) | Navbar, HeroSection, AboutSection |
| Contact, booking and lead-capture forms | SkillsSection, ExperienceTimeline, SkillDNA |
| Dialogs and modals (project details, contact modal, confirmations) | ProjectShowcase cards, Testimonials, Footer |
| Toasts (form sent, copy-to-clipboard, errors) | LoadingScreen, CustomCursor, ScrollProgress |

- Do **not** rewrite an existing section with Astryx unless the client asks for it.
- Floating chrome that belongs to the neural look (the chat launcher bubble, glow effects) stays Tailwind. Only the panel contents use Astryx.
- New pieces must still look on-brand: dark mode, and the client's accent color applied (see Theming).

## Look it up, don't guess

Astryx APIs are strict: for example, `Button` takes `label`, not children, and `TextInput.onChange` receives the value, not an event. Before writing any component, check it with the CLI:

```bash
npm run astryx -- component --list            # all components
npm run astryx -- component Chat              # docs + examples
npm run astryx -- component Dialog --props --json
npm run astryx -- docs styling-libraries/tailwind
npm run astryx -- docs migration              # cascade-layer audit + smoke test
npm run astryx -- manifest --json             # every CLI command, for agents
```

## Setup (once per profile project)

### 1. Install

```bash
npm install @astryxdesign/core @astryxdesign/theme-neutral @stylexjs/stylex
npm install -D @astryxdesign/cli
```

Requires React 19 (already the stack). Add the CLI script to `package.json`:

```json
"scripts": {
  "astryx": "node node_modules/@astryxdesign/cli/clients/cli/bin/astryx.mjs"
}
```

Optional: run `npm run astryx -- init` to write Astryx guidance into the project's agent instruction files.

### 2. CSS layers: check the Tailwind version first

Astryx uses CSS cascade layers. If Tailwind preflight is left unlayered, it silently breaks Astryx padding and theme styles. Check `package.json` for the `tailwindcss` version.

**Tailwind v3** (project has `tailwind.config.ts` and `@tailwind` directives):

`src/app/layers.css` (new file, contains only this line):

```css
@layer reset, tw-preflight, astryx-base, astryx-theme;
```

`src/app/globals.css`: put the Astryx imports at the top and wrap `@tailwind base`. Keep the existing neural utilities below.

```css
@import "@astryxdesign/core/reset.css";
@import "@astryxdesign/core/astryx.css";
@import "@astryxdesign/theme-neutral/theme.css";

@layer tw-preflight {
  @tailwind base;
}
@tailwind components;
@tailwind utilities; /* unlayered: existing neural utility classes keep winning */

/* ...existing .text-gradient, .glass, .glow-* utilities unchanged... */
```

`src/app/layout.tsx`: import `layers.css` **first**, because Next.js hoists CSS imports:

```tsx
import './layers.css';
import './globals.css';
```

**Tailwind v4** (`@import "tailwindcss"`): put this line **above** the Tailwind import, then follow `npm run astryx -- docs styling-libraries/tailwind`, section "Add Astryx to an app that already uses Tailwind":

```css
@layer reset, theme, base, astryx-base, astryx-theme, components, utilities;
```

### 3. Provider

`src/app/providers.tsx`:

```tsx
'use client';

import Link from 'next/link';
import {Theme} from '@astryxdesign/core/theme';
import {LinkProvider} from '@astryxdesign/core/Link';
import {neutralTheme} from '@astryxdesign/theme-neutral/built';

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <Theme theme={neutralTheme} mode="dark">
      <LinkProvider component={Link}>{children}</LinkProvider>
    </Theme>
  );
}
```

Wrap `{children}` in `src/app/layout.tsx` with `<Providers>`. `mode="dark"` matches the dark neural design. Use `"system"` only if the profile has a light theme too.

## Theming to match the profile

- Start from `theme-neutral`. Its muted look sits well inside the dark neural sections.
- To apply the client's accent color (the theme preset's `cyan`), use `defineTheme` with the accent family API. Do **not** hand-write single color tokens: if you only override `--color-accent`, `--color-on-accent` keeps its default value and contrast can fail. See `npm run astryx -- docs theme` and the theme section of `npm run astryx -- docs migration`.
- Small overrides (glass background, glow) go on the panel container through `className` with the existing Tailwind utilities. A utility class wins over Astryx because utilities are a later or unlayered layer.

## Recipes

### AI chat panel (`src/components/ChatWidget.tsx`)

Keep the existing chat hook and `/api/chat` route. Change only the rendering.

```tsx
'use client';

import {
  ChatLayout,
  ChatMessageList,
  ChatMessage,
  ChatMessageBubble,
  ChatComposer,
} from '@astryxdesign/core/Chat';
import {Markdown} from '@astryxdesign/core/Markdown';

// messages / send / isStreaming / stop / error come from the widget's existing chat hook
<ChatLayout
  composer={
    <ChatComposer
      placeholder={`Ask about ${personalInfo.name}'s experience...`}
      onSubmit={(text) => send(text)}
      onStop={isStreaming ? stop : undefined}
      isDisabled={isRateLimited}
      status={error ? {type: 'error', message: 'Something went wrong. Try again.'} : undefined}
    />
  }>
  <ChatMessageList>
    {messages.map((m) => (
      <ChatMessage key={m.id} sender={m.role === 'user' ? 'user' : 'assistant'}>
        <ChatMessageBubble variant={m.role === 'user' ? undefined : 'ghost'}>
          {m.role === 'user' ? m.text : <Markdown>{m.text}</Markdown>}
        </ChatMessageBubble>
      </ChatMessage>
    ))}
  </ChatMessageList>
</ChatLayout>
```

- Render assistant replies with `Markdown`, because the persona prompt asks for bullet points.
- Show suggested starter questions (from the `ai-chat-persona` test list) as `Button variant="ghost"` items before the first message.
- Before using other parts (`ChatSystemMessage`, `ChatLayoutScrollButton`, `ChatMessageMetadata`), check them with `npm run astryx -- component Chat`.

### Contact or lead form (`src/components/ContactForm.tsx`)

```tsx
'use client';

import {useState} from 'react';
import {FormLayout} from '@astryxdesign/core/FormLayout';
import {TextInput} from '@astryxdesign/core/TextInput';
import {TextArea} from '@astryxdesign/core/TextArea';
import {Button} from '@astryxdesign/core/Button';
import {useToast} from '@astryxdesign/core/Toast';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const toast = useToast();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    // POST to the project's contact endpoint or form service
    setSending(false);
    toast({body: 'Message sent. Thanks for reaching out!'});
  }

  return (
    <form onSubmit={onSubmit}>
      <FormLayout>
        <FormLayout direction="horizontal">
          <TextInput label="Name" value={name} onChange={setName} />
          <TextInput label="Email" value={email} onChange={setEmail} />
        </FormLayout>
        <TextArea label="Message" value={message} onChange={setMessage} />
        <Button type="submit" label="Send message" variant="primary" isLoading={sending} />
      </FormLayout>
    </form>
  );
}
```

- Validation states and messages: see `npm run astryx -- component Field` and `FieldStatus`.
- Other inputs to look up when needed: `Selector` (dropdown), `CheckboxInput`, `RadioList`, `DateInput`.
- Keep the WhatsApp CTA (`https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t`) as a link next to or below the form, not replaced by it.

### Dialog (project details, contact modal)

```tsx
import {Dialog, DialogHeader} from '@astryxdesign/core/Dialog';
import {Layout, LayoutContent} from '@astryxdesign/core/Layout';

<Dialog isOpen={open} onOpenChange={setOpen} width={640}>
  <Layout
    header={<DialogHeader title={project.title} onOpenChange={setOpen} />}
    content={<LayoutContent>{/* project details or <ContactForm /> */}</LayoutContent>}
  />
</Dialog>
```

- Open it from the existing Tailwind trigger (for example a ProjectShowcase card button). The card stays Tailwind.
- For confirmations, use `AlertDialog`. For mobile slide-ups, use `BottomSheet` or `Drawer`.

## Verify before handoff

```
Astryx checklist:
- [ ] Only chat, forms, dialogs or toasts use Astryx; existing sections unchanged
- [ ] layers.css imported first (Tailwind v3), or @layer line above Tailwind import (v4)
- [ ] An Astryx Button and TextInput have visible padding (if padding is 0, the layer order is broken)
- [ ] Existing neural sections look exactly as before (no preflight or reset regressions)
- [ ] Chat panel, form and dialog checked in dark mode at mobile width (375px)
- [ ] Keyboard: Tab through the form, Esc closes the dialog, Enter sends a chat message
- [ ] `npm run build` passes
```
