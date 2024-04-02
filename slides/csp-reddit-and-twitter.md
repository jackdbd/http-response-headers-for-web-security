---
layout: two-cols
title: "CSP examples: Reddit & Twitter"
---
<h1>CSP: Reddit</h1>

<Transform scale="0.9">

```txt
child-src 'self' blob: accounts.google.com;
connect-src 'self' events.redditmedia.com o418887.ingest.sentry.io *.redd.it *.reddit.com www.redditstatic.com vimeo.com alb.reddit.com accounts.google.com/gsi/ w3-reporting.reddit.com reddit-uploaded-media.s3-accelerate.amazonaws.com reddit-uploaded-video.s3-accelerate.amazonaws.com reddit-subreddit-uploaded-media.s3-accelerate.amazonaws.com wss://*.wss.redditmedia.com wss://gql-realtime.reddit.com *.giphy.com js.stripe.com support.reddithelp.com matrix.redditspace.com;
default-src 'self';
font-src 'self' data:;
form-action 'none';
frame-ancestors 'self' *.reddit.com *.snooguts.net;
frame-src 'self' www.reddit.com www.youtube-nocookie.com player.vimeo.com *.redditmedia.com cdn.embedly.com redgifs.com www.redgifs.com accounts.google.com/gsi/ www.google.com/recaptcha/ recaptcha.google.com/recaptcha/ js.stripe.com hooks.stripe.com;
img-src 'self' data: blob: https:;
manifest-src 'self' www.redditstatic.com;
media-src 'self' blob: data: *.redd.it www.redditstatic.com;
object-src 'none';
script-src 'self' 'unsafe-inline' 'unsafe-eval' www.redditstatic.com www.google.com/recaptcha/ js.stripe.com accounts.google.com/gsi/client 'nonce-8f6JBRpShdycJgqXFi/xRg==';
style-src 'self' 'unsafe-inline' www.redditstatic.com *.reddit.com accounts.google.com/gsi/style;
style-src-attr 'unsafe-inline';
worker-src 'self' blob:;
report-to csp;
report-uri https://w3-reporting-csp.reddit.com/reports
```

There are 30+ CSP directives for a variety of resources, including fonts, frames, images, audio and video media, scripts, and workers.

</Transform>

::right::

<h1>CSP: X / Twitter</h1>

<Transform scale="0.9">

```txt
connect-src 'self' blob: https://api.x.ai https://api.x.com https://*.pscp.tv https://*.video.pscp.tv https://*.twimg.com https://api.twitter.com https://api.x.com https://api-stream.twitter.com https://api-stream.x.com https://ads-api.twitter.com https://ads-api.x.com https://aa.twitter.com https://aa.x.com https://caps.twitter.com https://caps.x.com https://pay.twitter.com https://pay.x.com https://sentry.io https://ton.twitter.com https://ton.x.com https://ton-staging.atla.twitter.com https://ton-staging.atla.x.com https://ton-staging.pdxa.twitter.com https://ton-staging.pdxa.x.com https://twitter.com https://x.com https://upload.twitter.com https://upload.x.com https://www.google-analytics.com https://accounts.google.com/gsi/status https://accounts.google.com/gsi/log https://checkoutshopper-live.adyen.com wss://*.pscp.tv https://vmap.snappytv.com https://vmapstage.snappytv.com https://vmaprel.snappytv.com https://vmap.grabyo.com https://dhdsnappytv-vh.akamaihd.net https://pdhdsnappytv-vh.akamaihd.net https://mdhdsnappytv-vh.akamaihd.net https://mdhdsnappytv-vh.akamaihd.net https://mpdhdsnappytv-vh.akamaihd.net https://mmdhdsnappytv-vh.akamaihd.net https://mdhdsnappytv-vh.akamaihd.net https://mpdhdsnappytv-vh.akamaihd.net https://mmdhdsnappytv-vh.akamaihd.net https://dwo3ckksxlb0v.cloudfront.net https://media.riffsy.com https://*.giphy.com https://media.tenor.com https://c.tenor.com https://ads-twitter.com https://analytics.twitter.com https://analytics.x.com;
default-src 'self';
form-action 'self' https://twitter.com https://*.twitter.com https://x.com https://*.x.com https://localhost.twitter.com:3443 https://localhost.x.com:3443;
font-src 'self' https://*.twimg.com;
frame-src 'self' https://twitter.com https://x.com https://mobile.twitter.com https://mobile.x.com https://pay.twitter.com https://pay.x.com https://cards-frame.twitter.com https://accounts.google.com/ https://client-api.arkoselabs.com/ https://iframe.arkoselabs.com/ https://vaultjs.apideck.com/ https://recaptcha.net/recaptcha/ https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;
img-src 'self' blob: data: https://*.cdn.twitter.com https://*.cdn.x.com https://ton.twitter.com https://ton.x.com https://*.twimg.com https://analytics.twitter.com https://analytics.x.com https://cm.g.doubleclick.net https://www.google-analytics.com https://maps.googleapis.com https://www.periscope.tv https://www.pscp.tv https://ads-twitter.com https://ads-api.twitter.com https://ads-api.x.com https://media.riffsy.com https://*.giphy.com https://media.tenor.com https://c.tenor.com https://*.pscp.tv https://*.periscope.tv https://prod-periscope-profile.s3-us-west-2.amazonaws.com https://platform-lookaside.fbsbx.com https://scontent.xx.fbcdn.net https://scontent-sea1-1.xx.fbcdn.net https://*.googleusercontent.com https://t.co/1/i/adsct;
manifest-src 'self';
media-src 'self' blob: https://twitter.com https://x.com https://*.twimg.com https://*.vine.co https://*.pscp.tv https://*.video.pscp.tv https://dhdsnappytv-vh.akamaihd.net https://pdhdsnappytv-vh.akamaihd.net https://mdhdsnappytv-vh.akamaihd.net https://mdhdsnappytv-vh.akamaihd.net https://mpdhdsnappytv-vh.akamaihd.net https://mmdhdsnappytv-vh.akamaihd.net https://mdhdsnappytv-vh.akamaihd.net https://mpdhdsnappytv-vh.akamaihd.net https://mmdhdsnappytv-vh.akamaihd.net https://dwo3ckksxlb0v.cloudfront.net;
object-src 'none';
script-src 'self' 'unsafe-inline' https://*.twimg.com https://recaptcha.net/recaptcha/ https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://client-api.arkoselabs.com/ https://www.google-analytics.com https://twitter.com https://x.com https://accounts.google.com/gsi/client https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js https://static.ads-twitter.com 'nonce-NzU0M2Y3MjItNWMxZS00NzliLThmMGMtYTEwNTJlMGNkMzZi';
style-src 'self' 'unsafe-inline' https://accounts.google.com/gsi/style https://*.twimg.com;
worker-src 'self' blob:;
report-uri https://twitter.com/i/csp_report?a=O5RXE%3D%3D%3D&ro=false
```

[Browser support](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#browser_compatibility) is messy. For example:

- older browsers may support `style-src`, but not `style-src-attr` or `style-src-elem`.
- Firefox: no `report-to`, no `trusted-types`.
- Safari: no `manifest-src`, no `trusted-types`.

</Transform>
