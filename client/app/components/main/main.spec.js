import MainModule from './main'

describe('Home', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(MainModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('default component should be main', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).to.eq('main');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('main', {
        $scope: $rootScope.$new()
      });
    });

    it('has a name property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('name');
    });
  });
});
