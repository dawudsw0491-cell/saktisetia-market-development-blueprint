# Project Governance

## Project Name

Market Development Intelligence Platform

---

# Governance Objective

Dokumen ini menjadi pedoman resmi pengembangan proyek untuk menjaga konsistensi struktur, kualitas dokumentasi, kualitas source code, repository, dan deployment.

---

# Project Philosophy

Build Once, Structure Correctly, Scale Safely.

Tujuan utama proyek adalah menghasilkan platform yang:

* Mudah dipahami
* Mudah diaudit
* Mudah dikembangkan
* Tidak memiliki duplikasi modul
* Tidak memiliki technical debt sejak awal

---

# Single Source of Truth

## Official Repository

GitHub menjadi satu-satunya sumber kebenaran proyek.

Seluruh perubahan wajib berasal dari repository.

Tidak diperbolehkan:

* Menyimpan versi berbeda di luar repository
* Menyimpan file ganda
* Menyimpan modul dengan fungsi yang sama

---

# Development Environment

## Primary Workspace

Terminal Mac

Digunakan untuk:

* Navigasi project
* Membuat folder
* Membuat file
* Menjalankan git
* Menjalankan build
* Menjalankan deployment

Terminal merupakan alat kerja utama.

---

## Code Editor

Sublime Text

Digunakan untuk:

* Menulis dokumentasi
* Mengedit source code
* Mereview file

Sublime bukan source of truth.

---

## Repository Management

GitHub

Digunakan untuk:

* Version control
* Audit history
* Backup project
* Source of truth

---

## Deployment Platform

Vercel

Digunakan untuk:

* Preview deployment
* Production deployment
* Build validation
* Hosting

---

# Documentation Governance

Seluruh artefak SDLC wajib disimpan pada:

docs/

Contoh:

* project-charter.md
* product-vision.md
* project-governance.md
* user-persona.md
* sitemap.md
* technical-architecture.md

Tidak diperbolehkan membuat dokumen SDLC di luar folder docs.

---

# Terminal First Workflow

Analisis

↓

Create File

↓

Audit File Exists

↓

Open Sublime

↓

Paste Content

↓

Save

↓

Audit Content

↓

Validation

↓

Commit

↓

Push

↓

Deploy

---

# Audit Governance

## Audit Level 1

File Audit

Memastikan:

* File ada
* Nama file benar
* Lokasi file benar

---

## Audit Level 2

Content Audit

Memastikan:

* Konten lengkap
* Tidak ada placeholder
* Tidak ada section kosong

---

## Audit Level 3

Repository Audit

Memastikan:

* Tidak ada file duplikat
* Tidak ada folder duplikat
* Tidak ada modul overlap

---

## Audit Level 4

Build Audit

Memastikan:

* Build berhasil
* Tidak ada lint error
* Tidak ada import error

---

# Naming Convention

## Documentation

Menggunakan:

kebab-case

Contoh:

* project-charter.md
* user-persona.md
* technical-architecture.md

---

## Folder

Menggunakan:

kebab-case

Contoh:

* market-intelligence
* territory-intelligence
* outlet-development

---

# Branch Strategy

## main

Production branch

---

## develop

Development branch

---

## feature/*

Feature branch

Contoh:

feature/user-persona

feature/sitemap

---

## hotfix/*

Perbaikan darurat

---

# Commit Convention

## docs

Perubahan dokumentasi

Contoh:

docs: add project governance

---

## feat

Penambahan fitur

Contoh:

feat: create territory intelligence module

---

## fix

Perbaikan bug

Contoh:

fix: repair route configuration

---

## refactor

Perbaikan struktur

Contoh:

refactor: simplify folder structure

---

# Module Governance

Satu fitur hanya boleh memiliki satu folder utama.

Contoh benar:

territory-intelligence/

Contoh salah:

territory/

territory-analysis/

territory-intelligence/

---

# Deployment Governance

Local Validation

↓

Git Commit

↓

Git Push

↓

Vercel Preview

↓

User Audit

↓

Production Deployment

---

# Quality Objectives

Repository harus:

* Bersih
* Konsisten
* Mudah dipelihara
* Mudah diaudit
* Tidak memiliki duplikasi
* Tidak memiliki struktur ambigu

---

# Approval Requirement

Setiap perubahan signifikan wajib melalui:

* Audit
* Validasi User
* Commit

Tidak diperbolehkan langsung push tanpa validasi.
