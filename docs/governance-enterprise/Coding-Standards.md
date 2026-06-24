# Coding Standards

## Document Information

### Project Name

Market Development Intelligence Platform

### Version

1.0

### Status

Approved

### Standard Reference

ISO/IEC/IEEE 12207

Clean Code Principles

SOLID Principles

TypeScript Best Practices

Next.js Best Practices

---

# Purpose

Dokumen ini mendefinisikan standar pengembangan source code yang digunakan pada Market Development Intelligence Platform.

Tujuan:

- Menjaga kualitas source code
- Meningkatkan maintainability
- Meningkatkan readability
- Meningkatkan scalability
- Mendukung SDLC Governance

---

# Coding Principles

## Readability First

Source code harus mudah dibaca.

Prioritas:

1. Readability
2. Maintainability
3. Performance
4. Optimization

---

## Simplicity First

Gunakan solusi paling sederhana yang memenuhi kebutuhan.

Hindari:

- Over Engineering
- Premature Optimization
- Unnecessary Abstraction

---

## Reusability First

Komponen harus dapat digunakan kembali.

Contoh:

- KPI Card
- Summary Card
- Page Header
- Dashboard Layout

---

## Maintainability First

Perubahan harus dapat dilakukan dengan dampak minimal.

---

# SOLID Principles

## Single Responsibility Principle

Satu komponen memiliki satu tanggung jawab utama.

Contoh:

```tsx
ExecutiveScorecard
```

menampilkan scorecard.

Bukan:

- scorecard
- reporting
- navigation

dalam satu komponen.

---

## Open Closed Principle

Komponen dapat diperluas tanpa mengubah implementasi utama.

---

## Liskov Substitution Principle

Turunan harus dapat menggantikan parent tanpa merusak perilaku sistem.

---

## Interface Segregation Principle

Gunakan interface kecil dan spesifik.

---

## Dependency Inversion Principle

Gunakan abstraction daripada ketergantungan langsung.

---

# TypeScript Standards

## Mandatory

Seluruh source code menggunakan TypeScript.

---

## Interface First

Gunakan interface untuk struktur data.

Contoh:

```ts
export interface Territory {
  id: string;
  areaName: string;
}
```

---

## Typed Props

Semua component props wajib typed.

Contoh:

```tsx
interface KpiCardProps {
  title: string;
  value: number | string;
}
```

---

## Prohibited

Tidak diperbolehkan:

```ts
any
```

kecuali terdapat alasan yang terdokumentasi.

---

# React Standards

## Functional Component Only

Gunakan Functional Component.

Contoh:

```tsx
export function ExecutiveScorecard() {
  return <div />;
}
```

---

## Component Size

Target:

- < 200 baris per component

Jika lebih besar:

- pecah menjadi sub component

---

## Component Responsibility

Komponen:

- menampilkan data
- menerima props
- mengelola rendering

Bukan:

- menyimpan data global
- menyimpan business rule kompleks

---

# Import Standards

Urutan import:

```ts
1. External Library
2. Shared Components
3. Business Components
4. Data
5. Types
```

Contoh:

```ts
import React from "react";

import { PageHeader } from "../shared/page-header";

import { territories } from "../../data/territories";

import { Territory } from "../../types/territory";
```

---

# Naming Standards

## Component

PascalCase

Contoh:

```text
ExecutiveScorecard
RiskDashboard
OpportunityDashboard
```

---

## Variable

camelCase

Contoh:

```ts
territoryScore
communitySummary
```

---

## Constant

UPPER_CASE

Contoh:

```ts
MAX_SCORE
DEFAULT_PRIORITY
```

---

## File Name

kebab-case

Contoh:

```text
executive-scorecard.tsx
risk-dashboard.tsx
```

---

# Data Standards

## Source of Truth

Data hanya berasal dari:

```text
data/
```

---

## Separation

Pisahkan:

- UI
- Data
- Type

---

# Error Prevention

## Before Commit

Wajib menjalankan:

```bash
npm run build
```

---

## Build Policy

Build harus:

```text
SUCCESS
```

Tidak diperbolehkan:

```text
TypeScript Error
Build Error
Module Not Found
```

---

# Code Review Checklist

- Readable
- Typed
- Reusable
- Modular
- Build Success
- Documentation Updated

---

# Technical Debt Policy

Technical debt harus:

- dicatat
- diprioritaskan
- direview pada release berikutnya

---

# Quality KPI

| KPI | Target |
|-------|---------|
| TypeScript Compliance | 100% |
| Build Success Rate | 100% |
| Dead Code | 0 |
| Critical Defect | 0 |
| Documentation Coverage | 100% |

---

# Governance Compliance

Source code harus sesuai dengan:

- ADR
- Architecture Principles
- Repository Standards
- Definition of Done

---

# Conclusion

Coding Standards menjadi pedoman resmi pengembangan source code untuk memastikan kualitas, konsistensi, maintainability, dan scalability Market Development Intelligence Platform.