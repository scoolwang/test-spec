describe('MainCtrl', function(){
    var scope,$http, $httpBackend;//we'll use these in our tests
 
    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('Application'));


    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($injector,$rootScope, $controller, _$httpBackend_,_$http_){
        $httpBackend = _$httpBackend_;
        $http = _$http_;
        $httpBackend.when('GET', 'Users/users.json').respond([{id: 1, name: 'Bob'}, {id:2, name: 'Jane'}]);
        // spyOn(UserFactory)
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('MainCtrl', {$scope:scope});
    }))

    it('expect:expect方法调用一次后会被清除，第二次调用就会报错', function () {
        var response, status;
        $httpBackend.expectGET(/expect.com/).respond(200, {
            message: 'Expect successfully!'
        });
        $http.get('http://expect.com').success(function(data, _status){
            response = data;
            status = _status;
        });
        $http.get('http://expect.com').success(function(data, _status){
            response = {
                message:'第二次调用'
            }
            status = 200;
        });
        $httpBackend.flush();
        expect(response.message).toBe('Expect successfully!');
        expect(status).toBe(200);
    });
    it('when:when方法可以调用多次', function () {
        var response, status;
        $httpBackend.whenGET(/expect.com/).respond(200, {
            message: 'Expect successfully!'
        });

        $http.get('http://expect.com').success(function(data, _status){
            response = {
                message:'第二次调用'
            }
            status = 200;
        });
        $http.get('http://expect.com').success(function(data, _status){
            response = data;
            status = _status;
        });        
        $httpBackend.flush();
        expect(response.message).toBe('Expect successfully!');
        expect(status).toBe(200);
    });

    // tests start here
    it('should have variable text ', function(){
        expect(scope.text).toBe('Hello World!');
    })
    it('should fetch list of users', function(){
        $httpBackend.flush();
        expect(scope.users.length).toBe(2);
        expect(scope.users[0].name).toBe('Bob');
    });
    it('Expect order test', function(){
        $httpBackend.expectGET(/order1.com/).respond(200);
        $httpBackend.expectGET(/order2.com/).respond(200);
        
        $http.get('http://order1.com');
        $http.get('http://order2.com');
        $httpBackend.flush();
    });    
})