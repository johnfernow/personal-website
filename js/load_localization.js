---
---
function loadLocalization(page) {
  // autodetect language if user has not manually set it
  if (localStorage.getItem("userLanguage") === null) {
    var opts = { pathPrefix: "{{site.baseurl}}/localizations" };
  }
  // load saved language preference if set
  else {
    var opts = { language: localStorage.userLanguage, pathPrefix: "{{site.baseurl}}/localizations" };
  }

  $(function(){
    $("[data-localize]").localize(page, opts);
  })
}
