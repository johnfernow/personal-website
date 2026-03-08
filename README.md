# John Fernow's Personal Website

https://johnfernow.com

Technologies: [Eleventy (11ty)](https://github.com/11ty/eleventy), [MVP.css](https://github.com/andybrewer/mvp), [Iconify](https://github.com/iconify/iconify), HTML, CSS.

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
* All external links that open in new tabs MUST include rel="noopener"
for [security
reasons](https://developers.google.com/web/tools/lighthouse/audits/noopener).  

* [To prevent Cumulative Layout Shift (CLS)](https://web.dev/articles/optimize-cls#images-without-dimensions), always include `width` and `height` attributes on image and video elements (or reserve required space in some other manner if element size is dynamic/varies.)

### MVP.css gotcha: images in `<header>`
MVP.css only applies `max-width: 100%` to images inside `<section>` and
`<article>` elements (`section img, article img`). Images higher up in the DOM 
have no max-width constraint and will overflow on mobile. Keep
page content (especially images) inside `<section>` elements.
