Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "0.1.2",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use(['kestanous:herald@0.8.0', 'underscore'])
  api.addFiles('lib/web-notifications.js');
});
