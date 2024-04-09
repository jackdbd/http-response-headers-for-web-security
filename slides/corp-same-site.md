---
# class: pl-5% pr-5% pt-5%
layout: two-cols
title: "Cross-Origin-Resource-Policy: same-site"
---
<h1>No <code>CORP</code></h1>

<Transform scale="0.9">

Cross-origin embedding works.

<CrossOriginImageEmbed src="https://www.w3schools.com/images/w3schools_green.jpg" />

</Transform>

::right::

<h1><code>CORP: same-site</code></h1>

<Transform scale="0.9">

Cross-origin embedding does not work.

<CrossOriginImageEmbed src="https://kitchen-sink-demos.vercel.app/api/corp?image_url=https://www.w3schools.com/images/w3schools_green.jpg" />

Open Chrome DevTools.

In the `Console` you should see this error:

<div class="bg-red-200">
❌ <code class="bg-red-200!">net::ERR_BLOCKED_BY_RESPONSE.NotSameSite</code>
</div>

In the `Network` tab, among the `Img` requests, you should see this `Status`:

```txt
(blocked:NotSameSite)
```

</Transform>

<!--
That `/api/corp` endpoint fetches the image, then serves it with this HTTP response header:

```txt
Cross-Origin-Resource-Policy: same-site
```

Click [this link](https://kitchen-sink-demos.vercel.app/api/corp?image_url=https://www.w3schools.com/images/w3schools_green.jpg) to make a GET to the resource.
-->
