Package.describe({
  name: 'arcjet:radioactive',
  version: '1.0.0',
  summary: 'Collection-aware reactivity-driven Isotope implemention for Meteor',
  git: 'https://github.com/arcjet/radioactive.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use('ecmascript');
  api.use('templating');
  api.use('underscore');
  api.use('reactive-var');
  api.use('isotope:isotope');
  api.use('shcherbin:imagesloaded');

  api.imply('reactive-var');

  api.addFiles('radioactive.html', 'client');
  api.addFiles('radioactive.js', 'client');
  api.addFiles('radioactive-item.html', 'client');
  api.addFiles('radioactive-item.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('arcjet:radioactive');

  api.addAssets('radioactive-tests.html', 'client');
  api.addAssets('radioactive-tests.css', 'client');
  api.addAssets('radioactive-tests.js', 'client');
});
