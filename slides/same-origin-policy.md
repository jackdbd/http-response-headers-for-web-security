---
# class: pl-5% pr-5% pt-5%
# layout: center
title: Same-origin policy
---
<h1>Same-origin policy (SOP)</h1>

<Transform scale="0.9">

[What is permitted and what is blocked?](https://web.dev/articles/same-origin-policy#what_is_permitted_and_what_is_blocked)

<div class="grid grid-cols-2 grid-gap-2">
  <div>
    <h2>Cross-origin embedding</h2>
    <CrossOriginImageEmbed />
    <CrossOriginVideoEmbed />
  </div>
  <div>
    <h2>Cross-origin reads</h2>
    <CrossOriginFetch />
  </div>
</div>

</Transform>

<!--
[Cross-origin network access](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#cross-origin_network_access):

- Cross-origin **writes** are typically **allowed**. Examples are links, redirects, and form submissions. Some HTTP requests require preflight.
- Cross-origin **embedding** is typically **allowed**.
- Cross-origin **reads** are typically **disallowed**, but read access is often leaked by embedding.

[10 Free to Use CORS Proxies](https://nordicapis.com/10-free-to-use-cors-proxies/)
-->
