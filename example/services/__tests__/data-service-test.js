import app from '../../app';

describe('DataService', () => {
  let service;

  beforeEach(angular.mock.module(app.name));

  beforeEach(angular.mock.inject((DataService) => {
    service = DataService;
  }));

  it('getValue returns "foo"', () => {
    expect(service.getValue()).toBe('foo');
  });
});
