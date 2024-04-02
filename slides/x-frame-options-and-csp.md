---
# layout: center
layout: two-cols
title: X-Frame-Options and frame-ancestors
---
<h1>X-Frame-Options and frame-ancestors</h1>

<Transform scale="0.9">

The decoy web page <span class="color:accent">"re-dresses"</span> the UI and <span class="color:accent">hijacks</span> the user's clicks.

This attack is called [clickjacking, aka UI redressing](https://portswigger.net/web-security/clickjacking).

<p>Let's say we are the owners of <code class="link-decoration-none">https://mybank/Transfer.aspx</code>.</p>

How do we prevent <span class="color:accent">other websites</span> from embedding <span class="color:accent">our website's content</span> into their web pages?

### Yesterday

```txt
# prevents any domain from framing our content
X-Frame-Options: DENY

# allows our site to frame its content
X-Frame-Options: SAMEORIGIN
```

</Transform>

::right::

<Transform scale="0.9">

### Today

```txt
# prevents any domain from framing our content
Content-Security-Policy: frame-ancestors 'none';

# allows our site to frame its content
Content-Security-Policy: frame-ancestors 'self';
```

The `frame-ancestors` CSP directive offers more flexibility than the `X-Frame-Options` header:

```txt
# allows our content to be framed by these domains
Content-Security-Policy: frame-ancestors 
  https://legit-site.org 
  https://another-legit-site.com 
  https://*.legit-site.it
```

The above configuration allows `legit-site.org`, `another-legit-site.com`, `*.legit-site.it` to embed our content in their `<iframe>`, `<embed>`, and `<object>`.

</Transform>

<!--
With "content" we mean: a HTML document, a video, an image, a PDF file, etc.

The X-Frame-Options HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a <frame>, <iframe>, <embed> or <object>. Sites can use this to avoid clickjacking (aka UI redressing) attacks, by ensuring that their content is not embedded into other sites.

https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html

<iframe>, <embed> and <object> elements. <iframe>s are for embedding other web pages, and the other two allow you to embed external resources such as PDF files.

https://stackoverflow.com/questions/16660559/difference-between-iframe-embed-and-object-elements

https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies
-->
