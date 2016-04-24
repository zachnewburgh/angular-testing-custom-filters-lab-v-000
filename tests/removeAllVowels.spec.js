describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should remove all vowels from the word', function() {
    var str = $filter('removeAllVowels')('food');
    expect(str).toEqual("fd")
  })

});
