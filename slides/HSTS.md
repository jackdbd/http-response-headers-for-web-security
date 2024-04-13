---
# class: pl-15% pr-15%
layout: center
title: HTTP Strict Transport Security (HSTS)
---
<h1>HTTP Strict Transport Security (HSTS)</h1>

<Transform scale="1">

```txt
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

This configuration tells the browser to:

<ol>
  <li><span class=color:accent>Connect</span> to the site over HTTPS, even if the scheme chosen was HTTP.</li>
  <li><span class=color:accent>Upgrade</span> all requests to HTTPS.</li>
  <li>Treat TLS and certificate-related errors more strictly: <span class=color:accent>users will no longer be able to bypass the error page</span>.</li>
  <li><span class=color:accent>Preload</span> the HSTS configuration automatically*.</li>
  <li>Do all of the above for <span class="color:accent">two years</span>, on <span class=color:accent>all subdomains</span>.</li>
</ol>

<!-- 1. Connect to the site over HTTPS, even if the scheme chosen was HTTP.
1. Upgrade all requests to HTTPS. This mitigates [downgrade attacks](https://en.wikipedia.org/wiki/Downgrade_attack) and prevents [mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content) issues.
1. Treat TLS and certificate-related errors more strictly: users will no longer be able to bypass the error page.
1. Preload the HSTS configuration automatically*.
1. Do all of the above for two years, on all subdomains. -->

<span>*</span>You must first submit the form on [hstspreload.org](https://hstspreload.org) to ask Chrome to include your domain in the HSTS preload list. The approval <Anchor
  href="https://www.reddit.com/r/AskNetsec/comments/6mo4lt/how_long_to_get_onto_the_hsts_preload_list/"
  text="tipically takes two months"
  alt="approval in the HSTS preload list" />.

<Citation
  citeHref="https://martinfowler.com/articles/web-security-basics.html"
  citeText="The Basics of Web Application Security">
  <template v-slot:quote>
    <p slot="quote">
      Once HSTS is enabled, it cannot be disabled until the period specified in the header elapses. It is advisable to make sure HTTPS is working for all content before enabling it for your site. Removing a domain from the HSTS Preload List will take even longer. The decision to add your website to the Preload List is not one that should be taken lightly.
    </p>
  </template>
</Citation>

</Transform>

<!--
HTTP Strict Transport Security (HSTS) is a simple and widely supported standard to protect visitors by ensuring that their browsers always connect to a website over HTTPS. HSTS exists to remove the need for the common, insecure practice of redirecting users from http:// to https:// URLs.
https://https.cio.gov/hsts/

The HTTP response status code 301 Moved Permanently is commonly used to upgrade plaintext connections to HTTPS and to permanently redirect duplicate or old content to new pages. As it's part of the HTTP protocol, it is supported by more browsers than HSTS. But 301s on their own are not sufficient to prevent man-in-the-middle attacks.
https://help.upguard.com/en/articles/4581202-what-s-the-difference-between-using-hsts-and-doing-a-301-redirect

If a website accepts a connection through HTTP and redirects to HTTPS, visitors may initially communicate with the non-encrypted version of the site before being redirected, if, for example, the visitor types http://www.foo.com/ or even just foo.com. This creates an opportunity for a man-in-the-middle attack. The redirect could be exploited to direct visitors to a malicious site instead of the secure version of the original site.

A minimum max-age of 12 months is required for inclusion in HSTS preload lists.

Basically we use HSTS to enforce HTTPS on all resources, on all subdomains.

[HTTP Strict Transport Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
-->
