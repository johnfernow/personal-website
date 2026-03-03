# John Fernow's Personal Website

https://johnfernow.com

Technologies: Eleventy (11ty), MVP.css, Font Awesome, Devicon, DevOpicons, HTML, CSS.

## Building

### Requirements
* Node.js (v18 or later recommended)

### Install dependencies
```bash
npm install
```

### Development server
```bash
npm start
```
This starts a local server at http://localhost:8080 with live reload.

### Production build
```bash
npm run build
```
Output goes to `_site/`.

## Contributing
All external links that open in new tabs MUST include rel="noopener"
for [security
reasons](https://developers.google.com/web/tools/lighthouse/audits/noopener).

### MVP.css gotcha: images in `<header>`
MVP.css only applies `max-width: 100%` to images inside `<section>` and
`<article>` elements (`section img, article img`). Images higher up in the DOM 
have no max-width constraint and will overflow on mobile. Keep
page content (especially images) inside `<section>` elements.

## Publishing
* TODO: add steps  
