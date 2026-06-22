# Entity Catalog

## Project Information

Project Name: Market Development Intelligence Platform

Version: 1.0

Status: Draft

---

# Purpose

Dokumen ini mendefinisikan seluruh entitas data yang digunakan dalam platform Market Development Intelligence Platform.

Dokumen ini menjadi acuan untuk:

* TypeScript Interface
* Mock Data
* Dashboard Dataset
* Chart Dataset
* Table Dataset
* Future API Contract

---

# Entity Relationship Overview

Territory

↓

LHR

↓

TOC

↓

Outlet

↓

Institution

↓

Community

↓

Event

↓

Roadmap

---

# ENTITY 01 — Territory

## Description

Merepresentasikan wilayah analisis.

---

### Fields

| Field          | Type   | Required | Description         |
| -------------- | ------ | -------- | ------------------- |
| id             | string | Yes      | Unique ID           |
| kabupaten      | string | Yes      | Kabupaten           |
| kecamatan      | string | Yes      | Kecamatan           |
| areaType       | string | Yes      | Urban / Rural       |
| priority       | string | Yes      | High / Medium / Low |
| territoryScore | number | Yes      | Territory Score     |

---

# ENTITY 02 — LHR

## Description

Merepresentasikan hasil pengukuran lalu lintas harian rata-rata.

---

### Fields

| Field           | Type   | Required | Description         |
| --------------- | ------ | -------- | ------------------- |
| id              | string | Yes      | Unique ID           |
| territoryId     | string | Yes      | Reference Territory |
| lhrValue        | number | Yes      | Traffic Count       |
| lhrPercentage   | number | Yes      | LHR Percentage      |
| category        | string | Yes      | High / Medium / Low |
| observationDate | string | Yes      | Survey Date         |

---

# ENTITY 03 — TOC

## Description

Territory Opportunity Calculation.

---

### Fields

| Field          | Type   | Required | Description         |
| -------------- | ------ | -------- | ------------------- |
| id             | string | Yes      | Unique ID           |
| territoryId    | string | Yes      | Reference Territory |
| tocScore       | number | Yes      | Opportunity Score   |
| ranking        | number | Yes      | Territory Rank      |
| classification | string | Yes      | Priority Level      |

---

# ENTITY 04 — Outlet

## Description

Data pengembangan outlet.

---

### Fields

| Field          | Type   | Required | Description          |
| -------------- | ------ | -------- | -------------------- |
| id             | string | Yes      | Outlet ID            |
| territoryId    | string | Yes      | Territory Reference  |
| outletName     | string | Yes      | Outlet Name          |
| outletType     | string | Yes      | Traditional / Modern |
| status         | string | Yes      | RO / AO / NOO        |
| potentialScore | number | Yes      | Potential Score      |

---

# ENTITY 05 — Institution

## Description

Data institusi potensial.

---

### Fields

| Field           | Type   | Required | Description                                         |
| --------------- | ------ | -------- | --------------------------------------------------- |
| id              | string | Yes      | Institution ID                                      |
| institutionName | string | Yes      | Institution Name                                    |
| category        | string | Yes      | School / University / BUMN / Government / Pesantren |
| territoryId     | string | Yes      | Territory Reference                                 |
| potentialScore  | number | Yes      | Potential Score                                     |

---

# ENTITY 06 — Community

## Description

Data komunitas potensial.

---

### Fields

| Field          | Type   | Required | Description                     |
| -------------- | ------ | -------- | ------------------------------- |
| id             | string | Yes      | Community ID                    |
| communityName  | string | Yes      | Community Name                  |
| category       | string | Yes      | UMKM / Organization / Community |
| territoryId    | string | Yes      | Territory Reference             |
| potentialScore | number | Yes      | Potential Score                 |

---

# ENTITY 07 — Event

## Description

Data event marketing.

---

### Fields

| Field              | Type   | Required | Description         |
| ------------------ | ------ | -------- | ------------------- |
| id                 | string | Yes      | Event ID            |
| eventName          | string | Yes      | Event Name          |
| eventType          | string | Yes      | B2B / B2C           |
| territoryId        | string | Yes      | Territory Reference |
| targetAudience     | string | Yes      | Audience            |
| expectedLead       | number | Yes      | Lead Target         |
| expectedConversion | number | Yes      | Conversion Target   |

---

# ENTITY 08 — Brand Awareness

## Description

Program peningkatan awareness.

---

### Fields

| Field           | Type   | Required | Description         |
| --------------- | ------ | -------- | ------------------- |
| id              | string | Yes      | Program ID          |
| programName     | string | Yes      | Program Name        |
| territoryId     | string | Yes      | Territory Reference |
| awarenessTarget | number | Yes      | Target Reach        |
| activationType  | string | Yes      | Offline / Online    |

---

# ENTITY 09 — Roadmap

## Description

Roadmap implementasi.

---

### Fields

| Field           | Type   | Required | Description             |
| --------------- | ------ | -------- | ----------------------- |
| id              | string | Yes      | Roadmap ID              |
| phase           | string | Yes      | 30 / 90 / 180 / 365 Day |
| objective       | string | Yes      | Objective               |
| activity        | string | Yes      | Planned Activity        |
| expectedOutcome | string | Yes      | Expected Outcome        |

---

# Dashboard KPI Schema

## Executive KPI

* Territory Score
* LHR Score
* TOC Score
* Opportunity Score
* Outlet Growth Score

---

## Territory KPI

* Territory Priority
* LHR Category
* TOC Category

---

## Outlet KPI

* RO Count
* AO Count
* NOO Count

---

## Institutional KPI

* Institution Count
* Institution Opportunity Score

---

## Community KPI

* Community Count
* Community Opportunity Score

---

## Event KPI

* Event Count
* Lead Target
* Conversion Target

---

# Data Governance

## Unique Identifier

Setiap entitas wajib memiliki:

id

---

## Reference Integrity

Setiap entitas wajib menggunakan:

territoryId

sebagai foreign reference.

---

## Naming Standard

Menggunakan:

camelCase

untuk seluruh field.

---

# Future TypeScript Mapping

Entity ini akan menjadi dasar:

* Territory.ts
* LHR.ts
* TOC.ts
* Outlet.ts
* Institution.ts
* Community.ts
* Event.ts
* BrandAwareness.ts
* Roadmap.ts

---

# Conclusion

Entity Catalog menjadi fondasi utama seluruh struktur data, dashboard, visualisasi, dan implementasi source code pada tahap pengembangan berikutnya.
