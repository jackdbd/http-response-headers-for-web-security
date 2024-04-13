---
# class: pl-15% pr-15%
layout: center
title: CSP bypasses
---
<h1>CSP directives: be specific!</h1>

<Transform scale="1">

Whenever possible*, opt for the <span class="color:accent">most specific</span> CSP directive available.

For example, if we want to allow self-hosted `<script>` elements:

<ul>
  <li class="list-none">🥉 Good: <code>default-src 'self'</code></li>
  <li class="list-none">🥈 Better: <code>script-src 'self'</code></li>
  <li class="list-none">🥇 Best: <code>script-src-elem 'self'</code></li>
</ul>

Why this? To mitigate [CSP bypasses](https://portswigger.net/web-security/cross-site-scripting/content-security-policy/lab-csp-bypass).

<p>*Remember: browser support for CSP directives is a bit messy.</p>

</Transform>

<!--
- The `script-src-elem` CSP directive specifies valid sources for JavaScript `<script>` elements.
- The `script-src-attr` CSP directive specifies valid sources for JavaScript inline event handlers.

[Content Security Policy (CSP) Bypass on HackTricks](https://book.hacktricks.xyz/pentesting-web/content-security-policy-csp-bypass).
-->