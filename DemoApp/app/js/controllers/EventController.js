'use strict';



eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.myStyle = {color: 'red'};
        $scope.myClass = "blue";
        $scope.event = {
            name: "AngularJS",
            date: '04/14/1987',
            time: 'never ending time',
            location: {
                address: '5978 N Spring Bridge',
                city: 'Eagle Mountain',
                state: 'UT'
            },
            imageUrl: '../../img/angularjs-logo.png',
            sessions: [{
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    upVoteCount: 0,
                    abstract: 'In this sessions you will learn alot of fun stuff'
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    upVoteCount: 0,
                    abstract: 'In this sessions you will learn alot of fun stuff'
                },
                {
                    name: 'Well behaved controllers',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    upVoteCount: 0,
                    abstract: 'In this sessions you will learn alot of fun stuff'
                },
            ]
        };

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

    }
);