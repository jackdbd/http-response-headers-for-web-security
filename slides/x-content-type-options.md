---
# layout: center
layout: two-cols
title: X-Content-Type-Options
---
<h1>Browsers (used to) sniff</h1>

<Transform scale="0.9">

Browser don't look at the file extension of a resource. Instead, they look at its [MIME type (aka media type)](https://www.iana.org/assignments/media-types/media-types.xhtml).

We can explicitly declare the MIME type of a resource:

```txt
Content-Type: text/html; charset=utf-8
```

Browsers not always trust us, and try to "sniff" the MIME type of a resource. This behavior is called <span class="color:accent">content sniffing</span>.

- Old browsers sniff if `Content-Type` is not set, or if it set (e.g. `text/plain` but the content looks like HTML → old browsers render it as HTML).
- Modern browsers sniff if `Content-Type` is not set.

Attackers can exploit the sniffing behavior of the browser: <span class="color:accent">MIME confusion attacks</span>.

</Transform>

::right::

<h1>Tell browsers to not sniff</h1>

<Transform scale="0.9">

It's easy to tell browsers not to sniff:

```txt
X-Content-Type-Options: nosniff
```

This not only prevents content sniffing, but also makes the [Cross Origin Read Blocking (CORB)](https://chromium.googlesource.com/chromium/src/+/main/services/network/cross_origin_read_blocking_explainer.md)* mechanism stricter in blocking cross-origin requests for JS, CSS, HTML, JSON, and XML (except SVG).

<p>*See <Anchor href="https://youtu.be/vfAHa5GBLio?si=sQ7PZFmASEtrHl9f&t=1102" text="Cross-origin fetches - HTTP 203" /> for an explanation on how CORB mitigates Spectre and Meltdown.</p>

</Transform>

<!--
Content sniffing is also called media type sniffing or MIME sniffing.

When the `Content-Type` header is not set, Chrome may analyze the first few bytes of the resource to determine its type. For example, if it encounters the `<!DOCTYPE html>` declaration at the beginning of a file, it may assume the file is an HTML document. It's basically a [Duck Test](https://en.wikipedia.org/wiki/Duck_test):

> If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.

Any [post-2017 browser](https://caniuse.com/?search=X-Content-Type-Options) supports `X-Content-Type-Options`.

- [MIME sniffing in browsers and the security implications](https://coalfire.com/the-coalfire-blog/mime-sniffing-in-browsers-and-the-security)
- [Is mime-sniffing still something to protect against with modern browsers (with X-Content-Type-Options)?](https://security.stackexchange.com/questions/256357/is-mime-sniffing-still-something-to-protect-against-with-modern-browsers-with-x)
- [MIME Sniffing](https://www.keycdn.com/support/what-is-mime-sniffing)

Cross-origin reads are disallowed by the same-origin policy, but resources are still read if you embed them. So the browser succesfully reads a cross-origin resource, then disallows it. Instead, with CORB a suspect cross-origin read is **immediately blocked** and does not enter the renderer process.

> In most browsers, it keeps such data out of untrusted script execution contexts. In browsers with Site Isolation, it can keep such data out of untrusted renderer processes entirely, helping even against side channel attacks.
-->
