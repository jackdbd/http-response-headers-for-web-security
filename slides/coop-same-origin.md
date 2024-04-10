---
# class: pl-5% pr-5% pt-5%
layout: two-cols
title: "Cross-Origin-Opener-Policy: same-origin"
---
<h1><code>COOP: same-origin</code></h1>

<Transform scale="0.85">

```txt
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

<!-- https://developer.mozilla.org/en-US/docs/Web/API/Window/open -->

<!-- this opens URL in new window -->
<CoopSameOriginDemo features="width=640,height=480" target="Window Left" />

<!-- this opens URL in new tab -->
<!-- <CoopSameOriginDemo target="_blank" /> -->

<!-- this opens URL in new tab -->
<!-- <CoopSameOriginDemo /> -->

<!-- this navigates to URL -->
<!-- <CoopSameOriginDemo target="_self" /> -->

</Transform>

::right::

<h1>Explanation</h1>

<Transform scale="0.85">

todo

<!-- <CoopSameOriginDemo target="_parent" /> -->

<!-- <CoopSameOriginDemo target="_top" /> -->

<!-- <CoopSameOriginDemo url="https://giacomodebidda.com/" /> -->

<!-- <CoopSameOriginDemo features="width=640,height=480" target="Window Right" url="https://giacomodebidda.com/" /> -->

</Transform>

<!--
TODO: this doesn't seem to work
-->