<div align="center">

# 📝 Posts Explorer

<p align="center">
  <img src="https://img.shields.io/badge/Status-Complete-success?style=for-the-badge" alt="Status Complete">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js 16">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Coverage-100%25-brightgreen?style=for-the-badge" alt="Coverage 100%">
</p>

<p align="center">
  <strong>A modern web application to browse and filter posts from JSONPlaceholder API</strong>
</p>

<p align="center">
  Built with Next.js, React, TypeScript, Tailwind CSS, and SWR.<br>
  Features include filtering by user, loading states, error handling, and slow connection detection.
</p>

<p align="center">
  <a href="https://streaver-tech-challenge-6rku.vercel.app">🌐 Live Demo</a>
</p>

---

</div>

## 📋 Table of Contents

- [⚙️ Tech Stack](#️-tech-stack)
- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🚀 Getting Started](#-getting-started)
- [🧪 Testing](#-testing)
- [📁 Project Structure](#-project-structure)
- [📚 Documentation](#-documentation)

## ⚙️ Tech Stack

<table>
<tr>
<td width="50%">

### 🎨 Frontend
- ![Next.js](https://img.shields.io/badge/Next.js_16-black?style=flat-square&logo=next.js&logoColor=white) **Next.js 16** (App Router)
- ![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black) **React 19**
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) **TypeScript**
- ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) **Tailwind CSS**

</td>
<td width="50%">

### 🔧 Data & State
- ![SWR](https://img.shields.io/badge/SWR-black?style=flat-square&logo=vercel&logoColor=white) **SWR** (Data Fetching)
- ![API](https://img.shields.io/badge/JSONPlaceholder-API-orange?style=flat-square) **JSONPlaceholder API**

</td>
</tr>
<tr>
<td width="50%">

### 🧪 Testing
- ![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white) **Jest**
- ![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=flat-square&logo=testing-library&logoColor=white) **React Testing Library**

</td>
<td width="50%">

### 🚀 Deployment
- ![Vercel](https://img.shields.io/badge/Vercel-black?style=flat-square&logo=vercel&logoColor=white) **Vercel**

</td>
</tr>
</table>

## ✨ Features

<table>
<tr>
<td width="50%">

### 📝 Core Features
- ✅ Browse all posts from API
- ✅ Filter posts by User ID
- ✅ Debounced search (300ms)
- ✅ Responsive grid layout

</td>
<td width="50%">

### 🛡️ Resilience & UX
- ✅ Loading skeleton states
- ✅ Error handling with retry
- ✅ Slow connection detection
- ✅ Automatic retries (3x)
- ✅ Cache with revalidation

</td>
</tr>
</table>

## 🏗️ Architecture

<div align="center">

```
┌─────────────────────────────────────────────────────────────┐
│                        UI Layer                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  PostCard   │  │  PostList   │  │    SearchInput      │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │LoadingState │  │ ErrorState  │  │SlowConnectionBanner │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       Hooks Layer                            │
│                    ┌──────────────┐                          │
│                    │   usePosts   │                          │
│                    └──────────────┘                          │
│                           │                                  │
│                    ┌──────────────┐                          │
│                    │  SWRConfig   │                          │
│                    └──────────────┘                          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Service Layer                           │
│                 ┌──────────────────┐                         │
│                 │  posts.service   │                         │
│                 └──────────────────┘                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Infrastructure Layer                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐   │
│  │  api-client  │  │    config    │  │      types       │   │
│  └──────────────┘  └──────────────┘  └──────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     External API                             │
│              jsonplaceholder.typicode.com                    │
└─────────────────────────────────────────────────────────────┘
```

</div>

### 🎯 Design Decisions

| Decision | Rationale |
|----------|-----------|
| **SWR for data fetching** | Built-in cache, revalidation, retry logic, and slow connection detection |
| **Layered architecture** | Clear separation of concerns: UI → Hooks → Services → Infrastructure |
| **Debounced search** | Prevents excessive API calls while typing |
| **Defensive error handling** | Graceful degradation with cached data when possible |

> 📖 See [Architecture Decision Records](./docs/adrs/) for detailed explanations.

## 🚀 Getting Started

### 📋 Prerequisites

<table>
<tr>
<td width="50%" align="center">
<img src="https://img.shields.io/badge/Node.js-18+-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
<br><strong>Node.js 18+</strong>
</td>
<td width="50%" align="center">
<img src="https://img.shields.io/badge/npm-9+-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm"/>
<br><strong>npm 9+</strong>
</td>
</tr>
</table>

### ⚙️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/jkalicha/streaver-tech-challenge.git

# 2. Navigate to the project
cd streaver-tech-challenge

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

**🌐 Open [http://localhost:3000](http://localhost:3000) in your browser**

### 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |

## 🧪 Testing

<div align="center">

<img src="https://img.shields.io/badge/Coverage-100%25-brightgreen?style=for-the-badge" alt="Coverage 100%">

</div>

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm run test:watch
```

### 📊 Test Coverage

| Module | Statements | Branches | Functions | Lines |
|--------|------------|----------|-----------|-------|
| `lib/api-client` | 100% | 100% | 100% | 100% |
| `services/posts.service` | 100% | 100% | 100% | 100% |
| `components/ui/*` | 100% | 100% | 100% | 100% |
| `components/common/*` | 100% | 100% | 100% | 100% |

## 📁 Project Structure

```
streaver-tech-challenge/
│
├── 📂 app/                    # Next.js App Router
│   ├── layout.tsx             # Root layout with SWRProvider
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
│
├── 📂 components/
│   ├── common/                # Shared components
│   │   ├── ErrorState.tsx     # Error display with retry
│   │   ├── LoadingState.tsx   # Skeleton loaders
│   │   ├── SlowConnectionBanner.tsx
│   │   └── SWRProvider.tsx    # SWR configuration
│   │
│   └── ui/                    # UI components
│       ├── PostCard.tsx       # Individual post card
│       ├── PostList.tsx       # Grid of posts
│       └── SearchInput.tsx    # Debounced search
│
├── 📂 config/
│   └── env.ts                 # Environment configuration
│
├── 📂 docs/
│   ├── adrs/                  # Architecture Decision Records
│   ├── assumptions/           # Project assumptions
│   └── letra/                 # Challenge requirements
│
├── 📂 hooks/
│   └── usePosts.ts            # Posts data fetching hook
│
├── 📂 lib/
│   └── api-client.ts          # HTTP client with error handling
│
├── 📂 services/
│   └── posts.service.ts       # Posts API service
│
├── 📂 types/
│   └── post.ts                # TypeScript interfaces
│
├── 📂 __tests__/              # Unit tests (mirrors src structure)
│
└── 📄 Configuration files
    ├── next.config.ts
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── jest.config.ts
```

## 📚 Documentation

<table>
<tr>
<td width="33%" align="center">

### 📖 ADRs
Architecture Decision Records explaining key technical decisions.

[View ADRs →](./docs/adrs/)

</td>
<td width="33%" align="center">

### 💭 Assumptions
Project assumptions and constraints.

[View Assumptions →](./docs/assumptions/)

</td>
<td width="33%" align="center">

### 📋 Challenge
Original challenge requirements.

[View Challenge →](./docs/letra/)

</td>
</tr>
</table>

---

<div align="center">

<p>
  <img src="https://img.shields.io/badge/Made_for-Streaver_Challenge-blue?style=for-the-badge" alt="Made for Streaver">
</p>

<p>
  <strong>Built with ❤️ using Next.js, React, and TypeScript</strong>
</p>

</div>
