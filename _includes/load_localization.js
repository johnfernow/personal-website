function loadLocalization(page) {
  $(function(){
    var opts = { pathPrefix: "{{site.baseurl}}/localizations" };
    $("[data-localize]").localize(page, opts);
  })
}
