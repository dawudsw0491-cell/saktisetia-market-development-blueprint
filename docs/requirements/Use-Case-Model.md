# Use Case Model

## Document Information

### Project Name

Market Development Intelligence Platform

### Version

1.0

### Status

Draft

### Related Documents

* Project Charter
* Product Vision
* BRD
* SRS

---

# 1. Purpose

Dokumen ini mendefinisikan interaksi antara pengguna dan sistem Market Development Intelligence Platform.

Dokumen digunakan sebagai referensi untuk:

* Business Analysis
* System Analysis
* Requirements Validation
* Solution Design

---

# 2. Actors

## ACT-01 Recruiter

Tujuan:

Memahami kemampuan kandidat melalui dashboard dan blueprint.

---

## ACT-02 Sales Manager

Tujuan:

Memahami prioritas wilayah dan peluang outlet.

---

## ACT-03 Business Development Manager

Tujuan:

Memahami peluang ekspansi pasar.

---

## ACT-04 Director

Tujuan:

Memahami strategi pertumbuhan dan pengambilan keputusan.

---

## ACT-05 Enterprise Architect

Tujuan:

Memahami arsitektur bisnis, data, aplikasi, dan transformasi.

---

# 3. Use Case List

## UC-001 View Executive Dashboard

Primary Actor:

Recruiter

Description:

Melihat ringkasan seluruh strategi market development.

Precondition:

Website dapat diakses.

Postcondition:

Actor memahami ringkasan kondisi market.

---

## UC-002 View Territory Intelligence

Primary Actor:

Sales Manager

Description:

Melihat ranking wilayah dan opportunity score.

Precondition:

Data territory tersedia.

Postcondition:

Prioritas wilayah dapat diidentifikasi.

---

## UC-003 View Outlet Development

Primary Actor:

Sales Manager

Description:

Melihat strategi RO, AO, dan NOO.

Precondition:

Data outlet tersedia.

Postcondition:

Peluang pengembangan outlet dapat dipahami.

---

## UC-004 View Institutional Market

Primary Actor:

Business Development Manager

Description:

Melihat peluang institusi pendidikan, pemerintah, dan perusahaan.

Precondition:

Data institusi tersedia.

Postcondition:

Target institusi prioritas dapat diidentifikasi.

---

## UC-005 View Community Market

Primary Actor:

Business Development Manager

Description:

Melihat peluang komunitas dan UMKM.

Precondition:

Data komunitas tersedia.

Postcondition:

Peluang engagement dapat dipahami.

---

## UC-006 View Event Strategy

Primary Actor:

Business Development Manager

Description:

Melihat strategi event dan aktivasi pasar.

Precondition:

Data event tersedia.

Postcondition:

Peluang event dapat diprioritaskan.

---

## UC-007 View Growth Roadmap

Primary Actor:

Director

Description:

Melihat roadmap pertumbuhan.

Precondition:

Roadmap tersedia.

Postcondition:

Target pertumbuhan dapat dipahami.

---

## UC-008 View Enterprise Architecture

Primary Actor:

Enterprise Architect

Description:

Melihat artefak Enterprise Architecture dan TOGAF ADM.

Precondition:

Dokumen arsitektur tersedia.

Postcondition:

Blueprint arsitektur dapat dipahami.

---

## UC-009 View Digital Transformation Blueprint

Primary Actor:

Director

Description:

Melihat strategi transformasi digital.

Precondition:

Blueprint tersedia.

Postcondition:

Arah transformasi organisasi dapat dipahami.

---

# 4. Use Case Relationship

Executive Dashboard
→ Territory Intelligence

Territory Intelligence
→ Outlet Development

Outlet Development
→ Institutional Market

Institutional Market
→ Community Market

Community Market
→ Event Strategy

Event Strategy
→ Growth Roadmap

Growth Roadmap
→ Enterprise Architecture

Enterprise Architecture
→ Digital Transformation Blueprint

---

# 5. Success Criteria

* Seluruh use case dapat diakses tanpa error.
* Alur navigasi mudah dipahami.
* Informasi dapat ditemukan dalam waktu kurang dari 5 menit.
* Recruiter dapat memahami framework secara mandiri.
