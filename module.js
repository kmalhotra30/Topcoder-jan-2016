var app=angular.module('we',[]);

app.controller('mainc',function($scope,$http){
     $http.get("https://rolz.org/api/?"+dice+".json")
      .success(function(data){
        $scope.w=data;
        $scope.z=$scope.w.result;


        $http.get("http://gateway.marvel.com/v1/public/comics/" + $scope.z+ "?apikey=API_KEY&ts=1")
      .success(function(data){
        $scope.y=data;
        $scope.x=$scope.y.data.results[0].images[0].path + "." + $scope.y.data.results[0].images[0].extension;
      })
      .error(function(err){
        return err;
      });



      })
      .error(function(err){
        return err;
      });
  });
