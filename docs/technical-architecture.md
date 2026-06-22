# Technical Architecture

## Project Information

Project Name: Market Development Intelligence Platform

Version: 1.0

Status: Draft

---

# Architecture Objective

Membangun website strategic showcase yang:

* Cepat
* Mudah dipelihara
* Mudah dikembangkan
* SEO Friendly
* Responsive
* Siap di-deploy ke Vercel

---

# Technology Stack

## Frontend Framework

Next.js 15+

Reason:

* App Router
* SEO Friendly
* Fast Performance
* Vercel Native

---

## Language

TypeScript

Reason:

* Type Safety
* Maintainability
* Scalability

---

## Styling

Tailwind CSS

Reason:

* Fast Development
* Consistent Design
* Reusable Component

---

## Visualization

Recharts

Reason:

* Lightweight
* Responsive
* Dashboard Friendly

---

## Deployment

Vercel

Reason:

* Native Next.js Support
* CI/CD Integration
* Preview Deployment

---

## Source Control

GitHub

Source of Truth

---

# Architecture Pattern

Presentation Layer

↓

Feature Layer

↓

Data Layer

↓

Type Layer

---

# Project Structure

```text
src/

├── app/
├── components/
├── features/
├── data/
├── types/
├── hooks/
├── lib/
└── styles/
```

---

# App Router Structure

```text
src/app/

├── page.tsx
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

# Component Layer

## Shared Components

```text
src/components/

├── layout/
├── navigation/
├── cards/
├── charts/
├── tables/
├── badges/
└── roadmap/
```

---

# Data Layer

```text
src/data/

├── territories.ts
├── lhr.ts
├── toc.ts
├── outlets.ts
├── institutions.ts
├── communities.ts
├── events.ts
└── roadmap.ts
```

---

# Type Layer

```text
src/types/

├── territory.ts
├── lhr.ts
├── toc.ts
├── outlet.ts
├── institution.ts
├── community.ts
├── event.ts
└── roadmap.ts
```

---

# Chart Architecture

## Territory Intelligence

Components:

* LHR Bar Chart
* TOC Ranking Chart
* Territory Heatmap
* Priority Matrix

---

## Outlet Development

Components:

* RO Funnel
* AO Funnel
* NOO Funnel
* Coverage Chart

---

## Institutional Market

Components:

* Institution Distribution
* Opportunity Ranking

---

## Community Market

Components:

* Community Cluster
* Opportunity Ranking

---

## Event Strategy

Components:

* Event Funnel
* Lead Funnel
* Conversion Funnel

---

# State Management

Phase 1

Static Mock Data

Source:

src/data

---

Phase 2

API Ready

Future Expansion

---

# SEO Architecture

Each page must contain:

* Title
* Description
* Open Graph
* Structured Metadata

---

# Performance Target

## Lighthouse

Performance > 90

Accessibility > 90

Best Practice > 90

SEO > 90

---

# Quality Gate

Before Commit

```bash
npm run lint
```

---

Before Push

```bash
npm run build
```

---

Before Deploy

```bash
git push
```

Vercel Auto Deploy

---

# Security Principle

No Real Company Data

No Customer Data

No Financial Data

Only Strategic Showcase Data

---

# Deployment Architecture

Developer

↓

GitHub Repository

↓

Vercel Preview

↓

Validation

↓

Production Deployment

---

# Scalability Plan

Phase 1

Static Strategic Website

---

Phase 2

Interactive Dashboard

---

Phase 3

Live Data Integration

---

# Architecture Success Criteria

System harus:

* Modular
* Reusable
* Scalable
* Responsive
* Maintainable
* Deployment Friendly
