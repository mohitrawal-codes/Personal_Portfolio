# Portfolio — Customisation & Deployment Guide

## Folder Structure

```
portfolio/
├── index.html
├── css/style.css
├── js/main.js
├── assets/
│   └── resume.pdf          ← ADD YOUR RESUME HERE
└── pages/
    ├── projects.html
    ├── about.html
    ├── certifications.html
    └── contact.html
```

---

## What to Replace Before Submitting

### In every HTML file:
- `YourName` → your real name
- `YourName.dev` → your domain or netlify URL

### projects.html (JavaScript card):
- Title, description, features → your own JS project info
- `YOUR_NETLIFY_OR_LIVE_URL` → live link
- `YOUR_GITHUB_REPO_URL` → GitHub repo link
- PHP project URLs → your 000Webhost live URLs
- Figma iframes → paste your embed code inside the commented blocks

### How to get a Figma embed URL:
1. Open your prototype in Figma
2. Share → Get embed code
3. Copy the iframe src URL
4. Uncomment the `<iframe>` tag in projects.html and paste it in

### contact.html:
- `your.email@example.com` → your real email (in the form action too)
- `_next` URL → your live Netlify URL
- Social links → your real handles

### about.html:
- Fill in your real name, city, degree details

---

## Deploy to Netlify (Portfolio + JS Project)

1. Go to netlify.com → sign in
2. "Add new site" → "Deploy manually"
3. Drag the `portfolio/` folder (not the zip)
4. Live at: yourname.netlify.app

## Deploy PHP Projects (000Webhost)

1. Create account at 000webhost.com
2. Create site → File Manager → upload your PHP files
3. Go to phpMyAdmin → import your .sql database
4. Copy the live URL → paste into projects.html

---

## Design Notes

- Theme: Brutalist editorial — cream paper, black ink, orange accent
- Fonts: Bebas Neue (display) · IBM Plex Mono (body) · Fraunces (italic accent)
- No purple anywhere
- Skills section uses flat tags — no progress bars
- Color palette tool removed — your own JS project goes in its place
