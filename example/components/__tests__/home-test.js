import app from '../../app';

describe('Home', () => {
  let controller;

  beforeEach(angular.mock.module(app.name));

  beforeEach(angular.mock.inject(($componentController) => {
    controller = $componentController('home');
  }));

  it('controller has value "foo" after $onInit', () => {
    controller.$onInit();
    expect(controller.value).toBe('foo');
  });
});
