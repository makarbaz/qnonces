# QNONCE Cinematic Cybersecurity Refresh

## What's included
- Retained the original seven-page site structure and navigation.
- Added `css/cinematic-upgrade.css` as a layered visual refresh so the original stylesheet remains available.
- Applied a deep navy / electric cyan palette, glass-like verification panels, refined typography, responsive layouts, hover feedback, focus states and reduced-motion support.
- Improved mobile navigation accessibility (expanded state, Escape-to-close, outside click).
- Improved the verification preview wording: matching IDs are explicitly described as hard-coded demo records, not live authenticity decisions.
- Improved the contact form's browser-side validation and changed its confirmation to clearly state that no request is transmitted or stored.

## Important production boundary
This is a front-end website package. The verification ID logic remains a local demonstration, and the contact form does not send submissions to a server. Before production use, connect verification to an authoritative backend and implement server-side record validation, scan-event/risk logic, abuse controls, and a real form delivery endpoint. Do not treat a QR scan or a client-side result alone as proof of physical authenticity.

## Run locally
Open `index.html` directly, or run a local server from this folder:

```bash
python -m http.server 5500
```

Then visit `http://localhost:5500`.
