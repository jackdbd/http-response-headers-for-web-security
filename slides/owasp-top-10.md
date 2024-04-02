---
layout: center
---
<h1>OWASP Top 10 Web Application Security Risks</h1>

<Transform scale="1">

1. [Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)
2. [Cryptographic Failures](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/) (previously known as Sensitive Data Exposure)
3. [Injection](https://owasp.org/Top10/A03_2021-Injection/) (from 2021, Cross-site Scripting is part of this category)
4. [Insecure Design](https://owasp.org/Top10/A04_2021-Insecure_Design/)
5. [Security Misconfiguration](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)
6. [Vulnerable and Outdated Components](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/)
7. [Identification and Authentication Failures](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/) (previously known as Broken Authentication)
8. [Software and Data Integrity Failures](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)
9. [Security Logging and Monitoring Failures](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)
10. [Server-Side Request Forgery](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

The [OWASP Top 10](https://owasp.org/www-project-top-ten/) is updated every 3-4 years.

The [previous version](https://owasp.org/www-project-top-ten/2017/Top_10.html) was published in 2017. The [next update](https://www.owasptopten.org/) is planned for September 2024.

</Transform>

<!--
OWASP: Open Source Foundation for Application Security

I have to say I don't find this OWASP top 10 particularly useful from a practical standpoint. I think it's overly generic. For example, Insecure Design could me a million things.

An appropriate configuration of a few HTTP response headers can help us mitigating some security risks that appear in this list.

The name of some entries is a bit misleading. E.g. one way to mitigate Cryptographic Failures is to disable caching for response that contain sensitive data, which has to do with the Cache-Control header and has nothing to do with cryptographic algorithms.

https://owasp.org/www-project-top-ten/

Security Logging and Monitoring Failures: failures in this category can directly impact visibility, incident alerting, and forensics.

https://owasp.org/Top10/it/A00_2021_Introduction/

We are planning to announce the release of the OWASP Top 10:2024 in September 2024 as part of the OWASP Global AppSec Conference

https://www.owasptopten.org/

The Open Web Application Security Project (OWASP) is an open community dedicated to enabling organizations to develop, purchase, and maintain applications and APIs that can be trusted.

https://owasp.org/Top10/A00_2021-How_to_start_an_AppSec_program_with_the_OWASP_Top_10/
Previously, the OWASP Top 10 was never designed to be the basis for an AppSec program. However, it's essential to start somewhere for many organizations just starting out on their application security journey. The OWASP Top 10 2021 is a good start as a baseline for checklists and so on, but it's not in itself sufficient.
-->
