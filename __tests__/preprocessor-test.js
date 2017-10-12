const {process} = require('../preprocessor');

jest.mock('ng-html2js');

describe('preprocessor', () => {
  beforeEach(() => {
    require('ng-html2js');
  });

  it('passes', () => {
    const path = 'path';
    const src = 'src';
    const result = process(path, src);
    expect(result).toBe('src,path,ng,angularModule\nmodule.exports=\'src\'');
  });
});
