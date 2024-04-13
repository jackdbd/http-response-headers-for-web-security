---
layout: two-cols
title: When and how CSRF works?
---
<h1><span class="color:accent">When</span> does it work?</h1>

<Transform scale="0.95">

For a CSRF attack to be possible, three key conditions must be in place:

<ol>
  <li>A relevant <span class="color:accent">action</span> directed to the vulnerable website. For example, a form submission.</li>

  <li>An <span class="color:accent">automatic way to submit user's credentials</span>. E.g. session cookies, HTTP Basic authentication, certificate-based authentication.</li>

  <li><span class="color:accent">No unpredictable request parameters</span>. The requests that perform the action do not contain any parameters whose values the attacker cannot determine or guess. For example, when causing a user to change their password, the function is not vulnerable if an attacker needs to know the value of the existing password.</li>
</ol>

</Transform>

::right::

<h1><span class="color:accent">How</span> does it work?</h1>

<Transform scale="0.95">

If a victim user visits the attacker's web page, the following will happen:

1. The attacker's page will <span class="color:accent">trigger an HTTP request</span> to the vulnerable website.
2. <span class="color:accent">If the victim is logged in</span> to the vulnerable website, their browser will <span class="color:accent">automatically include their session cookie</span> in the request*.
3. The vulnerable website will process the request in the normal way, as it had been made by the victim on the vulnerable website.

<span>*</span>Browsers will <span class="color:accent">not</span> send the cookie if it has the `SameSite=Strict` or `SameSite=Lax` attribute.

</Transform>

<!--
CSRF is an attack that tricks the victim into submitting a malicious request. It inherits the identity and privileges of the victim to perform an undesired function on the victim’s behalf.

[What is Certificate-Based Authentication?](https://www.yubico.com/resources/glossary/what-is-certificate-based-authentication/)
-->
