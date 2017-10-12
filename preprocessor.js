const nghtml2js = require('ng-html2js');

module.exports.process = (src, path) => {
  return `${nghtml2js(
    path,
    src,
    'ng',
    'angularModule'
  )}\nmodule.exports='${path}'`;
};
