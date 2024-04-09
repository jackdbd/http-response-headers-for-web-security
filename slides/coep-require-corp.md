---
# class: pl-5% pr-5% pt-5%
layout: two-cols
title: "Cross-Origin-Embedder-Policy: require-corp"
---
<h1><code>COEP: require-corp</code></h1>

<Transform scale="0.85">

The `<iframe>` below embeds an HTML document which is served with this header:

```txt
Cross-Origin-Embedder-Policy: require-corp
```

<div class="flex">
  <iframe src="https://kitchen-sink-demos.vercel.app/api/coep" height="400" width="100%" frameborder="0" title="COEP Example"></iframe>
</div>

</Transform>

::right::

<h1>Explanation</h1>

<Transform scale="0.85">

- The image is served with the header `Cross-Origin-Resource-Policy`, so it will show up.
- The video is not served with the header `Cross-Origin-Resource-Policy`, so it will not show up <span class="color:accent">because the HTML document that embeds the video</span> was served with `COEP: require-corp`.

Open Chrome DevTools.

In the `Console` you should see this error:

<div class="bg-red-200">
❌ <code class="bg-red-200! break-all">net::ERR_BLOCKED_BY_RESPONSE.NotSameOriginAfterDefaultedToSameOriginByCoep 206 (Partial Content)</code>
</div>

In the `Network` tab, among the `Media` requests, you should see this `Status`:

```txt
(blocked:NotSameOriginAfterDefaultedToSameOriginByCoep)
```

</Transform>

<!--
The video would show up if either:

- it was embedded in a HTML document served with no `Cross-Origin-Embedder-Policy` header (in fact the video does show up in the slide about the same-origin policy).
- it was embedded in a HTML document served with `Cross-Origin-Embedder-Policy: unsafe-none` or `Cross-Origin-Embedder-Policy: credentialless`.
-->