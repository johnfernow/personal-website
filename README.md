# John Fernow's Personal Website

https://johnfernow.com (URL coming soon)

Technologies: Jekyll, Bootstrap, jQuery, Popper.js, jQuery Localize, Font Awesome,
Devicon, DevOpicons, HTML and CSS.

## Building
### Requirements
* [Jekyll](https://jekyllrb.com/docs/installation/)

### Making and testing changes
* `cd Personal-Website`
* _make changes_ (reading [Jekyll documentation](https://jekyllrb.com/docs/)
is recommended)
* test locally
 * `jekyll serve`
 * go to the printed server address
* test on other devices on the network (example your phone)
 * connect all devices to the same network
 *  `jekyll serve --host=0.0.0.0`
 * find your host computer's IP address
   * Linux and Mac: `ifconfig`
   * Windows: `ipconfig`
   * it'll probably look something like `192.168.x.y`, with `x` and `y` replaced
   by numbers.
 * connect to the host IP address using the port printed after executing
 `jekyll serve --host=0.0.0.0`
   * example: If your host IP address (found using `ifconfig` or `ipconfig`)
   were `192.168.1.5`, and jekyll printed `Server address: http://0.0.0.0:4000`,
   go to the address 192.168.1.5:4000 on your phone's browser (or other device
   that you're testing on).
* NOTE: if the site looks different locally than when published, it's likely
because GitHub Pages is running a different version of Jekyll than what is
installed locally.
 * If that becomes too much of a hassle, the project can always be built
 locally and published to a branch called gh-pages (after configuring that to be
 the source build page) and include a .nojekyll file so GitHub won't try to
 rebuild it.
* NOTE: `{{site.url}}` will direct to the homepage fine locally but seems to fail
if the URL is a GitHub Pages project page (not a GitHub Pages user or
organization page or a custom URL). This can be resolved by specifying
`{{site.url}}/index.html`, but shouldn't be necessary with a custom URL.

## Contributing
All external links that open in new tabs MUST include rel="noopener noreferrer"
for [security
reasons](https://developers.google.com/web/tools/lighthouse/audits/noopener).

## Publishing
As long as you don't use any Jekyll plugins that aren't [supported by GitHub
Pages](https://pages.github.com/versions/), GitHub Pages will automatically
display the master branch at the URL it is set to in the settings page.

If you want to use custom plugins, you can [follow this post](https://stackoverflow.com/questions/28249255/how-do-i-configure-github-to-use-non-supported-jekyll-site-plugins/28252200#28252200).
