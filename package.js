Package.describe({
  name: 'quadric:cssx',
  version: '1.0.0',
  summary: 'Transpile CSSX',
  git: 'https://github.com/quadric/meteor-cssx',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('isobuild:compiler-plugin@1.0.0');
  api.use(['babel-compiler', 'ecmascript'], ['server']);

  // api.imply('modules');
  // api.imply('ecmascript-runtime');
  // api.imply('babel-runtime');
  // api.imply('promise');

  api.addFiles('compiler.js', 'server');
  api.export('CssxCompiler', 'server');
});

const npmDependencies = {
  "cssx-transpiler": "5.2.0",
}

Npm.depends(npmDependencies)

Package.registerBuildPlugin({
  npmDependencies,
  name: 'cssx',
  use: ['babel-compiler', 'ecmascript'],
  sources: [
    'compiler.js',
    'plugin.js'
  ],
});
