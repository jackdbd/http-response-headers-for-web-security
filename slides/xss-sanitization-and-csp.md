---
class: pl-15% pr-15%
layout: center
title: How do we mitigate XSS?
---
<h1>How do we mitigate XSS?</h1>

<Transform scale="1">

<b>1.</b> Use a <span class="color:accent">modern web framework</span> that has templating, auto-escaping, etc.

<Citation
  citeHref="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#framework-security"
  citeText="Cross Site Scripting Prevention Cheat Sheet (Framework Security)">
  <template v-slot:quote>
    <p slot="quote">
      When you use a modern web framework, you need to know how your framework prevents XSS and where it has gaps. There will be times where you need to do something outside the protection provided by your framework, which means that Output Encoding and HTML Sanitization can be critical.
    </p>
  </template>
</Citation>

<b>2.</b> Leave <span class="color:accent">output encoding / escaping</span> to your framework or use a popular library.

<b>3.</b> <span class="color:accent">Sanitize HTML</span> with a library like <Anchor href="https://github.com/cure53/DOMPurify" text="DOMPurify" alt="DOMPurify GitHub repo" />.

<b>4.</b> Define a strict <span class="color:accent"><code>Content-Security-Policy</code></span> tailored for your site / web app.

<Citation
  citeHref="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#sole-reliance-on-content-security-policy-csp-headers"
  citeText="Cross Site Scripting Prevention Cheat Sheet (Common Anti-patterns)">
  <template v-slot:quote>
    <div slot="quote">
      <p>In the context of XSS defense, CSP works best when it it is:</p>
      <ul>
        <li>Used as a defense-in-depth technique.</li>
        <li>Customized for each individual application rather than being deployed as a one-size-fits-all solution.</li>
      </ul>
    </div>
  </template>
</Citation>

</Transform>

<!--
In order for an XSS attack to be successful, an attacker must be able to to insert and execute malicious content in a webpage. Thus, all variables in a web application needs to be protected. Ensuring that all variables go through validation and are then escaped or sanitized is known as perfect injection resistance.

Frameworks steer developers towards good security practices and help mitigate XSS by using templating, auto-escaping, and more.

Aaron Bedra at Clojure/west 2014 says that Clojure web apps are among the worst he has seen, in terms of web security. They were often at the same level of PHP apps that use no framework. It's because often Clojure developers use many small libraries instead of big frameworks.

When you wish to display data as the user typed it in, start with your framework’s default output encoding protection. Automatic [encoding and escaping functions](https://owasp.org/www-project-proactive-controls/v3/en/c4-encode-escape-data) are built into most frameworks.

If you're not using a framework or need to cover gaps in the framework then you should use an output encoding library.

For example, if a user enters <script>alert('XSS')</script> into a comment field, and the web application displays it without output encoding, the browser will execute the script and show an alert message. 

When we do output encoding we need to consider these contexts:

- HTML contexts
- HTML attribute contexts
- JS contexts
- CSS contexts
- URL contexts

Output encoding is not perfect. It will not always prevent XSS. These locations are known as [dangerous contexts](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#dangerous-contexts).

See [XSS Experimental Minimal Encoding Rules](https://wiki.owasp.org/index.php/XSS_Experimental_Minimal_Encoding_Rules).

Cross-Site Scripting (XSS) is a misnomer. Originally this term was derived from early versions of the attack that were primarily focused on stealing data cross-site. Since then, the term has widened to include injection of basically any content.
-->
