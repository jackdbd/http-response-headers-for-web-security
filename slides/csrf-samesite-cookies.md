---
# layout: center
layout: two-cols
title: SameSite cookies
---
<h1><code>SameSite</code> cookies</h1>

<Transform scale="0.95">

`SameSite=Strict` and `SameSite=Lax` are an excellent defense against CSRF attacks.

```txt
Set-Cookie: sid=session-ID-here; path=/; SameSite=Strict
Set-Cookie: sid=session-ID-here; path=/; SameSite=Lax
```

Read [this article](https://scotthelme.co.uk/csrf-is-dead/) to understand which CSRF attacks are mitigated by `Strict` but not by `Lax`.

`SameSite=None` [does not mitigate](https://cwe.mitre.org/data/definitions/1275.html) CSRF attacks and [must always be used with Secure](https://web.dev/articles/samesite-cookies-explained#samesitenone_must_be_secure).

```text
Set-Cookie: widget_session=abc123; SameSite=None; Secure
```

Browser support for `SameSite` cookies is [very good](https://caniuse.com/?search=samesite).

<Citation
  citeHref="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#samesite-cookie-attribute"
  citeText="Cross-Site Request Forgery Prevention Cheat Sheet">
  <template v-slot:quote>
    <p slot="quote">
      This attribute <code>SameSite</code> should not replace a CSRF token. Instead, it should co-exist with that token to protect the user in a more robust way.
    </p>
  </template>
</Citation>

</Transform>

::right::

<h1>Examples</h1>

<Transform scale="0.95">

- <Anchor href="https://github.com/hapijs/cookie" text="@hapi/cookie" alt="@hapi/cookie" />
- <Anchor href="https://github.com/hapijs/yar" text="@hapi/yar" alt="@hapi/yar" />
- <Anchor href="https://github.com/fastify/fastify-cookie" text="@fastify/cookie" alt="@fastify/cookie" />

The default name for the cookie created by `@hapi/cookie` or `@fastify/cookie` is `sid`.

The default name for the cookie created by `@hapi/yar` is `session`.

Maybe give you application's session cookie a more descriptive name than `sid` or `session`. For example:

- `sessionid` (Instagram)
- `li_at` (LinkedIn)
- `d` (Slack)
- `_twitter_sess` (Twitter)

</Transform>

<!--
With a `SameSite=Lax` cookie a CSRF attack is still possible, but only when the vulnerable website treats an unsafe request (e.g. POST, PUT, PATCH, DELETE) as a safe request (e.g. GET, HEAD, OPTIONS). See here:
https://scotthelme.co.uk/csrf-is-dead/

When operating in Strict mode the browser will not send the cookie on any cross-origin request. The only problem you might come across is that it also won't send the cookie on top-level navigations (changing the URL in the address bar) either. If I presented a link to https://facebook.com and Facebook had SameSite cookies set to Strict mode, when you clicked that linked to open Facebook you wouldn't be logged in. Whether you were logged in already or not, opened it in a new tab, whatever you did, you wouldn't be logged in to Facebook when visiting from that link. This could be a little annoying and/or unexpected to users.

https://www.igvita.com/2016/08/26/stop-cross-site-timing-attacks-with-samesite-cookies/

https://owasp.org/www-community/SameSite

Another CSRF mitigation is to disallow simple content types like `text/plain`.
https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#disallowing-simple-content-types
-->
