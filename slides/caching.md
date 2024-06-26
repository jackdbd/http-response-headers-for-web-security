---
layout: two-cols
title: Caching
---
<h1>Caching guidelines</h1>

<Transform scale="0.9">

Caching is important not just for <span class="color:accent">performance</span>, but also for <span class="color:accent">privacy</span> and <span class="color:accent">security</span>.

It's important to know how the [many browser caches](https://calendar.perfplanet.com/2016/a-tale-of-four-caches/) work and [how to configure the Cache-Control header](https://csswizardry.com/2019/03/cache-control-for-civilians/).

CDNs (e.g. AWS CloudFront, GCP Media CDN) and object storages (e.g. AWS S3, GCP Cloud Storage, Cloudflare R2) define their own caching behavior and set different `Cache-control` directives for different resources. Read the docs.

Caching is **not just** `Cache-Control`, but also `ETag`, `Vary`, etc.

A misconfiguration of caching headers can leave you vulnerable to [web cache poisoning](https://portswigger.net/web-security/web-cache-poisoning).

Think about an appropriate caching policy for <span class="color:accent">each page</span> and <span class="color:accent">each resource</span> of your application.

</Transform>

::right::

<h1>Security & privacy tips</h1>

<Transform scale="0.9">

Use `no-store` to avoid caching [sensitive information](https://cwe.mitre.org/data/definitions/525.html).

```txt
Cache-Control: no-store
```

Send a `Clear-Site-Data` response header to tell the browser to purge browsing data (cookies, storage, cache).

As Jake Archibald suggests in [What happens when packages go bad?](https://jakearchibald.com/2018/when-packages-go-bad/#recovering-after-a-successful-hack), an `/emergency` URL could serve a `Clear-Site-Data: *` header, deleting everything stored & cached by the origin, then redirect to `/`.

Unfortunately, `Clear-Site-Data` is [available only in Chromium-based browsers](https://caniuse.com/?search=clear-site-data).

</Transform>

<!--
Vary determines which request header/s the browser should consider to decide whether to serve a cached response or not.

Sending a Clear-Site-Data header is like taking all of your users' computers, opening Chrome DevTools and clearing cookies, web storage and cache.
Clear-Site-Data is [not supported by Firefox, nor by Safari](https://caniuse.com/?search=Clear-Site-Data).

Without a service worker, the user might continue to get the hacked HTML from their HTTP cache for a long time, but the service worker gives us a bit more control. When the user visits Squoosh, the browser will check for updates to the service worker in the background. Our new, unhacked service worker is in a good position to look at the current state of things and decide if the user is running the hacked version. If that's the case, we need to get rid of anything the hacked version may have compromised. The best way to do that is to burn it all down & start again.

The new service worker could dump all caches, unregister itself, and navigate all clients to /emergency. This URL would serve a Clear-Site-Data: * header, deleting everything stored & cached by the origin, then redirect to /.

Disable caching for response that contain sensitive data.
Don't store sensitive data unnecessarily. Discard it as soon as possible or use PCI DSS compliant tokenization or even truncation. Data that is not retained cannot be stolen.
-->
