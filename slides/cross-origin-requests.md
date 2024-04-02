---
class: pt-10%
layout: center
title: Cross-origin requests
---
<h1>Cross-origin requests</h1>

<Transform scale="0.9">

Let's say this page is hosted at `https://www.foo.com`. Will the image show up (assuming it exists)?

```html
<body>
  <img src="https://www.bar.com/image.jpg">
</body>
```

What about now?

```html
<body>
  <div id="container"></div>
  <script>
  document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById("container")
    try {
      const response = await fetch("https://www.bar.com/image.jpg") // cross-origin fetch
      const blob = await response.blob()
      const img = document.createElement("img")
      img.src = URL.createObjectURL(blob)
      container.appendChild(img)
    } catch(err) {
      console.error(err)
    }
  })
  </script>
</body>
```

</Transform>

<!--
Cross-origin embedding is typically allowed. For example:

- CSS applied with `<link rel="stylesheet" href="…">`
- Images displayed by `<img>`
- Media played by `<video>` and `<audio>`
- Fonts applied with `@font-face`

Cross-origin reads are typically disallowed. For example retrieving binary data from a cross-origin image with JS.

See [Cross-origin network access](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#cross-origin_network_access).
-->