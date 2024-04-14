---
# class: pl-15% pr-15%
layout: center
title: Should we redirect to HTTPS?
---
<h1>Should <span class="color:accent">we</span> redirect to HTTPS?</h1>

<Transform scale="1">

Should we configure our <span class="color:accent">web server</span> (e.g. nginx, Caddy) to redirect HTTP to HTTPS?

No, because this leaves us vulnerable to [SSL stripping](https://en.wikipedia.org/wiki/SSL_stripping) attacks (a type of man-in-the-middle attack).

<Citation
  citeHref="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security"
  citeText="Strict-Transport-Security">
  <template v-slot:quote>
    <p slot="quote">
      If a website accepts a connection through HTTP and redirects to HTTPS, visitors may initially communicate with the non-encrypted version of the site before being redirected, if, for example, the visitor types <code>http://www.foo.com/</code> or even just <code>foo.com</code>. This creates an opportunity for a man-in-the-middle attack. The redirect could be exploited to direct visitors to a malicious site instead of the secure version of the original site.
    </p>
  </template>
</Citation>

Insted, we should let <span class="color:accent">the browser</span> redirect to HTTPS for us.

<Citation
  citeHref="https://https.cio.gov/hsts/"
  citeText="The HTTPS-Only Standard">
  <template v-slot:quote>
    <p slot="quote">
      HSTS exists to remove the need for the common, insecure practice of redirecting users from <code>http://</code> to <code>https://</code> URLs.
    </p>
  </template>
</Citation>

</Transform>

<!--
[Betteridge's law of headlines](https://en.wikipedia.org/wiki/Betteridge%27s_law_of_headlines): Any headline that ends in a question mark can be answered by the word no.

In 2009, Moxie Marlinspike described [SSL stripping](https://en.wikipedia.org/wiki/Moxie_Marlinspike#SSL_stripping), a type of man-in-the-middle attack in which a network attacker could prevent a web browser from upgrading to an SSL connection in a way that would likely go unnoticed by a user.

- [What are SSL Stripping Attacks? (keyfactor.com)](https://www.keyfactor.com/blog/what-are-ssl-stripping-attacks/)
- [What Are SSL Stripping Attacks? (venafi.com)](https://venafi.com/blog/what-are-ssl-stripping-attacks/)
- [Marlinspike presentation on SSL stripping at the Black Hat security conference in 2009](https://www.blackhat.com/presentations/bh-dc-09/Marlinspike/BlackHat-DC-09-Marlinspike-Defeating-SSL.pdf)

Every internet connection starts out as insecure. Users need to visit a website with the HTTP version before they can establish authentication to move over to the secure HTTPS version. These steps are intended to ensure privacy and verify the legitimacy of those involved in the connection.

Hackers can “strip” the SSL connection by inserting themselves in this process. When they do so, they act as a man in the middle by establishing their own HTTPS connection with the website (posing as the user) and maintaining the HTTP connection with the user (posing as the website).
-->
