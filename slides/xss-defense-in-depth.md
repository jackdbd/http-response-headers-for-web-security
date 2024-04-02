---
class: pl-15% pr-15%
layout: center
title: Cross-Site Scripting (XSS)
---
<h1>Defense-in-depth</h1>

<Transform scale="1">

Even if we use anti-forgery tokens <span class="color:accent">and</span> `SameSite` cookies to mitigate CSRF...

<Citation
  citeHref="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html"
  citeText="Cross-Site Request Forgery Prevention Cheat Sheet">
  <template v-slot:quote>
    <p slot="quote">
    Cross-Site Scripting (XSS) can defeat all CSRF mitigation techniques!
    </p>
  </template>
</Citation>

...we still need to mitigate XSS to avoid CSRF attacks.

<Citation
  citeHref="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"
  citeText="Cross Site Scripting Prevention Cheat Sheet">
  <template v-slot:quote>
    <p slot="quote">
    Since no single technique will solve XSS, using the right combination of defensive techniques will be necessary to prevent XSS.
    </p>
  </template>
</Citation>

<p class="mb-0!">This approach of <b>layered security</b> is called <span class="color:accent">defense-in-depth</span>. The principle behind it is the so-called <span class="color:accent">Swiss cheese model</span>.</p>

<div class="">
  <img src="/swiss-cheese-model.png" class="w-30% m-auto" />
</div>

</Transform>

<!--
The Swiss cheese model is used in risk analysis and risk management, including aviation safety, engineering, healthcare, emergency service organizations, and as the principle behind layered security.

To the left: security hazards (security threat is not the same thing)
To the right: security incident

According to this model, you need to build your defense mechanisms in a layered model so that even the attackers pass the first one, they will get caught on the others.

https://utkusen.com/blog/security-by-obscurity-is-underrated

Cross-Site Scripting (XSS) is a misnomer. Originally this term was derived from early versions of the attack that were primarily focused on stealing data cross-site. Since then, the term has widened to include injection of basically any content.

XSS attacks are serious and can lead to account impersonation, observing user behaviour, loading external content, stealing sensitive data, and more.

https://cheatsheetseries.owasp.org/cheatsheets/XSS_Filter_Evasion_Cheat_Sheet.html

https://wiki.owasp.org/index.php/XSS_Experimental_Minimal_Encoding_Rules
-->
