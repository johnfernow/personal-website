# John Fernow's Personal Website

https://johnfernow.com

Technologies: Jekyll, Bootstrap, jQuery Localize, Font Awesome,
Devicon, DevOpicons, HTML and CSS.

## Building
### Requirements
* [Jekyll](https://jekyllrb.com/docs/installation/)  
  * use latest version supported by GitHub Pages](https://pages.github.com/versions/)

* NOTE: if the site looks different locally than when published, it's likely
because GitHub Pages is running a different version of Jekyll than what is
installed locally.
  * If that becomes too much of a hassle, the project can always be built
  locally and published to a branch called `gh-pages` (after configuring that to be
  the source build page) and include a `.nojekyll` file so GitHub won't try to
  rebuild it.  

* NOTE: `{{site.url}}` will direct to the homepage fine locally but seems to fail
if the URL is a GitHub Pages project page (not a GitHub Pages user or
organization page or a custom URL). This can be resolved by specifying
`{{site.url}}/index.html`, but shouldn't be necessary with a custom URL.

## Contributing
All external links that open in new tabs MUST include rel="noopener"
for [security
reasons](https://developers.google.com/web/tools/lighthouse/audits/noopener).

## Publishing
As long as you don't use any Jekyll plugins that aren't [supported by GitHub
Pages](https://pages.github.com/versions/), GitHub Pages will automatically
display the master branch at the URL it is set to in the settings page.
