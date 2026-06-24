# RAID Log

## Document Information

### Project Name

Market Development Intelligence Platform

### Version

1.0

### Status

Active

### Standard Reference

PMBOK Project Risk Management

PMO Governance Framework

Digital Transformation Governance

---

# Purpose

RAID Log digunakan untuk mengelola:

- Risks
- Assumptions
- Issues
- Dependencies

agar seluruh stakeholder memiliki sumber informasi yang konsisten mengenai kondisi proyek.

---

# RAID Overview

## R - Risks

Risiko yang berpotensi menghambat pencapaian tujuan proyek.

## A - Assumptions

Asumsi yang digunakan sebagai dasar perencanaan.

## I - Issues

Masalah yang telah terjadi dan memerlukan tindakan.

## D - Dependencies

Ketergantungan yang mempengaruhi keberhasilan proyek.

---

# Risk Register Summary

| ID | Risk | Impact | Status |
|----|--------|--------|--------|
| RSK-001 | Data simulasi tidak merepresentasikan kondisi aktual | Medium | Open |
| RSK-002 | Recruiter tidak memahami dashboard | Medium | Open |
| RSK-003 | Scope creep | High | Open |
| RSK-004 | Repository complexity | Medium | Open |
| RSK-005 | Dokumentasi tidak sinkron | High | Open |
| RSK-006 | Build failure | High | Open |
| RSK-007 | Single contributor dependency | Critical | Open |

---

# Assumption Register

| Assumption ID | Description | Owner | Status |
|---------------|-------------|--------|--------|
| ASM-001 | Data digunakan untuk simulasi portfolio | Product Owner | Active |
| ASM-002 | Tidak ada integrasi sistem eksternal | Solution Architect | Active |
| ASM-003 | Platform digunakan sebagai showcase profesional | Project Sponsor | Active |
| ASM-004 | Seluruh data bersifat non-produksi | Business Owner | Active |
| ASM-005 | Build dilakukan sebelum commit | Lead Developer | Active |

---

# Issue Register

| Issue ID | Description | Impact | Action | Status |
|-----------|-------------|---------|---------|---------|
| ISS-001 | Missing component pada fase awal development | Medium | Refactor component structure | Closed |
| ISS-002 | TypeScript mismatch pada beberapa module | Medium | Type alignment | Closed |
| ISS-003 | Import path inconsistency | Medium | Standardization | Closed |
| ISS-004 | Build error karena missing props | High | Interface correction | Closed |
| ISS-005 | Placeholder pages belum lengkap | Medium | Progressive implementation | Closed |

---

# Dependency Register

| Dependency ID | Description | Dependency Type | Owner | Status |
|---------------|-------------|----------------|--------|--------|
| DEP-001 | Next.js Framework | Technical | Solution Architect | Active |
| DEP-002 | TypeScript | Technical | Lead Developer | Active |
| DEP-003 | Tailwind CSS | Technical | Lead Developer | Active |
| DEP-004 | GitHub Repository | Platform | Project Sponsor | Active |
| DEP-005 | Vercel Deployment | Platform | DevOps Owner | Active |
| DEP-006 | Enterprise Architecture Repository | Business | Enterprise Architect | Active |
| DEP-007 | SDLC Documentation Set | Governance | Project Manager | Active |

---

# RAID Governance Process

## Identification

Risks, Assumptions, Issues, dan Dependencies diidentifikasi selama pengembangan.

## Assessment

Masing-masing item dievaluasi berdasarkan dampak dan prioritas.

## Tracking

Seluruh item dicatat dalam RAID Log.

## Escalation

Item dengan dampak tinggi diekskalasi ke Project Sponsor.

## Closure

Item ditutup setelah tindakan selesai dan diverifikasi.

---

# RAID KPI

| KPI | Target |
|------|---------|
| Open Critical Risk | 0 |
| Closed Issues | >90% |
| Active Dependency Visibility | 100% |
| Assumption Review Coverage | 100% |
| RAID Review Compliance | >95% |

---

# RAID Review Schedule

| Activity | Frequency |
|-----------|-----------|
| Risk Review | Every Sprint |
| Issue Review | Weekly |
| Dependency Review | Monthly |
| Assumption Review | Quarterly |
| Governance Review | Every Release |

---

# Conclusion

RAID Log menjadi alat governance utama untuk memonitor risiko, asumsi, masalah, dan ketergantungan sehingga Market Development Intelligence Platform dapat dikembangkan secara terkontrol, transparan, dan sesuai prinsip Enterprise Architecture serta Digital Transformation Governance.