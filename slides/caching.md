---
# class: pl-15% pr-15%
layout: default
title: Caching
---
<h1>Caching</h1>

<Transform scale="0.95">

A misconfiguration of one or more headers that influence caching can lead to [web cache poisoning](https://portswigger.net/web-security/web-cache-poisoning).

[CWE-525 Use of Web Browser Cache Containing Sensitive Information](https://cwe.mitre.org/data/definitions/525.html)

To understand how web cache poisoning vulnerabilities arise, it is important to have a basic understanding of how web caches work.

See [A Tale of Four Caches](https://calendar.perfplanet.com/2016/a-tale-of-four-caches/).

For example, use `no-store` to avoid caching sensitive information:

```txt
Cache-Control: no-store
```

When CORS are misconfigured and `Vary: Origin` hasn't been specified, the response may be stored in the browser's cache.
[Exploiting CORS misconfigurations for Bitcoins and bounties](https://portswigger.net/research/exploiting-cors-misconfigurations-for-bitcoins-and-bounties)

Use the `Clear-Side-Data` header to purge browsing data (cookies, storage, cache).

As Jake Archibald suggests in [What happens when packages go bad?](https://jakearchibald.com/2018/when-packages-go-bad/#recovering-after-a-successful-hack), an `/emergency` URL could serve a `Clear-Site-Data: *` header, deleting everything stored & cached by the origin, then redirect to `/`.

</Transform>

<!--
Vary determines which request header/s the browser should consider to decide whether to serve a cached response or not.

Sending a Clear-Side-Data header is like taking all of your users' computers, opening Chrome DevTools and clearing cookies, web storage and cache.
Clear-Side-Data is [not supported by Firefox, nor by Safari](https://caniuse.com/?search=Clear-Site-Data).

Without a service worker, the user might continue to get the hacked HTML from their HTTP cache for a long time, but the service worker gives us a bit more control. When the user visits Squoosh, the browser will check for updates to the service worker in the background. Our new, unhacked service worker is in a good position to look at the current state of things and decide if the user is running the hacked version. If that's the case, we need to get rid of anything the hacked version may have compromised. The best way to do that is to burn it all down & start again.

The new service worker could dump all caches, unregister itself, and navigate all clients to /emergency. This URL would serve a Clear-Site-Data: * header, deleting everything stored & cached by the origin, then redirect to /.
-->
