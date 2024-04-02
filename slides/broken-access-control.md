---
layout: default
title: Broken access control
---
# Broken access control

<Transform scale="1">

https://owasp.org/Top10/A01_2021-Broken_Access_Control/

**Common access control vulnerabilities include:**

- Violation of the principle of least privilege.
- Bypassing access control checks by modifying the URL, internal application state, or the HTML page, or by using an attack tool modifying API requests.
- Permitting viewing or editing someone else's account, by providing its unique identifier (insecure direct object references).
- Accessing API with missing access controls for POST, PUT and DELETE.
- Privilege escalation.
- Metadata manipulation, such as replaying or tampering with a JSON Web Token (JWT) access control token, or a cookie or hidden field manipulated to elevate privileges or abusing JWT invalidation.
- <span class="color:accent">CORS misconfiguration</span>. E.g. <Anchor
  href="https://portswigger.net/research/exploiting-cors-misconfigurations-for-bitcoins-and-bounties"
  text="Exploiting CORS misconfigurations for Bitcoins and bounties"
  alt="James Kettle presentation at OWASP AppSec EU Belfast" />

</Transform>

<!--
94% of applications were tested for some form of broken access control with the average incidence rate of 3.81%.
Broken access control has the most occurrences in the contributed dataset with over 318k.

Notable Common Weakness Enumerations (CWEs) included are:

- CWE-200: Exposure of Sensitive Information to an Unauthorized Actor
- CWE-201: Insertion of Sensitive Information Into Sent Data
- CWE-352: Cross-Site Request Forgery

[How to prevent](https://owasp.org/Top10/A01_2021-Broken_Access_Control/#how-to-prevent)

- Implement access control mechanisms once and re-use them throughout the application, including minimizing Cross-Origin Resource Sharing (CORS) usage.
- Log access control failures, alert admins when appropriate (e.g., repeated failures).
- Rate limit API and controller access to minimize the harm from automated attack tooling.
- Stateful session identifiers should be invalidated on the server after logout. Stateless JWT tokens should rather be short-lived so that the window of opportunity for an attacker is minimized. For longer lived JWTs it's highly recommended to follow the OAuth standards to revoke access.
-->
