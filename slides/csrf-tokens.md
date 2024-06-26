---
layout: two-cols
title: Anti-forgery tokens
---
<h1>Anti-forgery tokens</h1>

<Transform scale="0.95">

The use of an anti-forgery tokens (aka request verification tokens) is the recommended, most widespread solution to mitigate CSRF attacks.

It can be achieved either with state (synchronizer token pattern) or stateless (encrypted or hashed based token pattern).

Anti-forgery tokens prevent CSRF because without a valid token, the attacker cannot create a valid request to the backend server.

<Citation
  citeHref="https://owasp.org/www-community/Anti_CRSF_Tokens_ASP-NET"
  citeText="Anti CSRF Tokens ASP.NET">
  <template v-slot:quote>
    <p slot="quote">
      The standard frequency of token generation is per-session, so make sure your sessions have a reasonable/configurable time-out. It is possible to issue new tokens on a per-request basis. However, the added protection may be insignificant.
    </p>
  </template>
</Citation>

</Transform>

::right::

<h1>Examples</h1>

<Transform scale="0.95">

- <Anchor href="https://github.com/hapijs/crumb" text="crumb (Hapi)" alt="crumb" />
- <Anchor href="https://github.com/fastify/csrf-protection" text="csrf-protection (Fastify)" alt="csrf-protection" />
- <Anchor href="https://github.com/ring-clojure/ring-anti-forgery" text="ring-anti-forgery (Ring)" alt="ring-anti-forgery" />

Backend generates an anti-forgery token **per-session**.

```html
<input class="csrf-token" type="hidden"
  name="__anti-forgery-token"
  value="gI4w1EuorXBhF/D3tcwk0hZtzepHqu+vjsyPv46G4ngds6HEYTporAgM1vYluTUFmDOOUMJHI9TWqtAu">
```

Different session → different token.

```html
<input class="csrf-token" type="hidden"
  name="__anti-forgery-token"
  value="tPr7VCcPIMixfQQsQfjSSzMLgjr3p6wALIYKRhgq6Dw7c/3BTV3ooZ6sRHKUW6LrYxlA8JmjOzWiYtNA">
```

</Transform>

<!--
Anti-CSRF tokens prevent CSRF attacks by requiring the existence of a secret, unique, and unpredictable token on all destructive changes. These tokens can be set for an entire user session, rotated on a regular basis, or be created uniquely for each request.

CSRF tokens should be:

1. Unique per user session
2. Secret
3. Unpredictable (large random value generated by a secure method)
-->
