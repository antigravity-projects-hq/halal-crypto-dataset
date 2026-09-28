# ☪︎ HALAL500: Open Shariah Cryptocurrency Dataset & Screening Index

[![AAOIFI Standard No. 21](https://img.shields.io/badge/AAOIFI-Standard%20No.%2021%20%26%2030-059669.svg)](https://halalcryptoindex.com/about#methodology)
[![Total Assets](https://img.shields.io/badge/Audited%20Assets-820+-0284c7.svg)](https://halalcryptoindex.com/halal500)
[![Halal Spot Coins](https://img.shields.io/badge/Halal%20Permissible-500-10b981.svg)](https://halalcryptoindex.com/halal500)
[![Prohibited Assets](https://img.shields.io/badge/Prohibited%20Haram-320-ef4444.svg)](https://halalcryptoindex.com/halal500)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Endpoint](https://img.shields.io/badge/REST%20API-Active-orange.svg)](https://halalcryptoindex.com/api/v1/assets.json)

The open-source institutional reference dataset of **820+ evaluated cryptocurrency assets**, screened and audited under official **AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions)** Shariah Standards No. 21 and No. 30.

Maintained by the **[Halal Crypto Index](https://halalcryptoindex.com)** research group under Lead Shariah Auditor **Dr. Tariq Al-Farsi, CSAA**.

---

## 🏛️ Jurisprudential Framework (AAOIFI Standard No. 21 & 30)

Every digital asset listed in this directory undergoes a mandatory 4-tier screening filter:
1. **Business Model Integrity:** Strict exclusion of interest lending (*Riba*), casino games (*Maisir*), weapons, or speculative Ponzi mechanics.
2. **Financial Debt Ratios:** In compliance with AAOIFI Rule 3/1/2, interest-bearing debt must not exceed 30% of market capitalization.
3. **Digital Property (*Mal Mutaqawwim*):** The token must carry legitimate, verifiable computational, governance, or consensus utility.
4. **Spot Delivery & Custody (*Qabd*):** Only non-leveraged Spot transactions with immediate constructive possession are deemed permissible. Perpetual futures and margin borrowing are strictly prohibited.

---

## 📦 Quickstart for Developers (Node.js)

Clone this repository or require `index.js` directly into your crypto bot, screener, or portfolio tracker:

```javascript
const { isHalal, dataset } = require('./index.js');

// Verify token compliance
const kaspa = isHalal('KAS');
console.log(kaspa);
/* Output:
{
  name: 'Kaspa',
  ticker: 'KAS',
  isCompliant: true,
  status: 'halal',
  aaoifiBasis: 'A decentralized digital asset serving as a medium of exchange. No elements of Riba or Gharar.',
  auditUrl: 'https://halalcryptoindex.com/halal500#kas-halal'
}
*/
```

---

## 🌐 Official Web Portal & Localized Indexes
- **Live Search & Interactive Directory:** [https://halalcryptoindex.com/halal500](https://halalcryptoindex.com/halal500)
- **31 Language Editions:** English, Arabic (العربية), Bahasa Indonesia, Urdu (اردو), Turkish (Türkçe), Russian (Русский), and more.
- **REST JSON Endpoint:** [https://halalcryptoindex.com/api/v1/assets.json](https://halalcryptoindex.com/api/v1/assets.json)
- **Live Updates Feed:** [https://halalcryptoindex.com/rss.xml](https://halalcryptoindex.com/rss.xml)

---

## 📜 Academic Citation (CFF)
To cite this dataset in research papers or Islamic banking dissertations, use the **Cite this repository** button or reference `CITATION.cff`.
