---
# class: pl-5% pr-5% pt-5%
layout: two-cols
title: Same-origin policy and CORS 3
---
<h1>CORS: public resources</h1>

<Transform scale="0.95">

If a resource hosted on an origin we control <span class="color:accent">does not contain private data</span>, and we want to <span class="color:accent">share</span> it with the world, we can tell browsers to relax the same-origin policy for all origins.

```txt
Access-Control-Allow-Origin: *
```

</Transform>

::right::

<h1>CORS: sensitive resources</h1>

<Transform scale="0.95">

If a resource <span class="color:accent">contains private data</span>, we can either...

...specify a <span class="color:accent">single origin</span> we want to allow:

```txt
Access-Control-Allow-Origin: https://your-origin.com
```

...generate a `Access-Control-Allow-Origin` header <span class="color:accent">dynamically</span> and add a `Vary` header:

```txt
Access-Control-Allow-Origin: <generated-by-our-server>
Vary: Origin
```

See also:

- [How to win at CORS](https://jakearchibald.com/2021/cors/#is-it-safe-to-expose-resources-via-cors)
- [Vary: origin response header and CORS exploitation](https://security.stackexchange.com/questions/151590/vary-origin-response-header-and-cors-exploitation)
- [Exploiting CORS misconfigurations for Bitcoins and bounties](https://portswigger.net/research/exploiting-cors-misconfigurations-for-bitcoins-and-bounties)

</Transform>

<!--
The cross-origin resource sharing specification provides controlled relaxation of the same-origin policy for HTTP requests to one website domain from another through the use of a collection of HTTP headers. If you set `Access-Control-Allow-Origin: *`, you are making the same-origin policy laxer for ALL origins.

`Access-Control-Allow-Origin` does **not** allow to specify a list of origins.

When CORS are misconfigured and `Vary: Origin` hasn't been specified, the response may be stored in the browser's cache.

This terrifyingly **insecure** CORS configuration was actually [suggested on Stack Overflow](https://stackoverflow.com/a/75997573/3036129).

```txt
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Headers: *
```

But we can even make it worse by setting this:

```txt
Access-Control-Allow-Origin: null
```

- [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
- [CORS and the Access-Control-Allow-Origin response header](https://portswigger.net/web-security/cors/access-control-allow-origin)
- [Exploiting CORS misconfigurations for Bitcoins and bounties](https://portswigger.net/research/exploiting-cors-misconfigurations-for-bitcoins-and-bounties)
-->
