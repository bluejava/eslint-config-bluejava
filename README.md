# eslint-config-bluejava [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-bluejava.svg
[npm-url]: https://npmjs.org/package/eslint-config-bluejava
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-bluejava.svg
[downloads-url]: https://npmjs.org/package/eslint-config-bluejava

This is an Eslint sharable configuration that contains an opinionated take on best practices in writing and formatting JavaScript code. I reviewed the [eslint recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js) settings, the [standard configuration](https://github.com/standard/eslint-config-standard), and the [Airbnb configuration](https://github.com/airbnb/javascript) and carefully considered their recommendations balanced with my own experience developing with JavaScript.

This config itself extends the `eslint:recommended` ruleset.

This is the result. It leans towards minimalism (no semicolons or other unnecessary punctuation with a few exceptions), the [Allman/BSD](https://en.wikipedia.org/wiki/Indentation_style#Allman_style) style of indentation for maximum clarity, tabs for indentation, organized import statements, etc.

If you generally like this approach but with some small modifications, you can extend this and provide rule overrides.

This package also follows the bluejava approach of small, simple, single-purpose, minimal tooling - so it would be easy to clone this and make changes or rip out any valuable bits for your own sharable configuration.

## Install

To use this package, simply install it:

```bash
npm install --save-dev eslint-config-bluejava
```

or

```bash
yarn add --dev eslint-config-bluejava
```

and then, in your `package.json`, add the following:

```json
  "eslintConfig": {
    "extends": "bluejava"
  },
```

## Usage

Once configured you can check your code via the command line (`eslint <src>`) or more commonly, via an eslint plugin for your browser.

You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

For help in integrating with your editor, see [Integrations](https://eslint.org/docs/user-guide/integrations).

## Final Ruleset

The final resulting ruleset created by this configuration can be seen in the [rules-report.json](./rules-report.json) file in this repository.

## License

See the [LICENSE](LICENSE.txt) file for license rights and limitations (MIT).