// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: loopback-example-offline-sync
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

describe('Controller: ChangeCtrl', function () {

  // load the controller's module
  beforeEach(module('loopbackExampleFullStackApp'));

  var ChangeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChangeCtrl = $controller('ChangeCtrl', {
      $scope: scope
    });
  }));

  it('should attach `clearLocalStorage()` to the scope', function () {
    expect(typeof scope.clearLocalStorage).toBe('function');
  });
});
