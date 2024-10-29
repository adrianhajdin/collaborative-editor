<div align="center">
  <br />
    <a href="https://youtu.be/y5vE8y_f_OM" target="_blank">
      <img src="https://github.com/user-attachments/assets/eaaeb1f0-22da-46be-9e29-9bef70e0039d" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=61DAFB" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A Collaborative LiveDocs</h3>

   <div align="center">
     Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Join the JSM family!
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Links](#links)
7. 🚀 [More](#more)

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>. 

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://youtu.be/y5vE8y_f_OM" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

Built with Next.js to handle the user interface, Liveblocks for real-time features and styled with TailwindCSS, LiveDocs is a clone of Goole Docs. The primary goal is to demonstrate the developer's skills in realtime enviroment that creates a lasting impact.

If you're getting started and need assistance or face any bugs, join our active Discord community with over **34k+** members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Liveblocks
- Lexical Editor
- ShadCN
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Authentication**: User authentication using GitHub through NextAuth, ensuring secure sign-in/out and session management.

👉 **Collaborative Text Editor**: Multiple users can edit the same document simultaneously with real-time updates.

👉 **Documents Management**
   - **Create Documents**: Users can create new documents, which are automatically saved and listed.
   - **Delete Documents**: Users can delete documents they own.
   - **Share Documents**: Users can share documents via email or link with view/edit permissions.
   - **List Documents**: Display all documents owned or shared with the user, with search and sorting functionalities.

👉 **Comments**: Users can add inline and general comments, with threading for discussions.

👉 **Active Collaborators on Text Editor**: Show active collaborators with real-time presence indicators.

👉 **Notifications**: Notify users of document shares, new comments, and collaborator activities.

👉 **Responsive**: The application is responsive across all devices.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/collaborative-editor.git
cd collaborative-editor
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk & LiveBlocks credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/) and [Liveblocks](liveblocks.io/) website.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* @import "@liveblocks/react-ui/styles.css"; */
/* @import "@liveblocks/react-lexical/styles.css"; */

/* @import "../styles/dark-theme.css"; */

/* ========================================== TAILWIND STYLES */
@layer base {
  :root {
    background: #09111f;
    color: #fff;
    margin: 0;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 50px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #09090a;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #2e3d5b;
    border-radius: 50px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #7878a3;
  }
}

@layer utilities {
  .text-28-semibold {
    @apply text-[28px] font-semibold;
  }
  .text-10-regular {
    @apply text-[10px] font-normal;
  }

  .gradient-blue {
    @apply bg-gradient-to-t from-blue-500 to-blue-400;
  }
  .gradient-red {
    @apply bg-gradient-to-t from-red-500 to-red-400;
  }

  .shad-dialog {
    @apply w-full max-w-[400px] rounded-xl border-none bg-doc bg-cover px-5 py-7 shadow-xl sm:min-w-[500px] !important;
  }

  .shad-dialog button {
    @apply focus:ring-0 focus:ring-offset-0 focus-visible:border-none focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-0 !important;
  }

  .shad-select {
    @apply w-fit border-none bg-transparent text-blue-100 !important;
  }

  .shad-select svg {
    @apply ml-1 mt-1;
  }

  .shad-select-item {
    @apply cursor-pointer bg-dark-200 text-blue-100 focus:bg-dark-300 hover:bg-dark-300 focus:text-blue-100 !important;
  }

  .shad-popover {
    @apply w-[460px] border-none bg-dark-200 shadow-lg !important;
  }

  .floating-toolbar {
    @apply flex w-full min-w-max items-center justify-center gap-2 rounded-lg bg-dark-350 p-1.5 shadow-xl;
  }

  .floating-toolbar-btn {
    @apply relative inline-flex size-8 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50;
  }

  .toolbar-wrapper {
    @apply z-50 custom-scrollbar w-screen overflow-auto border-y border-dark-300 bg-dark-100 pl-3 pr-4 shadow-sm;
  }

  .editor-wrapper {
    @apply custom-scrollbar h-[calc(100vh-140px)] gap-5 overflow-auto px-5 pt-5 lg:flex-row lg:items-start lg:justify-center  xl:gap-10 xl:pt-10;
  }

  .header {
    @apply min-h-[92px] min-w-full flex-nowrap bg-dark-100 flex w-full items-center justify-between gap-2 px-4;
  }

  .document-list-container {
    @apply flex flex-col items-center mb-10 w-full gap-10 px-5;
  }

  .document-list-title {
    @apply max-w-[730px] items-end flex w-full justify-between;
  }

  .document-list-item {
    @apply flex items-center justify-between gap-4 rounded-lg bg-doc bg-cover p-5 shadow-xl;
  }

  .document-list-empty {
    @apply flex w-full max-w-[730px] flex-col items-center justify-center gap-5 rounded-lg bg-dark-200 px-10 py-8;
  }

  .document-title-input {
    @apply min-w-[78px] border-none bg-transparent px-0 text-left text-base font-semibold leading-[24px] focus-visible:ring-0 focus-visible:ring-offset-0 disabled:text-black sm:text-xl md:text-center !important;
  }

  .document-title {
    @apply line-clamp-1 border-dark-400 text-base font-semibold leading-[24px] sm:pl-0 sm:text-xl;
  }

  .view-only-tag {
    @apply rounded-md bg-dark-400/50 px-2 py-0.5 text-xs text-blue-100/50;
  }

  .collaborators-list {
    @apply hidden items-center justify-end -space-x-3 overflow-hidden sm:flex;
  }

  .share-input {
    @apply h-11 flex-1 border-none bg-dark-400 focus-visible:ring-0 focus-visible:ring-offset-0 !important;
  }

  .remove-btn {
    @apply rounded-lg bg-transparent px-0 text-red-500 hover:bg-transparent;
  }

  .comments-container {
    @apply mb-10 space-y-4 lg:w-fit flex w-full flex-col items-center justify-center;
  }

  .comment-composer {
    @apply w-full max-w-[800px] border border-dark-300 bg-dark-200 shadow-sm lg:w-[350px];
  }

  .comment-thread {
    @apply w-full max-w-[800px] border border-dark-300 bg-dark-200 shadow-sm lg:w-[350px] transition-all;
  }

  .loader {
    @apply flex size-full h-screen items-center justify-center gap-3 text-white;
  }

  /* ======================== Auth Pages */
  .auth-page {
    @apply flex h-screen w-full flex-col items-center justify-center gap-10;
  }

  /* ======================== Home Page */
  .home-container {
    @apply relative flex min-h-screen w-full flex-col items-center gap-5 sm:gap-10;
  }

  .document-ul {
    @apply flex w-full max-w-[730px] flex-col gap-5;
  }

  /* ======================== CollaborativeRoom */
  .collaborative-room {
    @apply flex size-full max-h-screen flex-1 flex-col items-center overflow-hidden;
  }
}

/* ======================== Clerk Override */
.cl-avatarBox {
  width: 36px;
  height: 36px;
}

.cl-userButtonTrigger {
  height: fit-content !important;
}

.cl-cardBox,
.cl-signIn-start,
.cl-signUp-start,
.cl-footer {
  background: #060d18;
  box-shadow: none;
  padding: 20px;
}

.cl-socialButtonsBlockButton,
.cl-socialButtonsBlockButton:hover {
  height: 40px;
  background-color: #3371ff;
  color: #fff;
}

.cl-internal-2gzuzc {
  filter: brightness(1000%);
}

.cl-logoBox {
  height: 52px;
}

/* ======================== Liveblocks Override */
.lb-root {
  --lb-accent-subtle: #0b1527;
  --lb-radius: 0px;
  --lb-dynamic-background: #1b2840;
}

.lb-comment,
.lb-thread-comments,
.lb-composer,
.lb-comment-reaction {
  background-color: #0f1c34;
  color: #fff;
}

.lb-button {
  --lb-foreground-moderate: #fff;
}

.lb-button:where([data-variant="primary"]) {
  background-color: #161e30;
  color: #b4c6ee;
  padding: 8px;
}

.lb-button:where(
    [data-variant="default"]:not(
        :is(
            :enabled:hover,
            :enabled:focus-visible,
            [aria-expanded="true"],
            [aria-selected="true"]
          )
      )
  ) {
  color: #b4c6ee;
}

.lb-button:where(
    :enabled:hover,
    :enabled:focus-visible,
    [aria-expanded="true"],
    [aria-selected="true"]
  ) {
  --lb-button-background: #161e30;

  color: #b4c6ee;
}

.lb-inbox-notification-list-item:where(:not(:last-of-type)) {
  border-bottom: none;
}

.lb-comment-body,
.lb-dropdown-item,
.lb-dropdown-item-icon,
.lb-composer-editor {
  color: #fff;
}

.lb-composer-action {
  padding: 8px;
}

.lb-comment-content {
  background: #0b1527;
  margin-top: 16px;
  padding: 12px;
  border-radius: 4px;
  font-size: 14px;
}

.lb-comment-date,
.lb-lexical-mention-suggestion-user,
.lb-composer-suggestions-list-item,
.lb-inbox-notification-date,
.lb-comment-author {
  color: #b4c6ee;
}

.data-liveblocks-portal {
  color: #b4c6ee !important;
}

.lb-root:where(:not(.lb-root .lb-root)) {
  --lb-dynamic-background: #1b2840;
  color: #fff;
}

.lb-composer-editor :where([data-placeholder]) {
  color: #b4c6ee;
  font-size: 14px;
}

.lb-lexical-floating-threads-thread:where([data-resolved]) {
  opacity: 40%;
}

.lb-elevation {
  background: #0f1c34;
}
```

</details>

<details>
<summary><code>tailwind.config.ts</code></summary>

```typescript
import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
        xs: '360px',
      },
    },
    extend: {
      colors: {
        blue: {
          100: '#B4C6EE',
          400: '#417BFF',
          500: '#3371FF',
        },
        red: {
          400: '#DD4F56',
          500: '#DC4349',
        },
        dark: {
          100: '#09111F',
          200: '#0B1527',
          300: '#0F1C34',
          350: '#12213B',
          400: '#27344D',
          500: '#2E3D5B',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      backgroundImage: {
        doc: 'url(/assets/images/doc.png)',
        modal: 'url(/assets/images/modal.png)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
```

</details>

<details>
<summary><code>types/index.d.ts</code></summary>

```typescript
/* eslint-disable no-unused-vars */
declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type AccessType = ["room:write"] | ["room:read", "room:presence:write"];

declare type RoomAccesses = Record<string, AccessType>;

declare type UserType = "creator" | "editor" | "viewer";

declare type RoomMetadata = {
  creatorId: string;
  email: string;
  title: string;
};

declare type CreateDocumentParams = {
  userId: string;
  email: string;
};

declare type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color: string;
  userType?: UserType;
};

declare type ShareDocumentParams = {
  roomId: string;
  email: string;
  userType: UserType;
  updatedBy: User;
};

declare type UserTypeSelectorParams = {
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;
  onClickHandler?: (value: string) => void;
};

declare type ShareDocumentDialogProps = {
  roomId: string;
  collaborators: User[];
  creatorId: string;
  currentUserType: UserType;
};

declare type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

declare type CollaboratorProps = {
  roomId: string;
  email: string;
  creatorId: string;
  collaborator: User;
  user: User;
};

declare type CollaborativeRoomProps = {
  roomId: string;
  roomMetadata: RoomMetadata;
  users: User[];
  currentUserType: UserType;
};

declare type AddDocumentBtnProps = {
  userId: string;
  email: string;
};

declare type DeleteModalProps = { roomId: string };

declare type ThreadWrapperProps = { thread: ThreadData<BaseMetadata> };
```

</details>

<details>
<summary><code>lib/utils.ts</code></summary>

```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const getAccessType = (userType: UserType) => {
  switch (userType) {
    case 'creator':
      return ['room:write'];
    case 'editor':
      return ['room:write'];
    case 'viewer':
      return ['room:read', 'room:presence:write'];
    default:
      return ['room:read', 'room:presence:write'];
  }
};

export const dateConverter = (timestamp: string): string => {
  const timestampNum = Math.round(new Date(timestamp).getTime() / 1000);
  const date: Date = new Date(timestampNum * 1000);
  const now: Date = new Date();

  const diff: number = now.getTime() - date.getTime();
  const diffInSeconds: number = diff / 1000;
  const diffInMinutes: number = diffInSeconds / 60;
  const diffInHours: number = diffInMinutes / 60;
  const diffInDays: number = diffInHours / 24;

  switch (true) {
    case diffInDays > 7:
      return `${Math.floor(diffInDays / 7)} weeks ago`;
    case diffInDays >= 1 && diffInDays <= 7:
      return `${Math.floor(diffInDays)} days ago`;
    case diffInHours >= 1:
      return `${Math.floor(diffInHours)} hours ago`;
    case diffInMinutes >= 1:
      return `${Math.floor(diffInMinutes)} minutes ago`;
    default:
      return 'Just now';
  }
};

// Function to generate a random color in hex format, excluding specified colors
export function getRandomColor() {
  const avoidColors = ['#000000', '#FFFFFF', '#8B4513']; // Black, White, Brown in hex format

  let randomColor;
  do {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256); // Random number between 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convert RGB to hex format
    randomColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  } while (avoidColors.includes(randomColor));

  return randomColor;
}

export const brightColors = [
  '#2E8B57', // Darker Neon Green
  '#FF6EB4', // Darker Neon Pink
  '#00CDCD', // Darker Cyan
  '#FF00FF', // Darker Neon Magenta
  '#FF007F', // Darker Bright Pink
  '#FFD700', // Darker Neon Yellow
  '#00CED1', // Darker Neon Mint Green
  '#FF1493', // Darker Neon Red
  '#00CED1', // Darker Bright Aqua
  '#FF7F50', // Darker Neon Coral
  '#9ACD32', // Darker Neon Lime
  '#FFA500', // Darker Neon Orange
  '#32CD32', // Darker Neon Chartreuse
  '#ADFF2F', // Darker Neon Yellow Green
  '#DB7093', // Darker Neon Fuchsia
  '#00FF7F', // Darker Spring Green
  '#FFD700', // Darker Electric Lime
  '#FF007F', // Darker Bright Magenta
  '#FF6347', // Darker Neon Vermilion
];

export function getUserColor(userId: string) {
  let sum = 0;
  for (let i = 0; i < userId.length; i++) {
    sum += userId.charCodeAt(i);
  }

  const colorIndex = sum % brightColors.length;
  return brightColors[colorIndex];
}
```

</details>

<details>
<summary><code>components/editor/plugins/FloatingToolbar.tsx</code></summary>

```typescript
import {
  autoUpdate,
  flip,
  hide,
  limitShift,
  offset,
  shift,
  size,
  useFloating,
} from '@floating-ui/react-dom';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { OPEN_FLOATING_COMPOSER_COMMAND } from '@liveblocks/react-lexical';
import type { LexicalEditor, LexicalNode } from 'lexical';
import { $getSelection, $isRangeSelection, $isTextNode } from 'lexical';
import Image from 'next/image';
import { useEffect, useLayoutEffect, useState } from 'react';
import * as React from 'react';
import { createPortal } from 'react-dom';

export default function FloatingToolbar() {
  const [editor] = useLexicalComposerContext();

  const [range, setRange] = useState<Range | null>(null);

  useEffect(() => {
    editor.registerUpdateListener(({ tags }) => {
      return editor.getEditorState().read(() => {
        // Ignore selection updates related to collaboration
        if (tags.has('collaboration')) return;

        const selection = $getSelection();
        if (!$isRangeSelection(selection) || selection.isCollapsed()) {
          setRange(null);
          return;
        }

        const { anchor, focus } = selection;

        const range = createDOMRange(
          editor,
          anchor.getNode(),
          anchor.offset,
          focus.getNode(),
          focus.offset,
        );

        setRange(range);
      });
    });
  }, [editor]);

  if (range === null) return null;

  return (
    <Toolbar range={range} onRangeChange={setRange} container={document.body} />
  );
}

function Toolbar({
  range,
  onRangeChange,
  container,
}: {
  range: Range;
  onRangeChange: (range: Range | null) => void;
  container: HTMLElement;
}) {
  const [editor] = useLexicalComposerContext();

  const padding = 20;

  const {
    refs: { setReference, setFloating },
    strategy,
    x,
    y,
  } = useFloating({
    strategy: 'fixed',
    placement: 'bottom',
    middleware: [
      flip({ padding, crossAxis: false }),
      offset(10),
      hide({ padding }),
      shift({ padding, limiter: limitShift() }),
      size({ padding }),
    ],
    whileElementsMounted: (...args) => {
      return autoUpdate(...args, {
        animationFrame: true,
      });
    },
  });

  useLayoutEffect(() => {
    setReference({
      getBoundingClientRect: () => range.getBoundingClientRect(),
    });
  }, [setReference, range]);

  return createPortal(
    <div
      ref={setFloating}
      style={{
        position: strategy,
        top: 0,
        left: 0,
        transform: `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`,
        minWidth: 'max-content',
      }}
    >
      <div className="floating-toolbar">
        <button
          onClick={() => {
            const isOpen = editor.dispatchCommand(
              OPEN_FLOATING_COMPOSER_COMMAND,
              undefined,
            );
            if (isOpen) {
              onRangeChange(null);
            }
          }}
          className="floating-toolbar-btn"
        >
          <Image
            src="/assets/icons/comment.svg"
            alt="comment"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>,
    container,
  );
}

/**
 * MIT License
 * Copyright (c) Meta Platforms, Inc. and affiliates.

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

function getDOMTextNode(element: Node | null): Text | null {
  let node = element;

  while (node !== null) {
    if (node.nodeType === Node.TEXT_NODE) {
      return node as Text;
    }

    node = node.firstChild;
  }

  return null;
}

function getDOMIndexWithinParent(node: ChildNode): [ParentNode, number] {
  const parent = node.parentNode;

  if (parent === null) {
    throw new Error('Should never happen');
  }

  return [parent, Array.from(parent.childNodes).indexOf(node)];
}

/**
 * Creates a selection range for the DOM.
 * @param editor - The lexical editor.
 * @param anchorNode - The anchor node of a selection.
 * @param _anchorOffset - The amount of space offset from the anchor to the focus.
 * @param focusNode - The current focus.
 * @param _focusOffset - The amount of space offset from the focus to the anchor.
 * @returns The range of selection for the DOM that was created.
 */
export function createDOMRange(
  editor: LexicalEditor,
  anchorNode: LexicalNode,
  _anchorOffset: number,
  focusNode: LexicalNode,
  _focusOffset: number,
): Range | null {
  const anchorKey = anchorNode.getKey();
  const focusKey = focusNode.getKey();
  const range = document.createRange();
  let anchorDOM: Node | Text | null = editor.getElementByKey(anchorKey);
  let focusDOM: Node | Text | null = editor.getElementByKey(focusKey);
  let anchorOffset = _anchorOffset;
  let focusOffset = _focusOffset;

  if ($isTextNode(anchorNode)) {
    anchorDOM = getDOMTextNode(anchorDOM);
  }

  if ($isTextNode(focusNode)) {
    focusDOM = getDOMTextNode(focusDOM);
  }

  if (
    anchorNode === undefined ||
    focusNode === undefined ||
    anchorDOM === null ||
    focusDOM === null
  ) {
    return null;
  }

  if (anchorDOM.nodeName === 'BR') {
    [anchorDOM, anchorOffset] = getDOMIndexWithinParent(anchorDOM as ChildNode);
  }

  if (focusDOM.nodeName === 'BR') {
    [focusDOM, focusOffset] = getDOMIndexWithinParent(focusDOM as ChildNode);
  }

  const firstChild = anchorDOM.firstChild;

  if (
    anchorDOM === focusDOM &&
    firstChild !== null &&
    firstChild.nodeName === 'BR' &&
    anchorOffset === 0 &&
    focusOffset === 0
  ) {
    focusOffset = 1;
  }

  try {
    range.setStart(anchorDOM, anchorOffset);
    range.setEnd(focusDOM, focusOffset);
  } catch (e) {
    return null;
  }

  if (
    range.collapsed &&
    (anchorOffset !== focusOffset || anchorKey !== focusKey)
  ) {
    // Range is backwards, we need to reverse it
    range.setStart(focusDOM, focusOffset);
    range.setEnd(anchorDOM, anchorOffset);
  }

  return range;
}
```

</details>

<details>
<summary><code>components/DeleteModal.tsx</code></summary>

```typescript
"use client";

import Image from "next/image";
import { useState } from "react";

import { deleteDocument } from "@/lib/actions/room.actions";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";

export const DeleteModal = ({ roomId }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteDocumentHandler = async () => {
    setLoading(true);

    try {
      await deleteDocument(roomId);
      setOpen(false);
    } catch (error) {
      console.log("Error notif:", error);
    }

    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="min-w-9 rounded-xl bg-transparent p-2 transition-all">
          <Image
            src="/assets/icons/delete.svg"
            alt="delete"
            width={20}
            height={20}
            className="mt-1"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog">
        <DialogHeader>
          <Image
            src="/assets/icons/delete-modal.svg"
            alt="delete"
            width={48}
            height={48}
            className="mb-4"
          />
          <DialogTitle>Delete document</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this document? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-5">
          <DialogClose asChild className="w-full bg-dark-400 text-white">
            Cancel
          </DialogClose>

          <Button
            variant="destructive"
            onClick={deleteDocumentHandler}
            className="gradient-red w-full"
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
```

</details>

<details>
<summary><code>components/Notifications.ts</code></summary>

```typescript
"use client";

import {
  useInboxNotifications,
  useUnreadInboxNotificationsCount,
} from "@liveblocks/react/suspense";
import {
  InboxNotification,
  InboxNotificationList,
  LiveblocksUIConfig,
} from "@liveblocks/react-ui";
import Image from "next/image";
import { ReactNode } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Notifications = () => {
  const { inboxNotifications } = useInboxNotifications();
  const { count } = useUnreadInboxNotificationsCount();

  const unreadNotifications = inboxNotifications.filter(
    (notification) => !notification.readAt // Filter unread notifications
  );

  return (
    <Popover>
      <PopoverTrigger className="relative flex size-10 items-center justify-center rounded-lg">
        <Image
          src="/assets/icons/bell.svg"
          alt="inbox"
          width={24}
          height={24}
        />
        {count > 0 && (
          <div className="absolute right-2 top-2 z-20 size-2 rounded-full bg-blue-500" />
        )}
      </PopoverTrigger>
      <PopoverContent align="end" className="shad-popover">
        <LiveblocksUIConfig
          overrides={{
            INBOX_NOTIFICATION_TEXT_MENTION: (user: ReactNode) => {
              return <>{user} mentioned you</>;
            },
          }}
        >
          <InboxNotificationList>
            {unreadNotifications.length <= 0 && (
              <p className="py-2 text-center text-dark-500">
                No notifications yet
              </p>
            )}

            {unreadNotifications.length > 0 &&
              unreadNotifications.map((inboxNotification: any) => (
                <InboxNotification
                  key={inboxNotification.id}
                  inboxNotification={inboxNotification}
                  className="bg-dark-200 text-white"
                  href={`/documents/${inboxNotification.roomId}`}
                  showActions={false}
                  kinds={{
                    thread: (props) => (
                      <InboxNotification.Thread
                        {...props}
                        showRoomName={false}
                        showActions={false}
                      />
                    ),
                    textMention: (props) => {
                      return (
                        <InboxNotification.TextMention
                          {...props}
                          showRoomName={false}
                        />
                      );
                    },
                    $documentAccess: (props) => {
                      const { title, avatar } =
                        props.inboxNotification.activities[0].data;

                      return (
                        <InboxNotification.Custom
                          {...props}
                          title={title}
                          aside={
                            <InboxNotification.Icon className="bg-transparent">
                              <Image
                                src={(avatar as string) || ""}
                                width={36}
                                height={36}
                                alt="avatar"
                                className="rounded-full"
                              />
                            </InboxNotification.Icon>
                          }
                        >
                          {props.children}
                        </InboxNotification.Custom>
                      );
                    },
                  }}
                />
              ))}
          </InboxNotificationList>
        </LiveblocksUIConfig>
      </PopoverContent>
    </Popover>
  );
};
```

</details>

## <a name="links">🔗 Links</a>

- Public assets used in the project can be found [here](https://drive.google.com/file/d/1MCQaP-imgDdopwcUn4CN_D-WglDc--Ho/view?usp=sharing)
- [Liveblocks Starter Guide](https://liveblocks.io/docs/get-started/nextjs-lexical)

## <a name="more">🚀 More</a>
**Advance your skills with Next.js Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning experience. They're packed with detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://www.jsmastery.pro/ultimate-next-course" target="_blank">
<img src="https://i.ibb.co/804sPK6/Image-720.png" alt="Project Banner">
</a>
