# Data Dictionary

## Document Information

### Project Name

Market Development Intelligence Platform

### Version

1.0

### Status

Approved

### Standard Reference

ISO/IEC/IEEE 12207

BABOK Guide

Data Architecture Principles

---

# Purpose

Dokumen ini mendefinisikan seluruh entitas bisnis utama yang digunakan dalam Market Development Intelligence Platform.

Tujuan:

- Menyamakan definisi data
- Mendukung Business Analysis
- Mendukung System Analysis
- Mendukung Enterprise Architecture
- Mendukung Data Governance

---

# Entity: Territory

## Description

Wilayah pengembangan pasar yang menjadi unit analisis utama.

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| id | string | Unique territory identifier |
| areaName | string | Nama wilayah |
| region | string | Kabupaten/Kota |
| category | string | Kategori wilayah |
| populationEstimate | number | Estimasi populasi |
| lhrPercentage | number | Living Household Ratio |
| tocPercentage | number | Total Outlet Coverage |
| institutionScore | number | Skor institusi |
| communityScore | number | Skor komunitas |
| outletGapScore | number | Skor gap outlet |
| territoryScore | number | Total skor wilayah |
| priority | string | Prioritas wilayah |
| notes | string | Catatan bisnis |

---

# Entity: Outlet

## Description

Representasi outlet yang menjadi target pengembangan pasar.

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| id | string | Unique identifier |
| outletCode | string | Kode outlet |
| outletName | string | Nama outlet |
| territoryId | string | Referensi wilayah |
| territoryName | string | Nama wilayah |
| category | string | Kategori outlet |
| status | string | RO, AO, NOO |
| isActive | boolean | Status aktif |
| estimatedMonthlySales | number | Estimasi penjualan |
| visitFrequency | number | Frekuensi kunjungan |
| potentialScore | number | Skor potensi |
| notes | string | Catatan bisnis |

---

# Entity: Institution

## Description

Representasi institusi target market.

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| id | string | Unique identifier |
| institutionName | string | Nama institusi |
| territoryId | string | Referensi wilayah |
| territoryName | string | Nama wilayah |
| type | string | Jenis institusi |
| estimatedPopulation | number | Estimasi populasi |
| opportunityScore | number | Skor peluang |
| priority | string | Prioritas |
| isPartnershipActive | boolean | Status kemitraan |
| notes | string | Catatan |

---

# Entity: Community

## Description

Representasi komunitas target engagement.

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| id | string | Unique identifier |
| communityName | string | Nama komunitas |
| territoryId | string | Referensi wilayah |
| territoryName | string | Nama wilayah |
| type | string | Jenis komunitas |
| memberEstimate | number | Estimasi anggota |
| opportunityScore | number | Skor peluang |
| priority | string | Prioritas |
| isPartnershipActive | boolean | Status kemitraan |
| notes | string | Catatan |

---

# Entity: Event

## Description

Representasi aktivitas event market activation.

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| id | string | Unique identifier |
| eventName | string | Nama event |
| territoryId | string | Referensi wilayah |
| territoryName | string | Nama wilayah |
| eventType | string | Jenis event |
| status | string | Status event |
| targetParticipant | number | Target peserta |
| actualParticipant | number | Realisasi peserta |
| estimatedLead | number | Estimasi lead |
| actualLead | number | Realisasi lead |
| estimatedConversion | number | Estimasi konversi |
| actualConversion | number | Realisasi konversi |
| eventDate | string | Tanggal event |
| notes | string | Catatan |

---

# Entity: Roadmap Milestone

## Description

Representasi milestone transformasi dan growth roadmap.

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| id | string | Unique identifier |
| phase | string | Fase roadmap |
| title | string | Nama milestone |
| objective | string | Tujuan |
| deliverables | array | Deliverables |
| successIndicator | string | KPI keberhasilan |
| status | string | Status milestone |

---

# Entity: Risk

## Description

Representasi risiko proyek.

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| riskId | string | ID risiko |
| description | string | Deskripsi risiko |
| probability | number | Probabilitas |
| impact | number | Dampak |
| score | number | Risk score |
| level | string | Risk level |
| mitigation | string | Mitigasi |
| owner | string | Penanggung jawab |
| status | string | Status |

---

# Entity: Decision

## Description

Representasi keputusan governance.

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| decisionId | string | ID keputusan |
| category | string | Kategori |
| decision | string | Keputusan |
| rationale | string | Alasan |
| owner | string | Penanggung jawab |
| status | string | Status |

---

# Business Glossary

## LHR

Living Household Ratio

Persentase potensi rumah tangga yang menjadi target market.

---

## TOC

Total Outlet Coverage

Persentase cakupan outlet pada suatu wilayah.

---

## RO

Repeat Order

Outlet yang sudah melakukan pembelian berulang.

---

## AO

Active Outlet

Outlet aktif yang melakukan transaksi.

---

## NOO

New Open Outlet

Target outlet baru yang belum menjadi pelanggan.

---

# Conclusion

Data Dictionary menjadi referensi resmi untuk seluruh definisi data dan istilah bisnis yang digunakan pada Market Development Intelligence Platform.