---
# class: pl-15% pr-15%
layout: center
title: Learn CSP the hard way
---
<h1>Learn CSP the hard way</h1>

<Transform scale="1">

The `default-src` [CSP directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) serves as a fallback for the other [CSP fetch directives](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_directive).

Set it to `'none'` and your site <span class="color:accent">will</span> break:

```txt
Content-Security-Policy: default-src 'none';
```

The good news is that you will know <span class="color:accent">exactly</span> why it broke. In DevTools you will see errors like these ones:

- `Refused to connect to '<URL>' because it violates the following CSP directive:...`
- `Refused to load the script 'foo.js' because it violates...`
- `Refused to apply inline style because it violates...`
- `Refused to load the font 'foo.woff2' because it violates...`

</Transform>

<!--
https://content-security-policy.com/examples/

https://developers.cloudflare.com/pages/configuration/headers/
https://docs.netlify.com/routing/headers/
https://vercel.com/docs/projects/project-configuration#headers

https://developers.cloudflare.com/fundamentals/reference/policies-compliances/content-security-policies/

https://github.com/bhaveshk90/Content-Security-Policy-CSP-Bypass-Techniques
-->
