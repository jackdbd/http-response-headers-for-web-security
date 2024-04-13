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

<div class="flex" style="height: 33vh;">
  <iframe src="https://kitchen-sink-demos.vercel.app/api/coep" height="100%" width="100%" frameborder="0" title="COEP Example"></iframe>
</div>

The `<iframe>` is not the problem. If you <Anchor href="https://kitchen-sink-demos.vercel.app/api/coep" text="visit the page directly" /> you will <span class="color:accent">not</span> see the video either.

</Transform>

::right::

<h1>Explanation</h1>

<Transform scale="0.85">

The HTML document that embeds the image and the video is served with `COEP: require-corp`.

- The image is served with the header `Cross-Origin-Resource-Policy`, so it shows up.
- The video is not served with the header `Cross-Origin-Resource-Policy`, so it does not show up.

<!-- <span class="color:accent">because the HTML document that embeds the video</span> was served with `COEP: require-corp`. -->

Open Chrome DevTools.

In the `Console` you should see this error:

<div class="bg-red-200">
❌ <code class="bg-red-200! break-all">net::ERR_BLOCKED_BY_RESPONSE.NotSameOriginAfterDefaultedToSameOriginByCoep</code>
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

The stylesheet mvp.css is also blocked by `COEP: require-corp`.

[How to enable COOP and COEP reports on Report URI](https://report-uri.com/products/coep_reports)
-->
