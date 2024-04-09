---
# class: pl-15% pr-15%
layout: center
title: How secure are the top 1 million sites?
---
<h1>How secure are the top 1 million sites?</h1>

<Transform scale="0.95">

Scott Helme [crawls the top 1 million sites each month](https://scotthelme.co.uk/tag/crawler-report/) and uses [Security Headers](https://securityheaders.com/) to give them a grade.

Here are the grades from the February 2024 report:

- <b style="color: #5DCC4F;">A+</b> 4,544 (~0.59%)
- <b style="color: #51AF44;">A</b> 43,012 (~5.57%)
- <b style="color: #FFD242;">B</b> 34,871 (~4.52%)
- <b style="color: #FFD242;">C</b> 34,440 (~4.47%)
- <b style="color: #FFA500;">D</b> 151,558 (~19.63%)
- <b style="color: #FFA500;">E</b> 21,550 (~2.79%)
- <b style="color: #FF0000;">F</b> 479,586 (~62.13%)
- <b style="color: #808080;">R</b> 112 (~0.01%)*
- Total = 771,673**

<p>*The R grade means the site responded with a redirect.</p>
<p>**I couldn't find any info on why the total is less than 1 million.</p>

</Transform>

<!--
Scott Helme, a security researcher from the UK, is the creator of Report URI and Security Headers.

TODO: ask Scott Helme on Twitter/LinkedIn why total is < 1 million.

**Security Headers:**

- To get an A+ grade your site needs to issue all the HTTP response headers that we check for. This indicates a high level of commitment to improving security for your visitors.
- The R grade means the site responded with a redirect and you should follow the redirects using the link provided.
- [Security Headers API docs](https://securityheaders.com/api/docs/)
- I couldn't find any info on why this number is not 1 million. I guess either the crawler or the Security Headers API encountered an error.
-->
