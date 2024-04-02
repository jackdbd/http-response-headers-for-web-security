---
class: pl-5% pr-5% pt-10%
layout: center
title: Likelihood and Impact of XSS vulnerabilities
---
<h1>Likelihood and Impact of XSS vulnerabilities</h1>

<Transform scale="0.95">

In risk analysis: $Risk = Likelihood \times Impact$

<div class="grid grid-cols-2 grid-gap-2">
  <div>
    <h2>Likelihood</h2>
    <p>If there is no way to enter untrusted data on the website (i.e. no <code>input</code>, no <code>textarea</code>, etc), XSS attacks will be unlikely but not impossible (e.g. a malicious Chrome extension).</p>
    <p>The more <code>input</code>, <code>textarea</code>, etc there are, the easier will be to forget to perform HTML sanitization on at least one of them.</p>
    <p>If JS is disabled, client-side XSS attacks are not possible. However, attacks that exploit server-side vulnerabilities or manipulate HTML and CSS in a way that doesn't rely on JS execution are still possible.</p>
  </div>

  <div>
    <h2>Impact</h2>
    <Citation 
    citeHref="https://portswigger.net/web-security/cross-site-scripting#impact-of-xss-vulnerabilities" 
    citeText="Impact of XSS vulnerabilities">
      <template v-slot:quote>
        <p slot="quote">
        The <span class="color:accent">actual</span> impact of an XSS attack generally depends on the nature of the application, its functionality and data, and the status of the compromised user.
        </p>
      </template>
    </Citation>
    <p>In a brochureware website, where all users are anonymous and all information is public, the impact will often be low.</p>
    <p>In a website holding sensitive data, such as banking transactions, credit card numbers, or healthcare records, the impact will usually be high.</p>
  </div>
</div>

The <Anchor href="https://owasp.org/www-community/OWASP_Risk_Rating_Methodology" text="OWASP Risk Rating Methodology page" alt="OWASP Risk Rating Methodology page" /> offers guidelines for assessing likelihood and impact, and for estimating the resulting risk.

</Transform>

<!--
- In a brochureware application, where all users are anonymous and all information is public, the impact will often be minimal.
- In an application holding sensitive data, such as banking transactions, emails, or healthcare records, the impact will usually be serious.
- If the compromised user has elevated privileges within the application, then the impact will generally be critical, allowing the attacker to take full control of the vulnerable application and compromise all users and their data.

One of the common ways of explaining defense in depth is the, so called, Swiss cheese model which has its origins in the field of safety management. This model is problematic because it does not support defense in depth working at multiple dimensions from policy and governance to technical controls. This omission leads to viewing risk and risk mitigation as a simple chain of events without being able to look at the wider system which induced the design factors that led to the event. This is why defense in depth should be a systems concept not simply a controls concept.
https://www.philvenables.com/post/defense-in-depth

In the Swiss cheese model, an organization’s defenses against failure are represented by slices of cheese, while the holes in the slices – which vary in size and position in each slice – represent weaknesses in individual parts of the system. Failure occurs when the holes in the slices align, allowing a hazard to pass through all of the layers of defense.
https://www.linkedin.com/pulse/swiss-cheese-model-cybersecurity-hicham-faik/
-->
