---
class: pl-15% pr-15%
layout: center
title: Mixed content
---
<h1>Can you spot the problem?</h1>

<Transform scale="1">

Assume the web page is served over HTTPS.

```html
<script src="http://example.com/foo.js"></script>
```

Attempts to load a script (active content) over HTTP will be blocked and will generate <Anchor
  href="https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content"
  text="mixed content"
  alt="mixed content" /> errors.

<br>
<br>

```html
<img src="http://example.com/bar.jpg">
```

Attempts to load an image (passive/display content) over HTTP might* be allowed, but it will still generate mixed content warnings.

<div>
<br>
<span>*</span>Most browsers prevent mixed active content from loading, and some also block mixed display content.
</div>

</Transform>

<!--
An HTTPS page that includes content fetched using cleartext HTTP is called a mixed content page.

- [Mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content)
- [Fixing mixed content](https://web.dev/articles/fixing-mixed-content)
-->
