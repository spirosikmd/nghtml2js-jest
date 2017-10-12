# nghtml2js-jest

Jest preprocessor to turn Angular 1 templates into JS and put in modules.

[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![PRs Welcome][prs-badge]](http://makeapullrequest.com)
[![All Contributors][all-contributors-badge]](#contributors)

## Install

`npm install --save-dev ng2html2js nghtml2js-jest` or `yarn ng2html2js nghtml2js-jest --dev`

## Example

Assuming the project uses babel, create a `jest.json` file and use the `nghtml2js-jest` preprocessor to transform html files.
The `test/setup.js` file will probably be needed to import `angular` and `angular-mocks`. 

```json
{
  "bail": true,
  "verbose": true,
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.html$": "<rootDir>/node_modules/nghtml2js-jest/preprocessor.js"
  },
  "moduleFileExtensions": [
    "js"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/test/setup.js"
}
```

For a more complete example have a look at the [example](./example) folder.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/1057324?v=4" width="100px;"/><br /><sub>Spyros Ioakeimidis</sub>](http://www.spyros.io)<br />[💬](#question-spirosikmd "Answering Questions") [💻](https://github.com/spirosikmd/nghtml2js/commits?author=spirosikmd "Code") [⚠️](https://github.com/spirosikmd/nghtml2js/commits?author=spirosikmd "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.
Contributions of any kind welcome!

[version-badge]: https://img.shields.io/npm/v/nghtml2js-jest.svg?style=flat-square
[package]: https://www.npmjs.com/package/nghtml2js-jest
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[build-badge]: https://img.shields.io/travis/spirosikmd/nghtml2js-jest.svg?style=flat-square
[build]: https://travis-ci.org/spirosikmd/nghtml2js-jest.svg
[all-contributors-badge]: https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square
[greenkeeper-badge]: https://badges.greenkeeper.io/spirosikmd/nghtml2js-jest.svg
