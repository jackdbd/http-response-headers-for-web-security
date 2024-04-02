---
# class: pl-5% pr-5% pt-5%
layout: center
title: Same-origin policy and CORS
---
<h1>Same-origin policy and CORS</h1>

<Transform scale="0.9">

Cross-Origin Resource Sharing (CORS) response headers:

- `Access-Control-Allow-Credentials`
- `Access-Control-Allow-Headers`
- `Access-Control-Allow-Methods`
- `Access-Control-Allow-Origin`
- `Access-Control-Expose-Headers`
- `Access-Control-Max-Age`
- `Access-Control-Request-Headers`
- `Access-Control-Request-Method`

<span class="color:accent">CORS misconfigurations</span> can be dangerous: <Anchor
  href="https://portswigger.net/research/exploiting-cors-misconfigurations-for-bitcoins-and-bounties"
  text="Exploiting CORS misconfigurations for Bitcoins and bounties"
  alt="James Kettle presentation at OWASP AppSec EU Belfast" />

</Transform>

<!--
todo: add Vary: Origin
-->