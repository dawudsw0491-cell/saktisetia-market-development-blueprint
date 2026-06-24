# Risk Register

## Document Information

### Project Name

Market Development Intelligence Platform

### Version

1.0

### Status

Active

### Standard Reference

ISO 31000 Risk Management

PMBOK Risk Management

COBIT 2019 Governance and Management Objectives

---

# Purpose

Dokumen ini digunakan untuk mengidentifikasi, menilai, memonitor, dan mengendalikan risiko yang dapat mempengaruhi keberhasilan Market Development Intelligence Platform.

---

# Risk Rating Matrix

## Probability

| Level | Description |
|---------|-------------|
| 1 | Very Low |
| 2 | Low |
| 3 | Medium |
| 4 | High |
| 5 | Very High |

---

## Impact

| Level | Description |
|---------|-------------|
| 1 | Very Low |
| 2 | Low |
| 3 | Medium |
| 4 | High |
| 5 | Very High |

---

## Risk Level Formula

Risk Score = Probability × Impact

| Score | Classification |
|---------|---------------|
| 1-5 | Low |
| 6-10 | Medium |
| 11-15 | High |
| 16-25 | Critical |

---

# Risk Register

| Risk ID | Risk Description | Probability | Impact | Score | Level | Mitigation Strategy | Owner | Status |
|----------|-----------------|-------------|---------|--------|--------|--------------------|--------|--------|
| RSK-001 | Data simulasi tidak mencerminkan kondisi pasar sebenarnya | 3 | 3 | 9 | Medium | Menambahkan disclaimer dan asumsi bisnis | Product Owner | Open |
| RSK-002 | Dashboard tidak dipahami recruiter | 2 | 5 | 10 | Medium | Menyediakan glossary dan business definition | Business Analyst | Open |
| RSK-003 | Scope creep selama pengembangan portfolio | 4 | 3 | 12 | High | Menggunakan roadmap dan milestone | Project Manager | Open |
| RSK-004 | Struktur repository menjadi terlalu kompleks | 3 | 3 | 9 | Medium | Menetapkan standar folder dan naming convention | Solution Architect | Open |
| RSK-005 | Dokumentasi tidak sinkron dengan aplikasi | 3 | 4 | 12 | High | Review dokumentasi setiap release | Enterprise Architect | Open |
| RSK-006 | Build gagal setelah perubahan besar | 3 | 5 | 15 | High | Menjalankan build validation sebelum commit | Developer | Open |
| RSK-007 | Ketergantungan pada satu kontributor | 4 | 4 | 16 | Critical | Dokumentasi lengkap dan knowledge transfer | Project Sponsor | Open |
| RSK-008 | Arsitektur tidak scalable untuk pengembangan berikutnya | 2 | 5 | 10 | Medium | Menerapkan modular architecture | Enterprise Architect | Open |
| RSK-009 | Ketidaksesuaian dengan praktik TOGAF dan SDLC | 2 | 4 | 8 | Medium | Architecture review berkala | Enterprise Architect | Open |
| RSK-010 | Kehilangan histori keputusan teknis | 3 | 4 | 12 | High | Memelihara ADR dan Decision Log | Solution Architect | Open |

---

# Top Priority Risks

## Critical Risks

### RSK-007

Ketergantungan pada satu kontributor utama.

Tindakan:

- Dokumentasi lengkap
- Repository governance
- Knowledge transfer

---

## High Risks

### RSK-003

Scope creep.

Tindakan:

- Release planning
- Milestone governance
- Change control

### RSK-005

Dokumentasi tidak sinkron.

Tindakan:

- Review setiap sprint
- Review setiap release

### RSK-006

Build gagal.

Tindakan:

- Build verification
- Branch strategy
- Pull request review

---

# Risk Monitoring Process

## Identification

Identifikasi risiko dilakukan pada setiap fase pengembangan.

## Assessment

Penilaian menggunakan Probability dan Impact.

## Mitigation

Strategi mitigasi ditetapkan oleh owner risiko.

## Monitoring

Review dilakukan setiap milestone.

## Closure

Risiko ditutup apabila mitigasi berhasil dan dampak tidak lagi signifikan.

---

# Governance KPI

| KPI | Target |
|--------|---------|
| Build Success Rate | >95% |
| Documentation Coverage | 100% |
| Requirements Traceability | 100% |
| Architecture Decision Coverage | 100% |
| Open Critical Risk | 0 |

---

# Conclusion

Risk Register ini menjadi dasar governance dan pengendalian risiko untuk memastikan Market Development Intelligence Platform tetap maintainable, scalable, dan sesuai dengan prinsip Enterprise Architecture, TOGAF, dan Digital Transformation.