---
# class: pl-5% pr-5% pt-5%
layout: two-cols
title: "Cross-Origin-Opener-Policy: same-origin"
---
<h1><code>COOP: same-origin</code></h1>

<Transform scale="0.8">

All `<a>` below have <code>rel="opener"</code>

<b>1.</b> Click <a href="https://www.giacomodebidda.com/" rel="opener" target="_blank">this link</a> to open a <span class="color:accent">site A</span> in a new tab.

<b>2.</b> In the new tab, open DevTools, check that `window.opener` is **not** `null`, then execute this code.

<!-- in development: -->
<!-- ```js
window.opener.postMessage(
  'hello from another origin', // message
  'http://localhost:3030') // origin of these slides
``` -->

<!-- in production: -->
```js
window.opener.postMessage(
  { foo: 'bar', num: 123 }, // message to send
  'https://http-response-headers-for-web-security.vercel.app') // origin of these slides
```

<b>3.</b> The message sent should appear on the right.

<b>4.</b> Click <a href="https://kitchen-sink-demos.vercel.app/" rel="opener" target="_blank">this link</a> to open a <span class="color:accent">site B</span> in a new tab.

<b>5.</b> The message sent should appear on the right.

<b>6.</b> Click <a href="https://kitchen-sink-demos.vercel.app/api/coop" rel="opener" target="_blank">this link</a> to open <span class="color:accent">site C</span> in a new tab.

<b>7.</b> You won't be able to send any message from <span class="color:accent">site C</span> since `window.opener` is `null` because of this:

```txt
Cross-Origin-Opener-Policy: same-origin
```

</Transform>

::right::

<h1>Messages</h1>

<Transform scale="0.85">

<MessageLog ignore-same-origin-messages />
<!-- <MessageLog /> -->

</Transform>

<!--
The Window interface's `opener` property returns a reference to the window that opened the window, either with `open()`, or by navigating a link with a `target` attribute. In other words, if window A opens window B, B.opener returns A.

Browsers implicitly set `rel=noopener` for any `target=_blank` link. See [here](https://mathiasbynens.github.io/rel-noopener/).

Even if the tab of site A (or site B) has a reference to the Window that opened it (i.e. the Window of the slides), site A (or site B) cannot access `window.opener.document` or `window.opener.origin` because of the same-origin policy. However, site A (or site B) can send messages to the origin of the slides using `window.opener.postMessage()` [as mentioned here](https://stackoverflow.com/a/25098153/3036129).

From site C we can't use `window.opener.postMessage()` because `window.opener` is `null` due to the `Cross-Origin-Opener-Policy: same-origin` header.

From site A or site B (but not site C) we could also do something like this:

```
window.opener.location.replace('https://pranx.com/hacker/')
```

However, this will not work in any case:

```
window.opener.navigation.navigate('https://pranx.com/hacker/')
```

This will not work either:

```
window.opener.open('https://pranx.com/hacker/')
```

- Windows opened because of links with a target of _blank don't get an opener, unless explicitly requested with rel=opener.
- Having a Cross-Origin-Opener-Policy header with a value of same-origin prevents setting opener. Since the new window is loaded in a different browsing context, it won't have a reference to the opening window.
- [`opener` property](https://developer.mozilla.org/en-US/docs/Web/API/Window/opener)
- [HTML `rel=opener`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel#opener)

Why do we need site isolation? It's explained in the document [Post-Spectre Threat Model Re-Think](https://chromium.googlesource.com/chromium/src/+/master/docs/security/side-channel-threat-model.md). Here's an excerpt:

> we definitely need some sort of ‘privileged/PII data isolation’ guarantees as well, for example ensuring that password and credit card info are not speculatively loaded into a renderer process without user consent. 
-->