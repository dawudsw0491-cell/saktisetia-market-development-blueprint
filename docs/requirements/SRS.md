# Software Requirements Specification (SRS)

## Document Information

### Project Name

Market Development Intelligence Platform

### Version

1.0

### Status

Draft

### Standard Reference

ISO/IEC/IEEE 29148 Software Requirements Specification

### Related Documents

* Project Charter
* Product Vision
* Business Requirement Document (BRD)
* Stakeholder Matrix

---

# 1. Introduction

## 1.1 Purpose

Dokumen ini mendefinisikan kebutuhan perangkat lunak untuk Market Development Intelligence Platform yang digunakan sebagai platform strategic business showcase untuk memvisualisasikan strategi pengembangan pasar area Kediri dan Nganjuk.

## 1.2 Scope

Platform menyediakan:

* Executive Dashboard
* Territory Intelligence
* Outlet Development
* Institutional Market
* Community Market
* Event Strategy
* Growth Roadmap
* Enterprise Architecture Repository
* Digital Transformation Blueprint

Platform tidak digunakan sebagai sistem operasional perusahaan.

## 1.3 Intended Audience

* Recruiter
* Business Analyst
* System Analyst
* Enterprise Architect
* Digital Transformation Consultant
* Sales Manager
* Business Development Manager

---

# 2. Product Overview

## 2.1 Product Perspective

Platform merupakan aplikasi web berbasis Next.js yang menyajikan analisis, visualisasi, dan blueprint pengembangan pasar.

## 2.2 Product Functions

### Executive Dashboard

Menampilkan KPI dan ringkasan strategis.

### Territory Intelligence

Menampilkan analisis wilayah berdasarkan:

* LHR
* TOC
* Territory Score

### Outlet Development

Menampilkan strategi:

* RO (Repeat Order)
* AO (Active Outlet)
* NOO (New Open Outlet)

### Institutional Market

Menampilkan peluang pasar institusi.

### Community Market

Menampilkan peluang pasar komunitas.

### Event Strategy

Menampilkan strategi aktivasi pasar berbasis event.

### Growth Roadmap

Menampilkan roadmap pertumbuhan.

### Enterprise Architecture

Menampilkan artefak TOGAF dan Enterprise Architecture.

### Digital Transformation

Menampilkan blueprint transformasi digital.

---

# 3. User Classes

## Recruiter

Tujuan:

Menilai kemampuan kandidat.

## Business Development Manager

Tujuan:

Memahami peluang ekspansi pasar.

## Sales Manager

Tujuan:

Memahami prioritas wilayah dan outlet.

## Director

Tujuan:

Memahami potensi pertumbuhan dan strategi bisnis.

---

# 4. Functional Requirements

## FR-001 Executive Dashboard

Sistem harus menampilkan ringkasan KPI utama.

## FR-002 Territory Intelligence

Sistem harus menampilkan ranking wilayah.

## FR-003 LHR Analysis

Sistem harus menampilkan nilai LHR per wilayah.

## FR-004 TOC Analysis

Sistem harus menampilkan nilai TOC per wilayah.

## FR-005 Outlet Development

Sistem harus menampilkan data RO, AO, dan NOO.

## FR-006 Institutional Market

Sistem harus menampilkan data institusi.

## FR-007 Community Market

Sistem harus menampilkan data komunitas.

## FR-008 Event Strategy

Sistem harus menampilkan data event dan peluang aktivasi.

## FR-009 Growth Roadmap

Sistem harus menampilkan roadmap 30, 90, 180, dan 365 hari.

## FR-010 Enterprise Architecture

Sistem harus menampilkan artefak Enterprise Architecture.

## FR-011 Digital Transformation

Sistem harus menampilkan blueprint transformasi digital.

---

# 5. Non Functional Requirements

## Performance

NFR-001

Halaman harus dimuat kurang dari 3 detik pada koneksi normal.

## Availability

NFR-002

Platform tersedia minimal 99%.

## Usability

NFR-003

Pengguna dapat memahami struktur platform dalam waktu kurang dari 5 menit.

## Maintainability

NFR-004

Komponen harus modular dan reusable.

## Scalability

NFR-005

Platform dapat ditambah modul baru tanpa mengubah arsitektur inti.

## Security

NFR-006

Platform tidak menyimpan data rahasia perusahaan.

---

# 6. Constraints

## Technical

* Next.js
* TypeScript
* Tailwind CSS

## Deployment

* Vercel

## Repository

* GitHub

---

# 7. Assumptions

* Data yang digunakan merupakan data simulasi.
* Tidak ada integrasi dengan sistem perusahaan.
* Tidak ada transaksi operasional.

---

# 8. Acceptance Criteria

## Business

* Framework mudah dipahami recruiter.
* Analisis pasar mudah dipahami stakeholder.

## Technical

* Build berhasil tanpa error.
* Tidak terdapat broken page.

## Presentation

* Dapat digunakan sebagai strategic showcase.
* Dapat digunakan sebagai portfolio profesional.
