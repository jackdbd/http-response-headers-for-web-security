---
layout: default
---
<h1>CORS misconfiguration</h1>

<Transform scale="0.95">

Probably the most **insecure** CORS configuration you can have:

```txt
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Headers: *
```

This was actually suggested on Stack Overflow: https://stackoverflow.com/a/75997573/3036129

No wait, this is worse:

```txt
Access-Control-Allow-Origin: null
```

https://jakearchibald.com/2021/cors/

</Transform>

<!--
Here is why `Access-Control-Allow-Origin: null` is worse.
https://portswigger.net/research/exploiting-cors-misconfigurations-for-bitcoins-and-bounties
https://www.shodan.io/search?query=%22Access-Control-Allow-Origin%3A+null%22
-->
