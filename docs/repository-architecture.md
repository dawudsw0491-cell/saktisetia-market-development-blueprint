# Repository Architecture

## Project Information

Project Name: Market Development Intelligence Platform

Version: 1.0

Status: Draft

---

# Purpose

Dokumen ini mendefinisikan struktur repository yang digunakan untuk memastikan pengembangan berjalan konsisten, mudah diaudit, mudah dipelihara, dan mudah dikembangkan.

Repository ini menggunakan prinsip:

* Single Source of Truth
* Modular Architecture
* Feature Based Structure
* Terminal First Workflow

---

# Root Structure

```text
market-development-platform/

├── docs/
├── public/
├── src/
├── .github/
├── .gitignore
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
└── tailwind.config.ts
```

---

# Documentation Structure

```text
docs/

├── project-charter.md
├── product-vision.md
├── project-governance.md
├── user-persona.md
├── stakeholder-matrix.md
├── business-requirement.md
├── sitemap.md
├── information-architecture.md
├── entity-catalog.md
├── ui-blueprint.md
├── technical-architecture.md
└── repository-architecture.md
```

---

# Source Structure

```text
src/

├── app/
├── components/
├── features/
├── data/
├── types/
├── hooks/
├── lib/
├── styles/
└── constants/
```

---

# App Router Structure

```text
src/app/

├── page.tsx
├── layout.tsx
├── executive-dashboard/
├── market-intelligence/
├── territory-intelligence/
├── outlet-development/
├── institutional-market/
├── community-market/
├── event-strategy/
├── brand-awareness/
└── growth-roadmap/
```

---

# Feature Structure

```text
src/features/

├── executive-dashboard/
├── market-intelligence/
├── territory-intelligence/
├── outlet-development/
├── institutional-market/
├── community-market/
├── event-strategy/
├── brand-awareness/
└── growth-roadmap/
```

---

# Component Structure

```text
src/components/

├── layout/
├── navigation/
├── dashboard/
├── charts/
├── cards/
├── tables/
├── badges/
├── timeline/
└── shared/
```

---

# Data Structure

```text
src/data/

├── territories.ts
├── lhr.ts
├── toc.ts
├── outlets.ts
├── institutions.ts
├── communities.ts
├── events.ts
├── awareness.ts
└── roadmap.ts
```

---

# Type Structure

```text
src/types/

├── territory.ts
├── lhr.ts
├── toc.ts
├── outlet.ts
├── institution.ts
├── community.ts
├── event.ts
├── awareness.ts
└── roadmap.ts
```

---

# Library Structure

```text
src/lib/

├── calculations/
├── charts/
├── formatters/
├── validators/
└── utilities/
```

---

# Public Assets Structure

```text
public/

├── images/
├── icons/
├── logos/
└── mock/
```

---

# Branch Strategy

## Production

main

---

## Development

develop

---

## Feature Branch

feature/*

Contoh:

feature/executive-dashboard

feature/territory-intelligence

---

## Hotfix

hotfix/*

---

# Commit Convention

## Documentation

docs:

Contoh:

docs: add repository architecture

---

## Feature

feat:

Contoh:

feat: add territory dashboard

---

## Bug Fix

fix:

Contoh:

fix: repair chart rendering

---

## Refactor

refactor:

Contoh:

refactor: simplify feature structure

---

## Style

style:

Contoh:

style: improve dashboard spacing

---

# Pull Request Rule

Checklist:

* Build Success
* No Lint Error
* No Duplicate Component
* No Duplicate Data Source
* Documentation Updated

---

# Deployment Workflow

Developer

↓

Local Validation

↓

Git Commit

↓

Git Push

↓

GitHub

↓

Vercel Preview

↓

Validation

↓

Production

---

# Repository Governance

Dilarang:

* Duplicate Folder
* Duplicate Feature
* Duplicate Component
* Duplicate Data Source
* Unused Module

---

# Naming Convention

Semua folder:

kebab-case

Contoh:

territory-intelligence

outlet-development

---

Semua file TypeScript:

camelCase atau PascalCase sesuai kebutuhan.

---

# Quality Gate

Sebelum Push

```bash
npm run lint
npm run build
```

Harus lolos tanpa error.

---

# Scalability Strategy

Phase 1

Static Strategic Dashboard

---

Phase 2

Interactive Dashboard

---

Phase 3

API Integration

---

Phase 4

Business Intelligence Platform

---

# Success Criteria

Repository harus:

* Mudah diaudit
* Mudah dikembangkan
* Tidak memiliki duplikasi
* Konsisten
* Siap deployment
* Siap scaling
