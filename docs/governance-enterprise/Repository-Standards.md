# Repository Standards

## Document Information

### Project Name

Market Development Intelligence Platform

### Version

1.0

### Status

Approved

### Standard Reference

ISO/IEC/IEEE 12207

TOGAF Architecture Governance

COBIT 2019 Governance Framework

Git Repository Best Practices

---

# Purpose

Dokumen ini mendefinisikan standar pengelolaan repository untuk memastikan konsistensi, maintainability, scalability, dan governance pada Market Development Intelligence Platform.

Tujuan:

- Menstandarkan struktur repository
- Menjaga kualitas source code
- Menjaga konsistensi dokumentasi
- Mendukung SDLC Governance
- Mendukung Enterprise Architecture Governance

---

# Repository Objectives

Repository harus:

- Mudah dipahami
- Mudah dipelihara
- Mudah dikembangkan
- Mudah diaudit
- Mudah dipresentasikan

---

# Standard Repository Structure

```text
app/
components/
data/
types/
docs/
public/
```

---

# Application Layer Standards

## Folder

```text
app/
```

Berisi seluruh route aplikasi.

Contoh:

```text
app/
├── page.tsx
├── territory-intelligence/
├── outlet-development/
├── institutional-market/
├── community-market/
├── event-strategy/
├── growth-roadmap/
├── enterprise-architecture/
└── digital-transformation/
```

### Rules

- Setiap domain memiliki folder sendiri
- Setiap route memiliki page.tsx
- Tidak diperbolehkan business logic kompleks di page.tsx

---

# Component Layer Standards

## Folder

```text
components/
```

Berisi reusable UI dan business component.

Contoh:

```text
components/
├── cards/
├── charts/
├── analytics/
├── executive/
├── architecture/
├── transformation/
├── reports/
├── layout/
└── shared/
```

### Rules

- Reusable
- Modular
- Single Responsibility Principle
- Typed Component

---

# Data Layer Standards

## Folder

```text
data/
```

Contoh:

```text
territories.ts
outlets.ts
institutions.ts
communities.ts
events.ts
roadmap.ts
```

### Rules

- Data harus typed
- Tidak boleh ada rendering logic
- Tidak boleh ada UI logic

---

# Type Layer Standards

## Folder

```text
types/
```

Contoh:

```text
territory.ts
outlet.ts
institution.ts
community.ts
event.ts
roadmap.ts
```

### Rules

- Interface only
- Type definition only
- Tidak boleh ada business logic

---

# Documentation Standards

## Folder

```text
docs/
```

Digunakan untuk seluruh artefak SDLC.

Contoh:

```text
business/
requirements/
architecture/
governance/
transformation/
design/
governance-enterprise/
```

---

# Naming Convention

## Component

PascalCase

Contoh:

```text
ExecutiveScorecard
RiskDashboard
TransformationVision
```

---

## Component File

kebab-case

Contoh:

```text
executive-scorecard.tsx
risk-dashboard.tsx
transformation-vision.tsx
```

---

## Data File

Plural Noun

Contoh:

```text
territories.ts
institutions.ts
communities.ts
```

---

## Type File

Singular Noun

Contoh:

```text
territory.ts
institution.ts
community.ts
```

---

# Branch Strategy

## Main

Stable production-ready branch.

Rules:

- Build harus hijau
- Tidak boleh commit langsung

---

## Feature Branch

Contoh:

```text
feature/executive-intelligence
feature/enterprise-architecture
feature/sdlc-artifacts
```

Rules:

- Satu branch satu objective
- Harus di-build sebelum merge

---

## Release Branch

Contoh:

```text
release/v2.0
```

Digunakan untuk release besar.

---

# Commit Standards

Format:

```text
feat:
fix:
docs:
refactor:
style:
chore:
```

Contoh:

```text
feat: enterprise architecture layer

fix: typescript validation

docs: update srs document
```

---

# Repository Quality Rules

Sebelum commit:

- Build berhasil
- Tidak ada TypeScript error
- Dokumentasi diperbarui
- Struktur folder sesuai standar

---

# Governance Rules

## Mandatory

- ADR tersedia
- Risk Register tersedia
- Decision Log tersedia
- RAID Log tersedia

---

## Recommended

- Architecture Review
- Quality Gate Review
- Release Validation

---

# Repository KPI

| KPI | Target |
|-------|---------|
| Build Success Rate | 100% |
| Documentation Coverage | 100% |
| TypeScript Compliance | 100% |
| Governance Compliance | 100% |
| Repository Structure Compliance | 100% |

---

# Review Cycle

| Activity | Frequency |
|------------|------------|
| Repository Review | Monthly |
| Architecture Review | Every Release |
| Governance Review | Every Release |
| Documentation Review | Monthly |

---

# Conclusion

Repository Standards menjadi pedoman resmi pengelolaan Market Development Intelligence Platform untuk memastikan kualitas, konsistensi, governance, dan scalability jangka panjang.