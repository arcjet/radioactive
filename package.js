Package.describe({
  name: 'arcjet:radioactive',
  version: '1.0.2',
  summary: 'Collection-aware reactivity-driven Isotope implementation for Meteor',
  git: 'https://github.com/arcjet/radioactive.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use('ecmascript');
  api.use('templating');
  api.use('underscore');
  api.use('reactive-var');
  api.use('manuel:reactivearray');

  api.addFiles('lib/get-style-property.js', 'client');
  api.addFiles('lib/get-size.js', 'client');
  api.addFiles('lib/imagesloaded.pkgd.js', 'client');

  api.addFiles('radioactive.html', 'client');
  api.addFiles('radioactive.js', 'client');
  api.addFiles('radioactive-item.html', 'client');
  api.addFiles('radioactive-item.js', 'client');
});
