'use strict';

/**
 * @ngdoc function
 * @name playlistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the playlistApp
 */
angular.module('playlistApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.playlistVideos = [
    	{'name': 'video1'}
    ];
    $scope.searchResults = [
    	{'name': 'video1', 'drag': true},
    	{'name': 'video2', 'drag': true},
    	{'name': 'video3', 'drag': true}
    ];

	//instantiation
	setTimeout(function(){
		$('.searchResults').draggable();
		$('.playlist').droppable({
			drop: function(event, ui) {
				console.log(event);
				$scope.playlistVideos.push({name: 'test'});
				var index = $scope.searchResults.indexOf(ui.name);
 				$scope.searchResults.splice(index, 1);
			}
		});
	}, 1000)
  });
