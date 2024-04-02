---
class: pl-15% pr-15% pt-10%
layout: center
title: XSS proofs of concept to spot XSS vulnerabilities
---
<h1>Is our site vulnerable to XSS?</h1>

<Transform scale="0.95">

We can check most kinds of XSS vulnerabilities by injecting a payload that causes the browser to execute some arbitrary JavaScript. This is called <Anchor href="https://portswigger.net/web-security/cross-site-scripting#xss-proof-of-concept" text="XSS proof of concept" alt="XSS proof of concept" />.

<b>1.</b> Enter this snippet into an `<input>` (e.g. search bar, email field, etc). If the alert shows up **immediately**, the website is vulnerable to <span class="color:accent">reflected XSS</span>.

```html
<script>alert('hi')</script>
```

<b>2.</b> Enter this snippet into a comment box (e.g. a `<textarea>`). If this snippet is stored as it is, the alert will show up **every time the page is visited**. This means the website is vulnerable to <span class="color:accent">stored XSS (aka persistent or second-order XSS)</span>.

```html
<script>alert('hi')</script>
```

<b>3.</b> Open Chrome DevTools and execute this snippet in the console. If the alert shows up, the website is vulnerable to <span class="color:accent">DOM-based XSS</span>.

```js
const script = document.createElement("script")
script.innerText = "alert('hi')"
document.head.appendChild(script)
```

In some cases we need a complex XSS proof of concept to spot a XSS vulnerability.

</Transform>

<!--
TODO: add this XSS filter evasion cheat sheet.
https://cheatsheetseries.owasp.org/cheatsheets/XSS_Filter_Evasion_Cheat_Sheet.html

Cross-Site Scripting (XSS) is a misnomer. Originally this term was derived from early versions of the attack that were primarily focused on stealing data cross-site. Since then, the term has widened to include injection of basically any content.

An application receives data from an untrusted source and includes that data within its later HTTP responses. E.g. write this in a comment box.

XSS attacks are serious and can lead to account impersonation, observing user behaviour, loading external content, stealing sensitive data, and more.

https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
-->
