---
layout: default
---
# [Cryptographic Failures](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

<Transform scale="1">

passwords, credit card numbers, health records, personal information, and business secrets require extra protection, mainly if that data falls under privacy laws, e.g., EU's General Data Protection Regulation (GDPR), or regulations, e.g., financial data protection such as PCI Data Security Standard (PCI DSS)

</Transform>

<!--
**Notable Common Weakness Enumerations (CWEs) included are**:

- CWE-259: Use of Hard-coded Password
- CWE-327: Broken or Risky Crypto Algorithm
- CWE-331 Insufficient Entropy

Classify data processed, stored, or transmitted by an application. Identify which data is sensitive according to privacy laws, regulatory requirements, or business needs.

Don't store sensitive data unnecessarily. Discard it as soon as possible or use PCI DSS compliant tokenization or even truncation. Data that is not retained cannot be stolen.

Make sure to encrypt all sensitive data at rest.

Ensure up-to-date and strong standard algorithms, protocols, and keys are in place; use proper key management.

Encrypt all data in transit with secure protocols such as TLS with forward secrecy (FS) ciphers, cipher prioritization by the server, and secure parameters. Enforce encryption using directives like HTTP Strict Transport Security (HSTS).

Disable caching for response that contain sensitive data.

Apply required security controls as per the data classification.
-->
