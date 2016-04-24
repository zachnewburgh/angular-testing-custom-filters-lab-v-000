describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should return the favorite food', function() {
    var people = [
      { name: 'Zach',
        favoriteFood: 'chicken'},

      { name: 'Jonny',
        favoriteFood: 'beef'}]

    var results = $filter('favoriteFood')(people, 'chicken')

    expect(results.length).toBe(1);
  })
	
});
