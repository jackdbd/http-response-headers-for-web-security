---
# class: pl-5% pr-5% pt-5%
layout: two-cols
title: Access-Control-Allow-Origin
---
<h1 class="font-size-6!">No <code>Access-Control-Allow-Origin</code></h1>

<Transform scale="0.9">

<p>Image served by <code>www.w3schools.com</code></p>

<CrossOriginFetch src="https://www.w3schools.com/images/w3schools_green.jpg" />

<CrossOriginFetch src="https://www.w3schools.com/images/w3schools_green.jpg" no-cors />

</Transform>

::right::

<h1 class="font-size-6!"><code>Access-Control-Allow-Origin: *</code></h1>

<Transform scale="0.9">

<p>Image served by <code>corsproxy.io</code></p>
<CrossOriginFetch src="https://corsproxy.io/?https://www.w3schools.com/images/w3schools_green.jpg" />

<CrossOriginFetch src="https://corsproxy.io/?https://www.w3schools.com/images/w3schools_green.jpg" no-cors />

</Transform>

<!--
As [this answer](https://stackoverflow.com/a/43268098/3036129) explains, `mode: 'no-cors'` won't magically make things work.

I think `mode: 'no-cors'` is only useful when you need to make **simple requests** (i.e. requests that do not trigger a preflight request, for example a cross-origin `GET`) to a different origin, and you don't need to access the response body or headers.

I think that cross-origin requests that can access resources because the server sends `Access-Control-Allow-Origin: *`, with `mode: 'no-cors'` would no longer be able to access those resources.
-->
