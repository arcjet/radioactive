Package.describe({
  name: 'arcjet:radioactive',
  version: '1.0.0',
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
  api.use('isotope:isotope@2.1.0_1');
  api.use('shcherbin:imagesloaded@3.1.8');

  api.imply('reactive-var');

  api.addFiles('radioactive.html', 'client');
  api.addFiles('radioactive.js', 'client');
  api.addFiles('radioactive-item.html', 'client');
  api.addFiles('radioactive-item.js', 'client');
});
