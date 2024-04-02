---
# class: pl-15% pr-15%
layout: center
title: CSP bypasses
---
<h1>CSP directives: be specific!</h1>

<Transform scale="1">

Whenever possible*, opt for the <span class="color:accent">most specific</span> CSP directive available.

<ul>
  <li class="list-none">🥉 Good: <code>default-src 'self'</code></li>
  <li class="list-none">🥈 Better: <code>script-src 'self'</code></li>
  <li class="list-none">🥇 Best: <code>script-src-elem 'self'</code></li>
</ul>

Why this? To mitigate [CSP bypasses](https://portswigger.net/web-security/cross-site-scripting/content-security-policy/lab-csp-bypass).

<p>*Remember: browser support for CSP directives is a bit messy.</p>

</Transform>

<!--
[Content Security Policy (CSP) Bypass on HackTricks](https://book.hacktricks.xyz/pentesting-web/content-security-policy-csp-bypass).
-->