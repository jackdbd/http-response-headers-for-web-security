---
class: pl-15% pr-15%
layout: center
---
<h1>Referrer-Policy</h1>

<Transform scale="0.95">

The `Referer` header can contain <span class="color:accent">origin</span>, <span class="color:accent">path</span>, and <span class="color:accent">querystring</span>.

The `Referrer-Policy` controls how much information should be included in the `Referer` header when making same-origin requests and cross-origin requests.

When no policy is set, the browser's default is used.

This is the [default in most browsers](https://web.dev/articles/referrer-best-practices#default_referrer_policies_in_browsers):

```txt
Referrer-Policy: strict-origin-when-cross-origin
```

And this is what it means:

- same-origin request: send everything, namely origin, path, and querystring.
- cross-origin request:
  - HTTPS→HTTPS: send just the origin.
  - HTTPS→HTTP: don't send the `Referer` header at all.

</Transform>

<!--
Referer logging is a form of tracking. Referer logging is used to allow websites and web servers to identify where people are visiting them from, for promotional or statistical purposes.

For example:

- request from subreddit A to subreddit B: same origin, send everything.
- request from reddit to twitter: same just the origin.

- [Referrer-Policy on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)
- [Referer header: Privacy and security concerns](https://developer.mozilla.org/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
- [HTTP Headers - The State of the Web](https://youtu.be/riPSW5P127M?si=_dRFGRBC0Q8JEiV-&t=1062)

The original header name Referer is a misspelling of the word "referrer". The Referrer-Policy header does not share this misspelling.
-->
